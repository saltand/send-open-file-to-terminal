import type { Selection, Terminal, Uri } from 'vscode'
import path from 'node:path'
import { defineExtension, useCommands } from 'reactive-vscode'
import { window, workspace } from 'vscode'

const COMMAND_ID = 'send-open-file-to-terminal.sendActiveFile'

const { activate, deactivate } = defineExtension(() => {
  useCommands({
    [COMMAND_ID]: () => {
      const editor = window.activeTextEditor
      if (!editor || editor.document.isUntitled) {
        window.showWarningMessage('No active saved file')
        return
      }

      const relativePath = getRelativePath(editor.document.uri)
      if (!relativePath) {
        window.showWarningMessage('Unable to resolve a workspace-relative path for the file')
        return
      }

      const selection = editor.selections.find(sel => !sel.isEmpty) ?? editor.selection
      const hasSelection = selection && !selection.isEmpty

      const normalizedPath = normalizePath(relativePath)
      const payload = hasSelection
        ? formatPathWithRange(normalizedPath, selection.start.line + 1, getSelectionEndLine(selection))
        : formatPath(normalizedPath)

      const terminal = getOrCreateTerminal()
      terminal.sendText(payload, false)
      terminal.show()
    },
  })
})

function normalizePath(filePath: string) {
  return filePath.split(path.sep).join('/')
}

function formatPath(filePath: string) {
  return `@${filePath}`
}

function formatPathWithRange(filePath: string, start: number, end: number) {
  const base = formatPath(filePath)
  return start === end
    ? `${base}#L${start}`
    : `${base}#L${start}-${end}`
}

function getRelativePath(uri: Uri) {
  if (!workspace.workspaceFolders?.length)
    return undefined

  const relative = workspace.asRelativePath(uri)
  return relative === uri.fsPath ? undefined : relative
}

function getSelectionEndLine(selection: Selection) {
  const endLine = selection.end.line + 1
  if (selection.end.character === 0 && selection.end.line > selection.start.line)
    return endLine - 1
  return endLine
}

function getOrCreateTerminal(): Terminal {
  let terminal = window.activeTerminal

  if (!terminal)
    terminal = window.terminals[window.terminals.length - 1]

  if (!terminal)
    terminal = window.createTerminal()

  return terminal
}

export { activate, deactivate }
