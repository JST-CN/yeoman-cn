# Yeoman新手上路

Yeoman工作流致力于提高你在构建web应用时的生成力和舒适度，由三种核心工具构成,这些工具是：

* [yo](https://github.com/yeoman/yo) - 来自Yeoman的脚手架工具
* [bower](http://bower.io) - 包管理工具
* [grunt](http://gruntjs.com) - 构建工具

这些项目中的每一个都是由各自社区独立维护的，但是可以很好的一起工作，作为我们指定的工作流的一份子来保持你的效率。让我们看看这些工具都能干什么。


<p class="toolset">
  <img class="full" src="https://raw.github.com/yeoman/yeoman.io/gh-pages/media/workflow.jpg">
</p>

## yo 

Yo由Yeoman项目维护并且利用脚手架模板我们称之为生成器来提供web应用脚手架。通常你可以通过npm安装yo和任何你认为你有可能用到的生成器。

### 安装yo和一些生成器

首先，你将需要安装`yo`和其他一些必需的工具：

```
npm install -g yo
```
*npm是与[Node.js](http://nodejs.org)捆绑的包管理器。*

如果你正在使用npm 1.2.10 或者更高版本，这个将会自动替你安装`grunt`和`bower`。如果你在使用一个比这个老一点的npm版本，你将需要手动安装它们：


```
# For npm versions < 1.2.10.
npm install -g grunt-cli bower
```

*如果之前你已经在全局范围安装了Grunt，你将需要先卸载它:* `npm uninstall -g grunt`

*在Windows平台，我们建议你受用一个增强版的命令行工具比如 Console2 或者 PowerShell来提升你的体验。*


### 基础脚手架

为了搭建一个web应用脚手架，你将需要安装`generator-webapp`生成器：

```
npm install -g generator-webapp
```

这是默认的web应用生成器，它将搭建一个项目脚手架包括[HTML5 Boilerplate](http://html5boilerplate.com)，[jQuery](http://jquery.com)，[Modernizr](http://modernizr.com)，还有[Bootstrap](http://twbs.github.io/bootstrap)。在交互的提示中你可以选择不包含它们中的一些。

现在生成器已经安装好了，为你的项目创建一个新的目录，
```
mkdir my-yo-project
cd my-yo-project
```

然后运行：

```
yo webapp
```

每一个由yo创建的项目也将会pull相关的Grunt任务，这些任务是社区认为对你的工作流是需要的或者有用的。

对于web应用来说，这个webapp生成器被认为是最简单可行的一个开始。我们也提供了一些框架生成器，它们可以被用来搭建项目脚手架以及之后的视图，模型，控制器等等。


#### 样例：搭建一个AngularJS的应用脚手架

一如往常，在使用一个新的生成器之前，你必须要先从npm安装它:

```
npm install -g generator-angular
```

安装之后，为你的应用创建一个新的目录，然后运行：

```
yo angular
```

许多生成器允许你通过在初始化命令使用一些标记来自定义你的应用。用`generator-angular`做一个例子，你可以输入：

```
yo angular --minsafe
```
在这里，我们首先生成一个基础的web应用生成文件结构，然后在它上面写一系列的样板应用。这个包括样板指令和控制器还有Karma单元测试脚手架。

##### 搭建你的Angular应用零件的脚手架

一些生成器也可以被用来进一步搭建你的应用零件 - 我们称这些为子生成器。

在AngularJS框架中，例如，你的应用由一系列的零件组成包括控制器，指令和过滤器。实际上你可以搭建任何零件的脚手架(甚至更多)，在你的开发工作流中如下所示：

```
yo angular:controller myController
yo angular:directive myDirective
yo angular:filter myFilter
yo angular:service myService
```

每一个框架生成器有详尽的文档指出它支持什么样的字生成器。

### 创建你自己的生成器

See [Generators](https://github.com/yeoman/yeoman/wiki/Generators).


## Bower

Bower是一个web项目的包管理器，它允许你很容易的管理你项目的依赖。这包括诸如Javascript，images和CSS资源。它是由Twitter和它的开源社区维护。

用Bower管理包可以使用如下的命令来完成：

```
# Search for a dependency in the Bower registry.
bower search <dep>

# Install one or more dependencies.
bower install <dep>..<depN>

# List out the dependencies you have installed for a project.
bower list

# Update a dependency to the latest version available.
bower update <dep>
```

### 在一个由yo的脚手架搭建的项目中使用Bower

创建一个带有一个Jquery插件依赖的基本web应用：

```
# Scaffold a new application.
yo webapp

# Search Bower's registry for the plug-in we want.
bower search jquery-pjax

# Install it and save it to bower.json
bower install jquery-pjax --save

# If you're using RequireJS...
grunt bower
> Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
grunt bower-install
> Injects your dependencies into your index.html file.
```

就是这样简单。

*Y你选择的生成器可能并不包括grunt任务"bower" 和"bower-install"。你可以了解更多关于如何安装和使用它们 [grunt-bower-requirejs](https://github.com/yeoman/grunt-bower-requirejs) 和 [grunt-bower-install](https://github.com/stephenplusplus/grunt-bower-install).*


## Grunt

对于JavaScript项目来说，Grunt是一个基于任务的命令行工具。它可以被用来构建项目，但是也暴露出了若干命令，你将乐意在你的工作流中使用这些命令。其中的许多命令利用了由Yeoman团队维护的Grunt任务。

### Grunt 命令

```
# Preview an app you have generated (with Livereload).
grunt serve

# Run the unit tests for an app.
grunt test

# Build an optimized, production-ready version of your app.
grunt
```

这些命令可以与yo一块使用作为一个无缝开发工作流程：

```
yo webapp
grunt serve
grunt test
grunt
```
