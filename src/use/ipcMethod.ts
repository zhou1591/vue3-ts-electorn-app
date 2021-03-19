import { Notification ,ipcMain} from 'electron'
import { ISetOsNotify } from './../interface/os';
/**
 * @Date: 2021-03-17 17:19:04
 * @author: zjs
 * @description: 发送消息
 */
function setOsNotify(event:any,arg:ISetOsNotify) {
   if(Object.values(arg).filter(el=>el).length !==2){
    event.returnValue ='参数不全'
    return
   }
   new Notification(arg).show()
   event.returnValue ='发送消息成功'
}
ipcMain.on('_setOsNotify', setOsNotify)
