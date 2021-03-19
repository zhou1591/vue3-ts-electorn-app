module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // 打包参数配置
      builderOptions: {
        nsis: {},
        asar: false,
      }
    }
  }
}