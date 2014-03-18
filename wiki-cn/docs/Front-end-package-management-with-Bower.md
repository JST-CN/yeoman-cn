# 包管理器

到现在为止，客户端的JavaScript还没有受益于像其他平台那样的丰富的包管理解决方案（比如NPM，RubyGems）。没有客户端JS的包封装，开发者减少了很多使用最新版本库的机会。

[Bower](http://bower.io)改变了这个现象。

在Bower中，依赖被列在一个`bower.json`文件中，类似于Node的`package.json`或者Ruby的Gemfile。这对于锁定一个项目的依赖是很有用的。


```json
{
  "name": "myProject",
  "version": "1.0.0",
  "dependencies": {
    "modernizr": "~2.6.1"
  }
}
```

然后依赖可以通过`bower install`命令在本地安装。首先，它们找到并解决冲突，然后下载并解压到一个本地的称为bower_components的子目录中：

    /bower.json
    /bower_components/modernizr/index.js
    /bower_components/modernizr/modernizr.js

这种方式有很多优点。

* 没有系统级的依赖，也没有依赖共享在不同的应用中。
* 这不是专为JavaScript定制的。包可以包含JavaScript，CSS还有图片等等。
* 这不是转为一种特定的模块格式定制的(比如 AMD/CommonJS)。这些格式可以被使用，但是不是必须的。
* 依赖关系是扁平的，意味着我们不支持多版本的说法，而是根据客户端自动匹配。


静态使用Bower包的最简单方式是通过script标签手动引用包：

```html
<script src="bower_components/modernizr/modernizr.js"></script>
```

类似于NPM，我们的Bower整合也允许用户可以容易的搜索和升级包。比如：

搜索一个包：

    bower search jquery

安装一个包：

    bower install --save jquery

升级一个包，你需要通过名称引用它：

    bower update jquery

列出已安装包：

    bower list

等等。


## Bower与Jam，Volo或者Ender相比有什么区别？在哪些方面更优秀？

比起Jam，Volo或者Ender，Bower最容易被认为是一个更低级别的组件。

事实上，所有Bower做的是安装git路径，从bower.json中解析依赖，检查版本，并且提供api告诉你它所做的。

与在前端包管理方向过去的尝试不同的是，Bower是在一种假设下工作的，这种假设是在前端应用开发中有一个单个的，常见的问题需要被解决：解决依赖并且管理组件。不幸的是，大多数其他方案试着按如下方式处理这个问题：结束使用不同标准（sprockets, commonjs, requirejs, 正规script标签）开发社区的疏远情况。

例如，一些人使用sprockets开发，不能使用volo包，不能使用jam包，等等。

Bower试着解决这个常见的问题，以一种谨慎的方式，留下这个决定给你的构建工具。

更重要的是，像Ender这样的工具可以把bower作为一种简单git安装的依赖，并且使用api来构建一个commonjs风格的依赖api包含浏览器。

如果感兴趣的话，Jam或者Volo可以为AMD做同样的事。

## Volo无疑是一个更成熟的项目并且可以很好的与GitHub的search API共事。它将为Bower花很长时间去包含一个适当数量的包吗？

在所有这些项目中，Ender明显是最流行的 - 比volo多拥有将近1000多的观察者，– 并且在一些重要的公司比如twitter，disqus中使用。

按照定义，Bower有每一个Volo拥有的包（git packages）甚至更多 - 它实际上可以托管在内部的网络以及其他一些没有托管在github上的git仓库。

## 我们最近看到当NPM registry服务完全宕机时发生了什么。Bower有可能发生这种中心节点故障吗？如果发生了这种故障，冗余计划吗？

当前并没有冗余计划，因为Bower只是安装了git urls。由url的提供者来建立冗余。

## package.json文件将会和我的npm的package.json发生冲突吗？ 这将会是一个问题吗?

不要使用名为package.json的文件 – 使用名为bower.json的文件。.

## Bower是一个开源的Twitter项目。未来它会被怎样维护呢？

Twitter对目前开源的项目有非常好的跟踪记录，并且有一整个工程师池工作在这些项目上。我们可以说另一件好事是Twitter.com正在迁移它的前端架构到Bower上，所以我们可以相当安全的说它将会被维护。

<img src="http://yeoman.io/assets/img/yeoman-005.png" class="character">

    /bower.json
    /bower_components/modernizr/index.js
    /bower_components/modernizr/modernizr.js

This approach has a number of benefits.

* There are no system wide dependencies and no dependencies are shared between different applications
* None of this is JavaScript specific. Packages can contain JavaScript, CSS, images etc
* None of this is specific to a specific module format (e.g AMD/CommonJS). These formats can be used but aren't required
* The dependency tree is flat meaning that we don't ship multiple versions of say, Modernizr to clients


The easiest approach to use a Bower package statically is to just reference the package manually from a script tag:

```html
<script src="bower_components/modernizr/modernizr.js"></script>
```

Similar to NPM, our Bower integration also allows users to easily search for and update packages easily. e.g

To search for a package:

    bower search jquery

To install a package:

    bower install --save jquery

To update a package, you need to reference it by name:

    bower update jquery

To list installed packages:

    bower list

and so on


## What distinguishes Bower from Jam, Volo or Ender? What does it do better?

It's easiest to think of Bower as a lower level component than Jam, Volo, or Ender.

All Bower really does is install git paths, resolves dependencies from a bower.json, checks versions, and then provides api which tells you what it did.

The major diversion from past attempts at package management in the front-end, is that Bower is working under the assumption that there is a single, common problem in frontend application development which needs to be solved: resolving dependencies and managing components. Unfortunately, most other attempts tried to tackle this problem in such a way that it ends up alienating communities which develop using different transports (sprockets, commonjs, requirejs, regular script tags).

For example, someone developing with sprockets, can't use volo packages, can't use jam packages, and so forth.

Bower is trying to solve the common problem, in an unopinionated way, and leave the opinions to your build stack.

What's more, things like Ender can and will consume bower as a dependency for simple git installation and use the package api to build a commonjs style require api include for the browser.

Jam or Volo could do the same thing for amd if they were interested.

## Volo is an arguably more established project and works with the GitHub search API. Will it take long for Bower to contain a decent number of packages?

Of all the projects, Ender is objectively the most popular - with nearly 1000 more watchers than volo – and is used at major companies like twitter, disqus, etc.

Bower by definition has every single package that volo does (git packages) and more - it actually works on internal networks and other git repositories not hosted on github.

## We recently saw what happened when the NPM registry completely went down. Is a central point of failure possible for Bower and if so, do you have redundancy planned?

There's no redundancy planned at the moment, as Bower just installs git urls. It's up to the url provider to establish redundancy.

## Isn't having a package.json file going to conflict with my npm's package.json? Will this be a problem?

Don't use a package.json – use a bower.json.

## Bower is an open-source Twitter project. How well can we expect it to be maintained in the future?

Twitter has a pretty good track record with their open source projects thus far, and has an entire engineer pool to work on it. Another good thing we can say is that Twitter.com is moving its frontend architecture onto Bower, so it's fairly safe to say it will be maintained.

<img src="http://yeoman.io/assets/img/yeoman-005.png" class="character">
