# 为现代Web应用而生的现代工作流

<p class="toolset">
<img src="https://raw.github.com/yeoman/yeoman.io/gh-pages/media/toolset.png" alt="Yo, Grunt, Bower">
</p>

## Yeoman 1.0

Yeoman 1.0版本不仅仅是一个工具，它还是一个工作流；一个让web开发和谐甚至变得更好的工具和最佳实践的集合。

我们的工作流致力于提高你在构建web应用时的**生成力**和**舒适度**，由三种核心工具构成：*[yo](https://github.com/yeoman/yo) *(脚手架工具)，*[bower](http://bower.io)* （包管理工具），*[grunt](http://gruntjs.com)*（构建工具）。

* [Yo](https://github.com/yeoman/yo) 搭建新应用的脚手架，编写你的Grunt配置并且安装你有可能在构建中需要的相关的Grunt任务. 

* [Grunt](http://gruntjs.com) 被用来构建，预览以及测试你的项目，感谢来自那些由Yeoman团队和grunt-contrib所管理的任务的帮助. 

* [Bower](http://bower.io) 被用来进行依赖管理，所以你不再需要手动的下载和管理你的脚本了。

所有这说那样工具都是独立开发和维护的，但是很好的工作在一起作为我们指定的工作流的一份子来保持你的效率。

## 新手上路

### 安装

一份完整的[新手上路](https://github.com/yeoman/yeoman/wiki/Getting-Started)指南在这里可以找到，但是对于那些希望快速上手操练的家伙，请确定你已经安装了[Node.js](http://nodejs.org), [Git](http://git-scm.org)。[Ruby](http://ruby-lang.org)和[Compass](http://compass-style.org/install)是可选的(如果你想要使用Compass)。

然后在全局范围通过下面的命令安装这些必须的工具:

```
npm install -g yo
```

它将自动安装_Grunt_和_Bower_。

`yo`可以生成若干种类的应用，但是它需要来自插件，或者说是”生成器“的帮助来完成这项工作。要搭建一个web应用的脚手架，你需要先获取web应用的生成器：

```
npm install -g generator-webapp
```

**注意：** 许多生成器不再要求这个安装步骤，而是通过直接安装生成器的时候自动安装yo，grunt和bower。

你可以通过npm安装其他的生成器。比如，安装[AngularJS](http://angularjs.org)生成器： `npm install -g generator-angular`。运行`yo`可以得到更多详细信息。

### 使用

一个完整的工作流可能看起来像如下这样：

```sh
yo webapp                      # 搭建一个web应用程序的脚手架骨架
bower install underscore       # 从Bower为你的项目安装一个依赖
grunt                          # 为了部署构建你的应用
```

或者使用AngularJS生成器：

```sh
npm install -g generator-angular  # 安装生成器
yo angular                        # 搭建AngularJS项目的脚手架
bower install angular-ui          # 从Bower为你的项目安装一个依赖
grunt test                        # 测试你的应用
grunt server                      # 预览你的应用
grunt                             # 为了部署构建你的应用
```

## 从早期版本迁移

如果你之前使用Yeoman 0.9.x版本，你可能已经注意到有些东西已经改变了。一份[迁移指南](https://github.com/yeoman/yeoman/wiki/Migrate-from-0.9.6-to-1.0)可以帮助你过渡到1.0版本。在我们行动后，我们也写明了我们的[理由](https://github.com/yeoman/yeoman/wiki/The-Road-to-1.0)。

## 参与贡献

我们非常乐意接受外界以反馈的形式给这个项目的贡献，[报告bug](https://github.com/yeoman/yeoman) 甚至更好一些 - pull requests。

目前，我们主要精力集中在1.0 beta版本提高Yeoman的用户体验和稳定性上。在提交特性请求的时候请注意这一点，我们很乐意考虑把它放在未来的版本里。
