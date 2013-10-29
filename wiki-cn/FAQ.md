# 常见问题

### 这个项目的目的目标是什么?

对Yeoman项目来说，短期的目标是提供给开发者一个经过改进的工作流工具，来使他们可以花更少的时间在流程上，集中更多的精力和时间来构建漂亮的web应用。最初的时候，我们希望把它打造的尽可能简单来与那些开发者们已经习惯使用的框架和工具协作。

长期的目标是这个项目也可以协助开发者使用Web组件等最流行的技术来创建应用。

### 命令行接口是什么样的？

对开发者来说，一个命令行接口意味着使用文本命令和系统进行互动。在Linux或者OSX平台上，使用终端是司空见惯的，但是在Windows上我们使用command shell或者例如[Cygwin](http://www.cygwin.com)这样的三方的工具。


### 包管理器是什么？

包管理器通过命令行接口运行，是一个集安装，升级，配置和管理项目依赖的自动化过程工具。NPM就是一个包管理器的例子。


### Yeoman与Grunt有什么区别？

Yeoman在一系列开源工具之上进行构建，提供自定义的工作流来帮助开发者更简单的完成常见的任务。[Grunt.js](http://gruntjs.com)是这些工具中的一种，并且使我们的构建过程和任务插件架构更强大。

在这个架构的顶端，我们有高度自定义的任务和概要文件以及可以很好与之配合工作的系统，同时也提供给开发者诸如生成器系统和整合Twitter的Bower包管理器的特性。Yeoman会关照你的Gruntfile的配置和安装来支持系统之外的Sass，CoffeeScript和Require.js/r.js。我们还提供了一些附加功能如wiring，改进的`serve`以及`init`，我们更愿意把自己看做是一个在Grunt之上的辅助项目。

开发者在使用Yeoman的同时可以继续使用Grunt任务，跨工具任务的兼容性会保持在一个良好的水平。

### Yeoman与Brunch或者BBB的工具有什么不同？

我们喜爱Brunch和Grunt-BBB这样的工具，并且认为它们给想要通过Backbone.js和Ember框架来搭建项目的开发者提供了一个很棒的解决方案。 因为我们已经把Rails生成器系统移植到了Node，有了Yeoman生成器系统，我们感到我们有一个有趣的机会来把应用搭建向一个新的方向发展 - 一个对所有开发者来说，可以更容易编写应用脚手架，支持多种测试框架，掌控他们自己的模板并且可以很容易的进行重用的方向。

### 在Bower上我怎样可以注册或者注销一个包？

可以使用`register`命令把包可以注册到Bower上. 例如 `bower register myawesomepackagename git://github.com/youraccount/yourrepo`. 我们推荐你在做这个之前先阅读以下Bower的[文档](https://github.com/twitter/bower) ，确认你的代码库中包含了那些用来支持`install`的必要文件。

### 这个项目将为一些流行的框架提供生成器吗？

我们的目标是提供可以轻松创建丰富web应用的工具来方便开发者和社区。考虑到这一目标，我们将为我们的生成器系统提供一个很棒的API和文档，并且带有如何实现样本的例子，但是将依靠社区去创建和维护流行框架的生成器。这将使我们专注于将Yeoman打造的更好，而不是分心去维护大量的生成器。


### Yeoman是在什么什么样的许可下发布的？

Yeoman是在[BSD](http://opensource.org/licenses/bsd-license.php/)许可下发布的。

### 在通过Github提交一个问题前我应该做什么？

感谢你的关注并提交问题。为了使我们可以帮助到你，请确认你已经完成了以下步骤：

* 确认你是在最新版本上
* 阅读我们的文档和[README](https://github.com/yeoman/yeoman/blob/master/readme.md)确认这个问题还没有被标记或者解决。
* 使用检索功能确保这个bug之前没有被报告过
* 尽可能多的包含有关这个bug的信息，包括你接收到的所有输出，你的操作系统以及版本。
* 共享从 `echo $PATH $NODE_PATH` 和 `brew doctor` 得到的输出，因为它们可以帮助追查这个问题。

问题可以通过我们在Github代码库上的[issue tab](https://github.com/yeoman/yeoman/issues)进行提交。


### Yeoman都利用了那些工具？

* [Grunt](https://github.com/cowboy/grunt)
* [Twitter Bower](http://bower.io)
* [Bootstrap](http://twbs.github.io/bootstrap)
* [Node Build Script](https://github.com/h5bp/node-build-script)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* [Compass](http://compass-style.org/)
* [Modernizr](https://github.com/Modernizr/Modernizr/)
* [Node](http://nodejs.org)
* [NPM](http://npmjs.org)
* [socket.io](http://socket.io)
* [CoffeeScript](http://coffeescript.org)
* [Mocha](http://visionmedia.github.com/mocha/)
* [Jasmine](http://pivotal.github.com/jasmine/)
* [PhantomJS](http://phantomjs.org/)
* [Require.js](http://requirejs.org/)
* [RequireHM](https://github.com/jrburke/require-hm)
* [optipng](http://optipng.sourceforge.net/)
* [JPEGTran](http://jpegclub.org/jpegtran/)
* [connect](https://npmjs.org/package/connect)
* [html-minifier](https://npmjs.org/package/html-minifier)
* [clean-css](https://github.com/GoalSmashers/clean-css)
* [compass_bootstrap](https://github.com/vwall/compass-twitter-bootstrap/)


### 显然NPM已经安装了yeoman但是`yeoman`依然给我返回"command not found".

很可能你的PATH中并没有包括全局的NPM模块。更好的文档将会推出，但是在那之前请先阅读[这条评论](https://github.com/yeoman/yeoman/issues/466#issuecomment-8602733) 还有 [这条](https://github.com/yeoman/yeoman/issues/430#issuecomment-8597663).

当你通过Homebrew安装Node的时候，这个是经常发生的，因为它吧Node模块放在了一个不再你PATH中的目录。

来自Homebrew的输出:

```
==> Caveats
Homebrew installed npm.
We recommend prepending the following path to your PATH environment
variable to have npm-installed binaries picked up:
  /usr/local/share/npm/bin
```

对于高级用户来说，快速的修复方法是把下面的内容放在你的 .bashrc/.zshrc 文件中：
`export PATH=/usr/local/share/npm/bin:$PATH`

对于新手来说，`brew uninstall node` 然后从Nodejs的[网站](http://nodejs.org)下载并安装。


### 我得到了 `EMFILE, too many open files`

EMFILE意思是你已经达到了操作系统同时打开文件的上限。我们没有太多可以做的，然而你可以自己扩大这个限制。

添加 `ulimit -n [number of files]` 到你的 .bashrc/.zshrc 文件来增加这个软限制。

如果过你达到了操作系统的硬限制，你可以遵照这个[StackOverflow的回答](http://stackoverflow.com/a/34645/64949)来扩大它。

### 我应该用什么来为我的应用写文档

查看[#152 ticket for recommended solutions for documentation generation](https://github.com/yeoman/yeoman/issues/152#issuecomment-7081670)的细节。

### 为什么Yeoman要求一个CLA？

它使IP保持清洁有助于防止围绕谁拥有什么软件展开的轻浮诉讼。基本上这是我们所有人无论如何要避免的一件事。综上所述，CLA声称当你贡献修复或者文档的时候，你拥有你将提交的代码以及相应的Google许可给其他人的代码。（在这种情况下，使它在BSD许可下是有效的）

所以，是的，这个一个额外的障碍，但是我们却无法在这儿避免它。这是一个Google开源的项目和相应的规则。

对那些还有所担心的人，这儿有一些其他的项目也要求相似的协议，jQuery, Firefox, Sizzle, Dojo, Plone, Fedora, Cordova/Phonegap, Apache, Flex.

还有更多:
* http://incubator.apache.org/ip-clearance/index.html
* http://wiki.civiccommons.org/Contributor_Agreements

### 我怎样在Yeoman中使用Compass sprites和 `image_url` 助手？

遵照[这个gist](https://gist.github.com/passy/5270050)中提供的向导.


### 我怎样能禁用Insight或者更新通知？

你可以使用一条命令行标志来禁用它们。例如： `yo webapp --no-insight`

Insight: `--no-insight`  
更新通知: `--no-update-notifier`

你也可以添加带有任意值的`yeoman_test`作为一个系统变量，来永久停用这两项功能。

### 我可以在一个自定义的Web服务器中使用livereloading吗？

必须的！你可以从你的Gruntfile中移除`connect`任务并且手动插入以下的代码片段到你的HTML中：

```html
<!-- livereload script -->
<script>document.write('<script src="http://'
 + (location.host || 'localhost').split(':')[0]
 + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
</script>
```

在完成后，像你平常一样简单的运行 `grunt serve`然后享受页面自动刷新。

### 在复制了通过Yeoman生成的web应用之后我应该做什么？

Yeoman为你创建了一个`.gitignore`文件。这个文件添加了 `node_modules` 还有 `bower_components` 文件夹到你的黑名单中。所以，运行 `grunt serve` 并且下载列在 `bower.json`文件中的Javascript依赖 ，你需要运行下面的命令：

```Bash
npm install & bower install
```

并且检查是否这些文件夹被正确的创建了。

