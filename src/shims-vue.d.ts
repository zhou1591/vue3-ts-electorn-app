/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface newNode extends NodeJS.Process{
  platform:String,//环境
  on:Function//监听
}
declare var process :newNode

interface newWindow extends Window{}
declare var window:newWindow