# 目标和路线图

## 项目总体目标

* 提高开发者生成效率和构建web应用的幸福感
* 聚集同类产品中最好的并提供给前端开发者
* 帮助开发者管理应用的复杂度
* 提供强大的默认选项，但是足够灵活的让用户为了个性化的项目需求而扩展

## 路线图目标

* 为类似WebStrom，Brackets，Sublime这样的工具提供一流的hook
* 支持ES6标准中[Traceur](https://code.google.com/p/traceur-compiler/)的部分。
* 更好的支持移动web应用
  * 从[Adobe Inspect/Shadow](http://success.adobe.com/en/na/sem/products/shadow.html)（请查看 [#167](https://github.com/yeoman/yeoman/issues/167)）借鉴视图层，远程调试或者 [远程预览](http://www.youtube.com/watch?v=7NvzRfyhd5Q&feature=youtu.be)，为iOS 6 UI的开发工具。
* 通过[browerstack](http://www.browserstack.com/)/[browserling](https://browserling.com/)云浏览器，对所有桌面/移动应用进行像[Adobe Shadow](http://success.adobe.com/en/na/sem/products/shadow.html)一样的行为跟随。
* 监测内存泄露模式（通过 Esprima?）
* 在迭代过程中与后端整合（Express, PHP）
* 更好的单元测试执行方案
  * 只运行受影响的用例，在所有浏览器中测试，在云浏览器中测试
  * 通过casper.js进行UI测试
  * 集成[thrill](https://github.com/turn/thrill)同时为所有浏览器测试
* 解决客户端存储，离线应用和同步
  * 丰富的同步方案（包括实时的和离线的协作）
  * 使用`pushState`，包括server端
* 通过包管理器管理web组件
* 通过包管理进行代码复用改革 :) （修复js微系统的碎片化）
* UI小工具（Kendo，ClosureLib，Bootstrap，web组件?）
* 验证（Google Connect）和付款（Stripe 或者 Google Payment）

__草稿__
