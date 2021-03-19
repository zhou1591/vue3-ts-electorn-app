import { ipcRenderer } from 'electron'
import { ISetOsNotify } from '../interface/os';
/**
  * @Date: 2021-03-17 18:51:17
  * @author: zjs
  * @description: 
  * @param {string} val
  */
const setOsNotify = (val: ISetOsNotify) => {
  return ipcRenderer.sendSync('_setOsNotify', val)
}
export {
  setOsNotify
}