const path = require('path')
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // 打包参数配置
      builderOptions: {
        // "extraResources": [],//其他额外的文件
        "appId": "zjs.code.home",
        "productName": "周靖松的代码仓库", //  项目名，也是生成的安装文件名，即aDemo.exe
        "copyright": "zjs-Copyright © 2021", //   版权信息
        "directories": {
          "output": "./dist" //  输出文件路径
        },
        "electronVersion": "9.3.3", //这个版本牛逼
        "mac": {
          "icon": "./logo.icns",
          "artifactName": "zjs-code-home.${ext}"
        },
        "win": {
          "icon": "./logo.ico",
          "artifactName": "zjs-code-home.${ext}",
          "target": [{
            "target": "nsis",
            "arch": [
              "ia32",
              "x64"
            ]
          }],
          "extraResources": "./lib/*.dll"
          // "requestedExecutionLevel":"highestAvailable"
        },
        "nsis": {
          "artifactName": "zjs-code-home.${ext}",
          "oneClick": false, // 一键安装
          "allowToChangeInstallationDirectory": true, // 更改安装地址
          "runAfterFinish": true,
          "perMachine": false,
          "installerIcon": "./logo.ico", // 安装图标
          "uninstallerIcon": "./logo.ico", //卸载图标
          "installerHeaderIcon": "./logo.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true, // 创建开始菜单图标
          "shortcutName": "周靖松的代码仓库", // 图标名称
        },
      }
    }
  }
}