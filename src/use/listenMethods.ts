import { app, BrowserWindow, globalShortcut, dialog } from 'electron'

/**
 * @Date: 2021-03-18 18:54:15
 * @author: zjs
 * @description: 说明弹窗
 */
export function openDialog(win: BrowserWindow) {
  globalShortcut.register('CmdOrCtrl+P', () => {
    dialog.showMessageBox({
      message: '说明弹窗',
      detail: `
        CmdOrCtrl+P：打开帮助
        CmdOrCtrl+F12：打开控制台
      `,
      // buttons: ['好的','不好']
    })
  })
}
/**
 * @Date: 2021-03-18 18:54:15
 * @author: zjs
 * @description: 打开控制台
 */
export function openDevTools(win: BrowserWindow) {
  globalShortcut.register('CmdOrCtrl+F12', () => {
    win.webContents.openDevTools()
  })
}

/**
 * @Date: 2021-03-18 18:24:37
 * @author: zjs
 * @description: 初始化创建
 */
export function init(win: BrowserWindow) {
  const initMethodList = [
    openDialog,
    openDevTools
  ]
  initMethodList.forEach(el => el(win))
  app.on('will-quit', () => {
    globalShortcut.unregisterAll()
  })
}
export default {
  init
}