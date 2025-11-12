# Send Open File To Terminal

<a href="https://marketplace.visualstudio.com/items?itemName=saltand.send-open-file-to-terminal" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/saltand.send-open-file-to-terminal.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
<a href="https://kermanx.github.io/reactive-vscode/" target="__blank"><img src="https://img.shields.io/badge/made_with-reactive--vscode-%23007ACC?style=flat&labelColor=%23229863"  alt="Made with reactive-vscode" /></a>

快速将当前活动文件的路径发送到 VSCode 终端或复制到剪贴板。

## 功能特性

- 🚀 将文件路径发送到终端
- 📋 将文件路径复制到剪贴板
- 📝 支持选中的代码行范围（格式：`@path/to/file.ts#L10-L20`）
- 🔀 优先使用相对路径，如果不在工作区则使用绝对路径
- ✨ 自动标准化路径分隔符为 `/`

## 命令

<!-- commands -->

| 命令 | 标题 | 说明 |
|------|------|------|
| `send-open-file-to-terminal.sendActiveFile` | Send Active File Path To Terminal | 将当前文件路径发送到终端 |
| `send-open-file-to-terminal.copyActiveFile` | Copy Active File Path To Clipboard | 将当前文件路径复制到剪贴板 |

<!-- commands -->

## 使用方法

### 方法 1: 命令面板

1. 打开命令面板（`Cmd+Shift+P` / `Ctrl+Shift+P`）
2. 输入以下命令之一：
   - `Send Active File Path To Terminal` - 发送到终端
   - `Copy Active File Path To Clipboard` - 复制到剪贴板

### 方法 2: 快捷键（可选配置）

你可以在 VSCode 的快捷键设置中为这些命令添加自定义快捷键：

```json
{
  "key": "cmd+shift+t",
  "command": "send-open-file-to-terminal.sendActiveFile"
},
{
  "key": "cmd+shift+c",
  "command": "send-open-file-to-terminal.copyActiveFile"
}
```

## 输出格式

- 无选中内容：`@path/to/file.ts`
- 选中单行（第 10 行）：`@path/to/file.ts#L10`
- 选中多行（第 10-20 行）：`@path/to/file.ts#L10-L20`

## Configurations

<!-- configs -->

**暂无配置项**

<!-- configs -->

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.png'/>
  </a>
</p>

## License

[MIT](./LICENSE.md) License © 2022 [Anthony Fu](https://github.com/antfu)
