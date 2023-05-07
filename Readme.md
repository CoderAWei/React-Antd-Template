# React Antd Template

## 1. Run app

- ``npm i``
- ``npm start``

## 2. ESlint config

### 2.1 add VS Code setting

> - Open vscode setting page and open ``setting.json`` file.
> - add below configs

```json
"editor.indentSize": "tabSize",
"editor.formatOnSave": true,
"editor.tabSize": 4,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

## ISSUE

### 1. 'dotenv' 不是内部或外部命令，也不是可运行的程序或批处理文件

run  ``npm install dotenv-cli --save-dev``
