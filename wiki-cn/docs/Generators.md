# 生成一个生成器

* [生成器是什么？](#whats-a-generator)
* [设置安装](#setup)
* [编写你的第一个生成器](#writing-your-first-generator)
  * [探索提示](#lets-explore-prompts-a-little-more)
  * [让我们谈谈魔术](#i-mentioned-magic-earlier-heres-some-more)
* [Huddle Up](#okay-huddle-up)
  * [我们在哪儿](#where-we-are)
  * [我们要去哪儿](#where-were-going)
* [编写你的第一个生成器... 再一次](#writing-your-first-generator-again)
  * [模板](#templates)
  * [让我们看看它](#lets-see-it)
  * [子生成器](#a-sub-generator)
* [编写你的下一个生成器](#writing-your-next-generator)
* [代码片段](#snippets)
* [FAQ](#frequently-asked-questions)
* [参考资料](#reference-materials)
* [得到帮助](#get-help)

<h2 id="whats-a-generator">生成器是什么？</h2>

目前为止，你很可能已经看过了可爱的[新手上路](/gettingstarted.html) 指南，并且已经使用了 `yo webapp` 来引导你的应用。还记得所有的提示，比如”你愿意安装BootStrap？”吗？ 你已经使用过生成器了！那就是[`generator-webapp`](https://github.com/yeoman/generator-webapp) 实战。

生成器背后的理念是能够很简单的与他人分享你的想法和最佳实践。不久前，使用[HTML5 Boilerplate](http://html5boilerplate.com) 曾是最佳的方法来启动你的应用。但是现在，甚至连复制和自定义样板文件来适应你的环境看起来都那么费劲。

<img src="https://raw.github.com/yeoman/yeoman.io/gh-pages/media/yobox.png" style="width: 100%; max-width: 400px;">

_先生，给你一天的美好_

当开发生成器的时候，用选项基于用户的反应“做这个还是那个”创建了一个全新的充满可能的世界。你可以有条件的获取依赖，创建文件，测试，各种工具（EditConfig，git，JSHint）的配置文件，以及任何你想要的。

与终端交互，担心并发进程，创造竞争条件，还有其他你对Node环境可能有的担心已经被照顾到了。甚至对那些不熟悉的人，开始编写自己的生成器也是毛毛雨。

所以，让我们放手干吧。


<h2 id="setup">设置安装</h2>

为创建你自己的生成器准备好系统，你将需要安装 `yo` 和 `generator-generator`。

从你的终端，运行：

```bash
npm install -g yo generator-generator
```

你已经准备好了！


<h2 id="writing-your-first-generator">编写你的第一个生成器</h2>

现在你已经装好了 `yo` 和 `generator-generator` ，让我们创造一个生成器来帮助其他人构建一个简单的blog。

我们将创建一个目录为我们叫做`generator-blog`的生成器服务。遵循这个 `generator-____` 惯例是很重要的，过一会儿你就会明白这是为什么。让我们创建这个目录，继续吧。

```bash
$ mkdir ~/dev/generator-blog && cd $_
$ yo generator

    _-----_
   |       |
   |--(o)--|   .--------------------------.
  `---------´  |    Welcome to Yeoman,    |
   ( _´U`_ )   |   ladies and gentlemen!  |
   /___A___\   '__________________________'
    |  ~  |
  __'.___.'__
´   `  |° ´ Y `
```

看那个帅哥，在创建生成器的时候他将是我们的朋友，在使用它的时候他将是你用户的朋友。

他将问你一连串的问题来了解你的意图。

确信你命名你的生成器为 “blog”。这将在你的 `package.json` 文件里命名你的生成器为 `generator-blog`。当你的用户输入 yo blog 时，`generator-____` 是 `yo` 命令要求的惯例。

进行对应的回答，我将在一分钟后见你！

...

再一次Say Hi!

他生成所有你的东西了吗？

```text
├── app
│   ├── index.js
│   └── templates
│       ├── _bower.json
│       ├── _package.json
│       ├── editorconfig
│       ├── jshintrc
│       └── travis.yml
├── test
│   ├── test-creation.js
│   └── test-load.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── LICENSE
├── package.json
└── README.md
```

当你的用户第一次与你的生成器互动的时候，他们将输入：

```bash
~ yo blog
```

你将可能想要看到你正在创建什么并且与在开发的时候与她一起玩。要做到这一点，运行：

```bash
~ npm link
```

因为 `generator-blog` 在 `package.json` 文件中被指定为包名，`npm link` 将创建一个符号链接在一个更广泛访问的位置（例如，`/usr/local/lib/node_modules/generator-blog`）。这使你能够在全局范围访问你本地的 `~/dev/generator-blog` 生成器，做开发工作，生活在一般情况下更容易。

切换到一个新的页签，创建一个新的文件夹，看看你得到了什么！

```bash
~ mkdir ~/dev/generator-blog-playground && cd $_
~ yo blog

     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Would you like to enable this option? (Y/n)
```

他再一次和他的傻问题又出现了。先玩一会儿，当你准备好了后回来接受幕后的演练。

...

不是非常有用，是吗？但是你感受到你拥有的力量了并且已经不再挠头了。

如果你就这样不管你的生成器了，那么你将会得到每周下载量为0的数据。让我们把它打造的更实用一些。

用你最喜欢的编辑器打开你的 `~/dev/generator-blog` 文件夹folder，然后找到 `app/index.js` 文件。这是你的生成器的起点。

<h4 id="lets-explore-prompts-a-little-more">让我们探索prompts更多一点。</h4>

```js
var prompts = [{
  type: 'confirm',
  name: 'someOption',
  message: 'Would you like to enable this option?',
  default: true
}];
```

有一个 `prompts` 列表, 包含了每一个你希望提问用户的问题对象。对于我们的blog来说，或许我们希望它看起来像下面这样：

```js
var prompts = [{
  name: 'blogName',
  message: 'What do you want to call your blog?'
}];
```

接下来，你将会看到一些，你将会开始看到很多的魔法，从Yeoman生成器它自己带给你的帮助方法。

```js
this.prompt(prompts, function (props) {
  this.someOption = props.someOption;

  cb();
}.bind(this));
```

`this.prompt` 把我们的prompts列表作为它的第一个参数，然后是一个会在所有反馈都进来后执行的回调函数。

让我们改造下这个函数使它适合我们的应用。

```js
this.prompt(prompts, function (props) {
  // `props` 是一个传递进来的对象，它包含响应的值并且根据你prompt对象中的 `name` 属性命名。
  //所以，对于我们来说：
  this.blogName = props.blogName;

  cb();
}.bind(this));
```

如上所示，我们把用户的输入分配给 `this.blogName`。因为在这个调用的 `.bind(this)` 是相对于 `this.prompt`的，我们把 `BlogGenerator` 函数的上下文保存了下来，所以我们能够在之后使用用户的响应。

Yeoman生成器依赖于 Inquirer.js 提示系统。请务必查看[那儿的完整文档](https://github.com/SBoudrias/Inquirer.js)来了解更多关于 prompt 类型的信息（checkboxes, lists 等等）还有控制帮助功能（validation, prompt hierarchy, filtering等等）。

<h4 id="i-mentioned-magic-earlier-heres-some-more">我早些时候提到过“魔法”。z这里还有有更多。</h4>

如果你把滚动条移动到（`app/index.js`）文件的顶部, 你将看到：

```js
var BlogGenerator = module.exports = function BlogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  // ...
};

util.inherits(BlogGenerator, yeoman.generators.NamedBase);
```

由这两个调用，我们继承了来自[`Base`](https://github.com/yeoman/generator/blob/master/lib/base.js) 和 [`NamedBase`](https://github.com/yeoman/generator/blob/master/lib/named-base.js)的功能。这就是我们之前能够调用 `this.prompt` 函数的原因，还有其他很多函数你将在创建生成器的时候看到。

回到我们正在修改的这个文件。从顶部开始，你放置在 `BlogGenerator.prototype` 中的每一个方法将会按你编写它们的顺序被调用。若果你需要一个“私有的”方法，只需要在方法名前放置一个下划线（_），例如，`BlogGenerator.prototype._dontRunMe`。

所以，让我们从顶部开始查看代码。

```js
var BlogGenerator = module.exports = function BlogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};
```

这个是我们的构造函数，它将被首先运行。在这个函数之外，`this`：

* 把我们和 `Base` 串联起来。
* 为 `end` 事件（当原型方法结束执行的时候）创建了一个事件监听。
* 给了我们访问我们生成器的 `package.json` 文件的权限。

接下来：

```js
BlogGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // ...

  this.prompt(prompts, function (props) {
    // ...

    cb();
  }.bind(this));
};
```

我已经提取了有用的部分（我们还没有讨论过），只是想指出一件事，你可能一直在琢磨：如果你需要执行异步任务怎么办？只需要调用 `this.async()`。它将返回一个函数，你将把它传递到你的异步任务中作为一个回调函数。

当我们处理一些事情的时候，`this.async()` 告诉这个帅哥先等候一会儿。然后当这个回调函数被执行，它捅捅他的肩膀直到他醒来，然后他回来继续执行下一个方法。

接下来：

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

这是一个非常棒的东西。`this.mkdir` 从用户运行你生成器的目录中创建了一个目录。所以，头两行简单地为用户创建了一些目录。

最后两行调用了 `this.copy`，它移除了下划线“_”并且把文件放置到了用户的根目录。
> 注：译者认为这个根目录指的是用户运行生成器的目录。

让我们重写它，使它对一个blog来说更合理：

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

接下来：

```js
BlogGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
```

像 `app` 函数一样，这里使用 `this.copy` 来挪动两个“项目文件”。

接下来：

`BlogGenerator.prototype.app` 和 `BlogGenerator.prototype.projectfiles` 可以简单地被写到一个方法里，但是它是Yeoman执行链的可预测的行为，是否把你的功能分解成不同的方法完全取决于你自己。


<h2 id="okay-huddle-up">Okay, 蜷起身子。</h2>

让我们很快的瞅一眼我们正在做什么，来确定我们是在朝着正确的目标努力。

<h3 id="where-we-are">我们在哪儿？</h3>

当用户输入...

```bash
~ yo blog
```

...他们被问到...

```text
What do you want to call your blog?
```

在 `app/index.js` 中，我们把他们的响应保存在 `BlogGenerator` 的prototype中作为一个叫做 `blogName` 的属性。

然后我们拷贝一些文件到他们的应用目录中去，安装所有我们认为他们的应用将使用到的 Bower 或者 NPM 的依赖。它也许不是一个最详尽的生成器的例子，但是既然你知道了提示后将要发生的一切，你可以想象把这个生成器的功能扩展到史无前例的水平对你来说也将是小菜一碟。

<h3 id="where-were-going">我们要去哪儿？</h3>

你已经全副武装可以开始推出更多生成器了。在现在的时点，开始创建一两个简单的生成器或许是一个好主意，再或者继续丰富现在的blog生成器。

在你的大脑中，开始涌现一些你可以用在你工作流中的生成器的想法，在家里用在你个人项目中，与你的同事用在工作中，与同学一起用在课堂上，与臭烘烘的萨克斯手一起用在街头，等等。

如果你坚持和我在一起，这儿是我们下一步将要做的：

* 加入一些我们的目标客户会用到的依赖
* 创建一个子生成器使得用户可以创建一个新的博文
* 带入一些Grunt的任务

好奇吗？那就加入我们这个增强版的介绍...

<h2 id="writing-your-first-generator-again">再一次的编写你的第一个生成器...</h2>

我们的blog生成器看起来棒极了。我们有足够的地方开始做一些改变。有很多的可能性，但是请牢记这个演练的范围，这里是我为我们做出的决定：

* Blog的博文必须用Markdown书写
* NPM将安装一些Grunt任务和其他一些帮助函数，这些帮助函数为我们将提供给用户的两个自定义任务服务：
  * `grunt build` - 创建一个来自每篇博文关键字的"wordmap"
  * `grunt server` - 监控Markdown的更改，重新构建这个项目
* Bower将获取两个运行时依赖：
  * [Showdown](https://github.com/coreyti/showdown) - 把Markdown翻译为HTML
  * [Showup](https://github.com/stephenplusplus/showup) - 一个为这个生成器的目的而编写的库

当说过做过这些之后，用户将会有一个类似如下结构的文件集合：

```text
├── bower_components
│   ├── showdown
│   └── showup
├── posts
│   ├── 2013-06-01-a-blog-post.md
│   └── 2013-06-01-another-blog-post.md
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── Gruntfile.js
├── bower.json
├── config.json
├── index.html
├── package.json
└── wordmap.json
```

好了，我认为是时候我们回去编辑 `~/dev/generator-blog` 中的更多文件来实现这个计划了！


<h3 id="templates">模板</h3>

当我们的用户运行 `yo blog` 的时候，他们将在这个命令运行的工作目录中接收到来自 `app/templates` 的文件。让我们准备更多有用的文件。

还记得那些 `_带下划线的` 文件吗？你可以这样认为：他们开头是一个“下划线”或者“Lo-Dash”，来指明我们将要用[Lo-Dash](http://lodash.com)去处理它们。

回到 `app/index.js` 文件。因为已经有一会儿了，让我们把滚动条移动到 `app` 函数，我们来看一看是否我们需要做一些修改。

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

嘿，实际上它好极了！然而我们需要更多一些料。

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');
  this.template('_index.md', 'posts/index.md');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'index.html');

  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
  this.copy('wordmap.json', 'wordmap.json');
};
```

一些新鲜玩意：`this.template`！这个函数不仅仅执行一个简单地拷贝，它将在第一个参数匹配的文件上运行 Lo-Dash ，然后创建并且替换编译好的结果在第二个参数传递的位置上。

对于我们的生成器来说，在我们提示中用户决定的blog的名字将影响我们创建的文件。

创建/编辑以下的从[这个gist](https://gist.github.com/stephenplusplus/5647725)来的文件。

* `app/templates/_index.md`
* `app/templates/Gruntfile.js`
* `app/templates/index.html`
* `app/templates/_bower.json`
* `app/templates/_config.json`
* `app/templates/_package.json`
* `app/templates/wordmap.json`

你将看到 `<%= _.slugify(blogName) %>` 出现过好几次。`slugify` 是一个由[underscore.string](http://epeli.github.io/underscore.string)提供的方法，它接受“A name like this!”的参数，然后把它转换为“a-name-like-this”。 `blogName` 引用自 `this.blogName`，我们把它分配给了 `this.prompt` 的回调函数。

我们已经讲过了我们已有的不同的依赖和这些文件的目的。 让我们继续行动并且在 `app/index.js` 文件中实际创建我们第一个唯一的方法。

```js
BlogGenerator.prototype.app = function app() {
  // ...
};

BlogGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};
```

创建/编辑以下的来自[这个gist](https://gist.github.com/stephenplusplus/5647725)的文件。

* `app/templates/bowerrc`
* `app/templates/gitignore`

我们在这些文件上只做简单地拷贝，因为在他们的内容里不要求任何动态生成的内容。

在这个节点，信不信由你，我们已经有了一个blog生成器！是的，在我们的Gruntfile文件中我们还有一些事情没有交待清楚。然而，再一次的声明，我们只是想要集中精力使一个生成器投入运行。

让我们看看，你那儿是什么时间？如果你说是该河以北的时间了，你答对了！去拿上一杯，回头就在这见。给我也带点好的。

<h3 id="lets-see-it">让我们看看它</h3>

让我们测试一下这个坏小子！打开一个新的终端窗口并且输入我们心爱的命令：

```bash
$ yo blog
```

我们应该看到那个HD（帅哥）问我们我们想要怎样命名我们的blog。我不知道你会怎样，但是我博客的名字都是来自[California Dreams](http://en.wikipedia.org/wiki/California_Dreams)的角色。

所以对我来说，在运行 `yo blog`之后，我看到：

```bash
What do you want to call your blog? sly winkle
   create posts/index.md
   create Gruntfile.js
   create index.html
   create bower.json
   create config.json
   create package.json
   create wordmap.json
   create .bowerrc
   create .gitignore


I'm all done. Running bower install & npm install for you to install the
required dependencies. If this fails, try running the command yourself.

# whole bunch of "installing..." lines
```

如果过你看一看你完成后的文件结构，它应该和我们早些时候预计的是匹配的。多亏在你的 `BlogGenerator` 构造器中的 `this.installDependencies`，你的NPM和Bower依赖已经为你安装好了，你已经有了你构建所需要的所有东西，让我们看看会发生什么。

```bash
$ grunt build
Running "build" task

Done, without errors.
```

它为什么要用引号括住我们的build任务？这太无礼了。

不管怎样，它为我们做的就是重新生成 `posts/index.md`文件。那是我们的索引页，或者每次运行`grunt build`后生成的内容文件的目录。

这个构建任务也会执行以下的子任务：

* 循环 `posts/` 内的文件
  * 从每一篇博文中提取出10个最常用的单词
  * 把它们填到 `wordmap.json` 中一个大的数组中使得前端可以进行搜索

如果你好奇想看到更多，那就看吧！

刚才那是构建任务,它也会从另一个grunt任务被运行；`server`。试试看这个：

```bash
$ grunt server
Running "build" task

Running "connect:livereload" (connect) task
Starting connect web server on localhost:9000.

Running "open:server" (open) task

Running "watch" task
```

现在你应该至少看到了一个有些完整的产品。我们只是遗漏了一样重要的东西...

<h3 id="a-sub-generator">子任务！</h3>

我们的生成器中最后一块拼图是激活一个子生成器，它将使你基础的“脚手架”生成器更进一步。这里是我们希望看到发生的：

```bash
$ yo blog:post "California Dreams was good, but not great."
# creates a new markdown file
```

让我们把它们捆绑起来！

```bash
$ cd ~/dev/generator-blog
$ yo generator:subgenerator "post"
   create post/index.js
   create post/templates/somefile.js
```

谢谢，`generator-generator`! 让我们看看创建的 `post/index.js` 文件看起来怎么样。

`post/index.js`:

```js
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PostGenerator = module.exports = function PostGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the post subgenerator with the argument ' + this.name + '.');
};

util.inherits(PostGenerator, yeoman.generators.NamedBase);

PostGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
```

一个子生成器函数，例如，`PostGenerator`，和一个生成器函数工作的方式一样。你的方法将被按它们定义的顺序调用，并且你可以在你的子生成器中自由的使用那些在你的生成器中可用的方法，例如 `this.async`，`this.installDependencies`，`this.mkdir`等等。

正如我们在注释中解释的，调用 `NamedBase` 将从 `yo blog:post "The blog title"` 命令中把“The blog Title”作为`this.name`给我们。让我们测试看看。

```bash
# from your playground directory
$ yo blog:post "hey, buddy."
You called the post subgenerator with the argument hey, buddy.
   create somefile.js
```

可能你已经能够说：得到我们想要的太简单了。所有我们必须要更改只是一些措辞，有哪些文件被创建并且文件内容是什么。

如果你不想打开 `post/index.js` 文件，请回去并且作如下这些修改。

`post/index.js`:

```js
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PostGenerator = module.exports = function PostGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(PostGenerator, yeoman.generators.NamedBase);

PostGenerator.prototype.files = function files() {
  var today = new Date();

  var prefix = today.getUTCMonth() + 1;
  prefix += '-' + today.getDate();
  prefix += '-' + today.getFullYear();

  var filename = prefix + '-' + this._.slugify(this.name) + '.md';
  this.write('posts/' + filename, '# ' + this.name);
};
```

我们在这里使用了一个新方法，`this.write`。我确定到现在你已经开始猜测，`this.write` 将把第二个参数（文件的内容）写到第一个参数（文件的路径）。对于我们来说，我们选择在文件名前加一个时间戳前缀，然后得到一个通过 `_.slugify` 函数处理的博文名称，文件名称看上去像`06-01-2013-apples-make-good-juice.md`这样。我们把这样的名称传递给 `this.write` 作为它的第一个参数，然后一个简单的 `# 标题`-样式的标题作为Markdown文件的内容。

_因为我们生成的文件内容非常少，它只有一个基于博文标题的`# 标题`，我选择移除`templates`目录，我把它写在了这个 `PostGenerator.prototype.files` 函数内实现。对于规模更大的应用，结构良好的分割是必不可少的。_

我的天啊，我们有了一个blog生成器！试着创建编写一些博文。试着玩玩 `grunt server` 和 `grunt build`，保持 `index.html` 在打开状态然后看看结果。一切都按预期那样吗？


<h2 id="writing-your-next-generator">编写你的下一个生成器</h2>

对于这样长的一个入门教程，我们已经完成内容的并不限于轻量级入门。 然而，不要被骗了。你正在Node的世界里运行JavaScript（你已经熟悉它了）。你不必死守着那些内置的帮助方法来完成工作。你是自由的而且被鼓励突破已有的这些内容去思考，创造或者从你自己的模块中借鉴，按你自己的意愿来构建你特定目标的生成器。

编写一个生成器是一个全新的思考的方式，并且正因为这样，你将需要一段时间来充分的挖掘它的潜力并适当的使用它。如果你有时间和必要的耐心去了解Yeoman并且创建一些东西，你将有一个[支持的世界](#get-help)。

一些晋级的技巧：

* **使用**其他生成器。- 挑选一个生成器，看看它能做什么。
* **查阅**其他生成器的代码。_一个最高级的例子是[`generator-angular`](https://github.com/yeoman/generator-angular)._
* **测试**. `generator-generator`带着一个基础的测试框架。检查一下它是怎样安装的，并且确保在写你自己的生成器时使用它。


<h2 id="get-help">得到帮助</h2>

目前，在NPM中已经有超过90个可用的生成器 -- [Angular生成器](https://github.com/yeoman/generator-angular), [Backbone生成器](https://github.com/yeoman/generator-backbone), [Ember生成器](https://github.com/yeoman/generator-ember), [Chrome apps生成器](https://github.com/yeoman/generator-chromeapp), [FireFox OS生成器](https://github.com/zenorocha/generator-firefox-os), Express框架生成器，PHP框架生成器，[等等更多](http://yeoman.io/community-generators.html)。当你进入这个圈子的时候，你就加入了一个年轻的，迅速成长的生成器开发者社区。

如果你已经在Github上的[Yeoman > Generator](https://github.com/yeoman/generator)待了足够长的时间，你会开始认识一些名字。总有一个地方让你的问题，意见还有想法可以被听到。

你也可以加入[#yeoman freenode IRC room](http://webchat.freenode.net/?channels=yeoman) ，介绍你自己并让我们知道你正在做什么。

我们都是团队的一部分，向着相同的未来努力：由一个智能化的工作流开始并发展直观的，可扩展的，易维护的应用。如果你想要帮助web向着正确的方向发展，来这里见见其他像你一样有着同样想法的人。

我们期待看到你和你的生成器！


<h3 id="snippets">代码片段</h3>

下面的章节将帮助你熟悉一些在你编写自己的生成器时你可能想实现的常用操作。

**提示**

在用生成器或者子生成器搭建一个项目的脚手架时，提示系统可以被用来提示用户来获得所需信息。下面的提示以数组对象的形式存在，每一个提示制定了：

* type: 提示类型（默认为“input”）
* name: 提示名称（它可以在之后被用来方位相关的响应数据）
* message: 实际提示给用户的问题
* default: 默认值

```javascript
var prompts = [{
  type: 'confirm',
  name: 'compassBootstrap',
  message: 'Would you like to include Twitter Bootstrap for Sass?',
  default: true
}, {
  type: 'confirm',
  name: 'includeRequireJS',
  message: 'Would you like to include RequireJS (for AMD support)?',
  default: false
}];

this.prompt(prompts, function (props) {
  // manually deal with the response, get back and store the results.
  // we change a bit this way of doing to automatically do this in the self.prompt() method.
  this.compassBootstrap = props.compassBootstrap;
  this.includeRequireJS = props.includeRequireJS;

  cb();
}.bind(this));
};
```

**模板/拷贝指定的文件：**

为你的生成器输出拷贝指定的文件可以通过`this.copy()`和`this.template()`来实现。后者将会从你的生成器模板目录拷贝文件到用户当前所在目录。如果需要的话，传递给`this.template()`的第二个参数将被用来以一个自定义的文件名存储文件。

```javascript
Generator.prototype.bootstrapJs = function bootstrapJs() {
  if (this.includeRequireJS) {
    this.copy('bootstrap.js', 'app/scripts/vendor/bootstrap.js');
  }
};
```

**编写内容到文件：**

作为你生成器工作流的一部分，有时你也许想要编写一些自定义的内容到一个文件。使用`this.write()` 将可以做到将自定义内容写入一个指定的文件。

```javascript
Generator.prototype.mainStylesheet = function mainStylesheet() {
    this.write('app/styles/main.scss', 
    'MY SASS STYLESHEET CONTENT');
};
```

**编写目录和文件内容：**

`this.write()`和`this.mkdir()`同样可以被用来创建新的目录，子目录还有编写自定义内容到一个新文件。

```javascript
Generator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.write('app/index.html', this.indexFile);
  this.write('app/scripts/main.js', this.mainJsFile);
  this.write('app/scripts/hello.coffee', this.mainCoffeeFile);
};
```

**将文件内容引入作为字符串**

```javascript
var indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
```

**搭建一个索引的脚手架：**

```javascript
Generator.prototype.writeIndex = function writeIndex() {
  // prepare default content text
  var defaults = ['HTML5 Boilerplate', 'Twitter Bootstrap'];

  var contentText = [
    '        <div class="container">',
    '            <div class="hero-unit">',
    '                <h1>Allo!</h1>',
    '                <p>You now have</p>',
    '                <ul>'
  ];

  if (!this.includeRequireJS) {
    this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
      'components/jquery/jquery.js',
      'scripts/main.js'
    ]);

    this.indexFile = this.appendFiles({
      html: this.indexFile,
      fileType: 'js',
      optimizedPath: 'scripts/coffee.js',
      sourceFileList: ['scripts/hello.js'],
      searchPath: '.tmp'
    });
  }

  if (this.includeRequireJS) {
    defaults.push('RequireJS');
  } else {
    this.mainJsFile = "console.log('Allo!');";
  }

  // iterate over defaults and create content string
  defaults.forEach(function (el) {
    contentText.push('                    <li>' + el  +'</li>');
  });

  contentText = contentText.concat([
    '                </ul>',
    '                <p>installed.</p>',
    '                <h3>Enjoy coding! - Yeoman</h3>',
    '            </div>',
    '        </div>',
    ''
  ]);

  // append the default content
  this.indexFile = this.indexFile.replace('<body>', '<body>\n' + contentText.join('\n'));
};
```

**你可以触发使用到的Bower依赖的安装：**

```javascript
 this.on('end', function () {
    this.installDependencies({ 
      skipInstall: options['skip-install'] 
    });
  });
```

**子生成器的锚点（例如，common是另一个生成器的名字，被认为是angular应用的一部分）**

偶尔地，你也许想要提供子生成器作为你生成器工作流的一部分。一个子生成器负责搭建一个应用中一个特定部分的脚手架，例如一个视图或者模型。你工作流的手工部分作为一个子生成器意味着一个更广泛的生成器可以调用它们（使用`this.hookFor`）来创建一个初始的应用，但是你也可以之后再调用子生成器来仅创建那一块（例如，一个新视图）。这个可以使用 `yo myGenerator:mySubGenerator`来完成。

```javascript
this.hookFor('foo:app', {
  args: args,
  options: {
    options: {
        'skip-install': true;
    }
  }
});
```

**引入远程的文件：**

```javascript
Generator.prototype.bootstrapFiles = function bootstrapFiles() {
  var appPath = this.appPath;
  if (this.compassBootstrap) {
    var cb = this.async();

    this.write(path.join(appPath, 'styles/main.scss'),
    '@import "compass_twitter_bootstrap";');
    this.remote('vwall', 'compass-twitter-bootstrap', 'v2.2.2.2', function (err, remote) {
      if (err) {
        return cb(err);
      }
      remote.directory('stylesheets', path.join(appPath, 'styles'));
      cb();
    });
  } else if (this.bootstrap) {
    this.log.writeln('Writing compiled Bootstrap');
    this.copy('bootstrap.css', path.join(appPath, 'styles/bootstrap.css'));
  }
};
```


<h2 id="frequently-asked-questions">常见问题</h2>

* **我怎样使用Bower来引入依赖？** 放置一个由`/templates`目录中的Underscore模板填写的`bower.json`文件，然后从你的生成器的`app/index.js`中运行`this.installDependencies`。另外，它们也可以按以下步骤安装：

```javascript
this.bowerInstall([
  'jquery', 
  'underscore'
], { 
  save: true 
});
```

* **我怎样对生成器做单元测试？** 非常基础的Mocha单元测试脚手架将为你搭建好。你也可以看一下[写给generator-webapp的单元测试](https://github.com/yeoman/generator-webapp/blob/master/test/test.js)，来看看你应该怎样做测试的一个例子。

* **我怎样创建子生成器？**  看看[generator-generator readme](https://github.com/yeoman/generator-generator#commands).

* **我怎样扩展我的生成器来做更多系统允许之外的工作？** 生成器只是Node.js，你可以看看[nodejs.org](http://nodejs.org/api/)来发现有哪些API是不可用的.

* **我怎样发布我的生成器到NPM？** 确保你添加了相关关键词到你的包中，以便大家可以找到你的生成器（例如，yeoman-generator），然后运行 `npm publish`。有关使用NPM和包注册的进一步信息可以在[官方文档](https://npmjs.org/doc/developers.html)中找到。


<h2 id="reference-materials">参考资料</h2>

* [Generator API](https://github.com/yeoman/generator/wiki/base)
* [Environment](https://github.com/yeoman/generator/wiki/env)
* [Testing generators](https://github.com/yeoman/generator/wiki/Testing-generators)
