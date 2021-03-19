## 基于 vue3 tsx electorn 的一个项目


- 重点  electorn 下载慢  可以先
   npm i  -g electron-chromedriver 一下



作者二维码

<img src='./qr.jpg' />

## 踩坑记录

- package.json 里边不能写build 配置  百度搜索的都是老掉牙的东西

- logo 图标最小 256*256  不明白一共那么一小块地方用那么大干啥

- 配置应该在vue.config.js

- extraResources 这个属性可以把第三方的应用打进去，但是切记不要打包当前目录，他能打一年，然后你会发现硬盘满了

- https://www.easyicon.net/covert/ 转换图标的网站