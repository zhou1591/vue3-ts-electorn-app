## 基于 vue3 tsx electorn 的一个项目

- 重点  electorn 下载慢  可以先
   npm i  -g electron-chromedriver 一下

![作者二维码](https://github.com/zhou1591/vue3-ts-electorn-app/blob/master/qr.png)

## 写这个项目的初衷

没有什么初衷，就是惶恐，公司里边工作的代码用脚都能写，无穷尽的管理后台和落地页，偶尔定制个小程序，没成长就很慌，公司不用就自己来。（干就完了）(╯▔皿▔)╯

## 踩坑记录

- package.json 里边不能写build 配置  百度搜索的都是老掉牙的东西

- logo 图标最小 256*256  不明白一共那么一小块地方用那么大干啥

- 配置应该在vue.config.js

- extraResources 这个属性可以把第三方的应用打进去，但是切记不要打包当前目录，他能打一年，然后你会发现硬盘满了

- <https://www.easyicon.net/covert/> 转换图标的网站

## 更新动态

- 4-15 之前  初始化项目  
  - 全局按钮监听具体说明打包运行后  CmdOrCtrl+P  打开帮助
