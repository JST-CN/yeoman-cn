## 获取支持

Yeoman 为创建吸引眼球的web应用提供一个优化过的 **脚手架** 和工作流体验。开发者把Grunt（为了 **构建** 他们的项目）还有Bower（为了 **包管理**）和Yeoman搭配使用。在这个三合一的工具间一个典型的工作流看起来像这样：

```
yo webapp
yo angular
bower install angular-directives
grunt
```

### 执行程序问题
对于Yeoman执行程序的问题，比如所有不能正常运行Yeoman的问题，你应该提交一个bug到 [Yeoman问题跟踪页面](https://github.com/yeoman/yeoman/issues)来寻求进一步的帮助。

### 脚手架问题
我们的脚手架（比如上面的angular）都是由社区驱动的，有一些默认的脚手架可以在Github的[Yeoman组织](https://github.com/yeoman)页面找到。这些脚手架都是由来自特定框架的社区开发者维护。对于我们的一些流行的生成器的问题追踪页面请查看下面的列表：

* [WebApp](https://github.com/yeoman/generator-webapp)
* [AngularJS](https://github.com/yeoman/generator-angular)
* [Backbone](https://github.com/yeoman/generator-backbone)
* [Chrome App](https://github.com/yeoman/generator-chromeapp)
* [Ember](https://github.com/yeoman/generator-ember)

### 构建问题

因为我们推荐使用Grunt来构建你的项目，[Grunt问题追踪页面](https://github.com/gruntjs/grunt/issues) 应该被用来支持构建项目过程中的问题。然而请记住如果你有一个关于特定任务的问题（比如CoffeeScript编译），可能把bug提交给[grunt-contrib](https://github.com/gruntjs/grunt-contrib)去定位问题更合适，因为官方的Grunt问题追踪页面不应该用来处理此类问题。

对一些在Yeoman工作流中常见任务的问题追踪页面可以在下面找到：

* [coffee](https://github.com/gruntjs/grunt-contrib-coffee/)
* [compress](https://github.com/gruntjs/grunt-contrib-compress/)
* [handlebars](https://github.com/gruntjs/grunt-contrib-handlebars/)
* [requirejs](https://github.com/gruntjs/grunt-contrib-requirejs/)

### 包管理问题

如果你已经用Bower安装包，更新包或者正在经历包管理过程的问题，[Bower问题追踪页面](https://github.com/twitter/bower)应该被用来提交bug报告。典型的Yeoman工作流依靠Grunt的最小化/文件链接此类的依赖，然而我们将让你知道一个提交的问题究竟是Bower的问题还是Yeoman的问题。
