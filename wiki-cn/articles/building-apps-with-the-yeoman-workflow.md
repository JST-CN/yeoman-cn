# 用Yeoman工作流构建应用
[原文链接](http://net.tutsplus.com/tutorials/javascript-ajax/building-apps-with-the-yeoman-workflow/)

## Yeoman是什么？

好问题。它不是东西（:O)）,他是下面这位兄弟：
<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/yo.png" alt="yo" >

基本上来说，他戴一顶高帽子，住在你的电脑里，并且时刻等候你的召唤来告诉他你想要创建哪种应用。例如，搭建一个web应用将会看起来像下面这样：

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/yo-webapp.png" alt="yo webapp">

在我脑海里出现的第一个念头是太NB了，怎么会有这种神器。第二个念头是：谢谢了，兄弟。

所有我们要做的只是告诉他我们想要什么，而他用一些具体的问题进行回复，让有了我们更多的控制。

然而，让我们折回去一步。因为并不是每个新电脑都会预安装Yeoman。他住在NPM包的代码库中。你只需要请求他一次，然后他就会打包好行李搬进你的硬盘。_确保你事先都打扫干净了，他喜欢干净清爽的环境_。

他是一个有感受和主见的人，但是他很容易合作的。如果你认为他太自以为是了，他可以很容易被说服。

让我们花点时间弄明白上面截图中的那个`yo webapp`命令究竟干了什么。

_yo_

这是一个在OS X，Linux和Windows系统范围内都适用的命令，它搜寻你硬盘中所有安装好的“生成器”，然后基与后面的参数给它们控制。

_webapp_

实际上这是一个单独的插件，或者说是“生成器”，它叫做“generator-webapp”。Yeoman
认识其他的`generator-___` Node模块，这些模块为使用Backbone，AngularJS和其他数也数不清的由你命名的生成器打开了方便之门。

一个非常重要的可取之处是，这个generator-webapp模块会提示我们问题，任何我们安装的生成器都会这样。它们不一定由Yeoman团队自己的成员维护，而是由开发社区维护的。

通过使用Yeoman，你将不会再没有节操的说“大牛，你怎么做我就怎么做。” 实际上完全相反，你真正要说的将是“我将要遵循已经被web开发社区中那些活动积极的贡献者和用户发现的最佳实践来创建一个应用。”

严格的说，你必须那样说，否则他是不会工作的。

如果你喜欢做一些与他所的不一样的东西，你可以轻松的修改者那些为你生成的代码，甚至深入“生成器”的源码中做出你的贡献。

## 友谊

我们的哥们儿yo也有一些他自己的哥们儿，并且认为你们也将会合得来。如果你还没有听说过[Grunt](http://gruntjs.com/)和[Bower](http://bower.io/)，这里有一个简短的摘要：

### Grunt

Grunt是一个基于JavaScript的任务运行器，主要是干那些脏活累活的。像yo一样，他也提供了一个基础的功能集，然后允许社区共享他们自己的插件或者“任务”来帮助开发者完成一些常见的事务。

### Bower

没有人愿意去Github或者各种开发者自己的网站去下载一个.zip的JavaScript工具。像使用`npm install ___`获取一个Node包一样，Bower允许你使用`bower install __`。之后这个组件会被保存在你选择的一个目录中，通常对于Yeoman生成的应用来说，这个目录是`app/bower_component`。假设你想要jQuery，你只需要运行`bower install jquery`命令，然后将相关文件加入你的HTML文件。以这个为例：

```
<script src="bower_component/jquery/jquery.js"></script>
```

## 一个典型应用

让我们活动起来，是时候来创建一个应用了。

以掩耳不及迅雷之势，找到离你称手的终端并且确认你已经在全局范围安装了`yo`:

```
npm install -g yo
```

为了生成一个web应用，你还需要`generator-webapp`:

```
npm install -g generate-webapp
```

创建一个文件夹，我们将在里面大展拳脚，然后运行：

```
yo webapp
```

下面这些是应该发生了的：

* 一大堆霹雳啪啦的东西

这就完成了？太棒了！

为了防止你因为滚动了窗口而看不全所有的输出，这儿有一个整体的概览：

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/yo-webapp-long.png" alt="yo-webapp-long">

用你喜欢的编辑器打开这个新应用，我们来看看我们都有些什么：

```
├─ app/
│  ├─ images/
│  │  ├─ glyphicons-halflings.png
│  │  └─ glyphicons-halflings-white.png
│  ├─ scripts/
│  │  ├─ vendor/
│  │  │  └─ bootstrap.js
│  │  ├─ app.js
│  │  ├─ hello.coffee
│  │  └─ main.js
│  ├─ styles/
│  │  └─ main.css
│  ├─ .htaccess
│  ├─ 404.html
│  ├─ favicon.ico
│  ├─ index.html
│  └─ robots.txt
│
├─ node_modules/
│  ├─ so/
│  ├─ many/
│  └─ packages/
│
├─ test/
│  ├─ spec/
│  │  └─ test.js
│  ├─ .bowerrc
│  ├─ bower.json
│  └─ index.html
│
├─ .bowerrc
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ .jshintrc
├─ bower.json
├─ Gruntfile.js
└─ package.json
```

如果说你能从这篇文章中得到什么的话，让它是上面这个漂亮的文件/文件夹展示吧。那可是我花了一整瓶激浪的时间才整出来的。
> 真的是激浪不是威士忌？
> 对不住作者了，因为这只是一片译文，所以把他引以为傲的那颗漂亮的文件树都包在了最普通的代码片段中，忏悔中...

言归正传，你现在看到的是Yeoman生成器完成的最平常的应用结构。

* `app/`中放所有没有经过编译和压缩的源代码。
* `app/scripts`中放你的JavaScript代码。你可以随意创建子目录甚至使用CoffeeScript，如果它是你那杯茶的话。这不科学啊，再来一次。你可以随意使用TeaScript，如果它是你那杯咖啡的话。:O)
* `app/styles`中放你的CSS文件。再来一次，子目录，LESS，Sass，随便什么，只要它是你那杯xxx。
* `app/index.html`是没有经过最小化的`index.html`版本，但是它最终还是会被压缩然后传递到客户端。关于这个我们在后面还会有更多的内容。
* `Gruntfile.js`有所有定义好的`build`，`server`和`test`任务。

现在，`yo`已经完成了他的工作。他已经给了你运作一个可用于生产环境的web应用需要的所有资源。

_grunt build_

运行`grunt build`将会把你的的`app/`目录中的源代码文件构建成一个可以分发的应用，并把它放在`dist/`目录中。

这个`dist/`文件夹就是你可以拿给你的服务器进行部署的。`dist/`中将有自己的`index.html`文件，以及被最小化和连接处理过的`dist/scripts`和`dist/styles`，还有优化过的`dist/images`。你的用户应该感激所有这些，你的电话卡上那些直拨用户应该__真正的__感激这些。

在幕后，`grunt build`是一个运行了若干个子任务的任务。其中的一个子任务是[grunt-usemin](https://github.com/yeoman/grunt-usemin)，它查找在你的`app/index.html`中的像下面这样的代码块：

`app/index.html`

```html
<!-- build:js scripts/main.js -->
<script src="bower_components/jquery/jquery.js"></script>
<script src="scripts/main.js"></script>
<!-- endbuild -->
```

在你的`grunt build`任务结束后，你将会看到下面的结果：

`dist/index.html`

```html
<script src="scripts/c155266f.main.js"></script>
```

它把那些script脚本都集中到一起，连接起来，最小化，甚至为了防止浏览器缓存过期的版本而添加了唯一的哈希码作为前缀。很好很强大！

这是Yeoman使用中的一个亮点，每次当你创建一个应用时，你不需要手动定义你想要的构建过程，你只需要给`Yo`及你选择的生成器一点信任，它们将会共同协作，处理好你需要的所有一切来启动一个可用于生产的应用。

_grunt server_

既然你已经知道了当你的应用完成后`grunt build`将会做什么样的工作，你现在应该开始开发你的应用了！我们将会很快创建一个，但是首先让我们看看我们将有什么样的工作流。`grunt build`，`grunt server`利用了其他一些Grunt任务来使得开发工作尽可能简单。

动手试一下：

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/yo-webapp-grunt-server.png" alt="yo-webapp-grunt-server">

之前提到的“一些Grunt任务”指的是：

* `clean` : Yeoman在一个`.tmp`文件夹中存储了一些临时文件，它们将会被清除。
* `coffee` : 从`app/scripts`目录中编译你的CoffeeScript代码。
* `compass` : 从`app/styles`目录中编译你的Sass文件。
* `connect` : 创建一个本地的server，监视你的源文件的改动，然后在你的浏览器中触发一个重新加载的动作。
* `open` : 打开server实例，一般情况下，将会在你的浏览器中打开`localhost:9000`页面。

在你的源文件中做一两处修改并在浏览器中查看一下你改动的效果。正如我上面说过的，它会使开发工作尽可能的简单，它真不是盖的。

## 让我们把它用起来！

当然这些都是开胃小菜，先吃些零嘴垫垫肚子，我们一会儿再见。

> 记得洗手哦！

## 让我们创建一个应用

为了对其他的Yeoman生成器也有点感觉，让我们试试Backbone。我们将创建一个简单的To Do应用，使用Bower作为我们的依赖管理，并将给你介绍一个现实世界中的Yeoman工作流。

```
$ 听上去不错? (Y/N)
```

我猜你会输入"Y"。Let's Go！但是首先：

```
# 安装Backbone生成器:
$ npm install -g generator-backbone
 
# 创建另一个供我们操作的目录，然后做下面的步骤：
$ yo backbone
 
     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `
 
Out of the box I include HTML5 Boilerplate, jQuery, Backbone.js and Modernizr.
 
Would you like to include Twitter Bootstrap for Sass? (y/N) Yes
Would you like to include RequireJS (for AMD support)? (y/N) No
```

在你的编辑器中打开这个新应用。自从我们用过web应用生成器之后，这一切看起来都是那么熟悉。你仍然有一个`app`目录，并且还有`scripts/`，`styles/`和一个`index.html`。

在我们开始编辑文件前，先运行：

```
$ grunt server
```

正如我们之前聊过的，这个命令将启动一个server，监视我们文件，...(各种牛X请参看上面的Grunt Server小节)。你的浏览器将会被打开，你应该会被按以下方式迎接：

```
‘Allo, ‘Allo!
```
> 为什么不是我们喜欢的“Hello, World!”?
[猛戳这里了解’ALLO'ALLO!](http://en.wikipedia.org/wiki/'Allo_'Allo!)

好的，让我们大干一场。虽然它看上去不错，但是我们必须先把其他东西搞定。

`index.html`

```html
<div class="container">
    <div class="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <section id="todo-app">
            <!-- Where our To Do app will go -->
        </section>
    </div>
</div>
```

当你保存的时候，你的浏览器将会刷新，我们做到了！虽然它只是一个简单的，温暖的“‘Allo, ‘Allo”。

让我们给自己制定一个游戏计划。我们知道我们将要创建一个To Do应用，但是它看上去是什么样的？我们需要其他的一些代码库帮助我们实现吗？

嗯...

已经过去至少4秒钟了，我还没有听到任何答案。

好吧，在那个文件树的展示消耗了我所有的脑细胞后，我需要补充些能量。如果我想到了什么，我会让你知道的。

## To Do：设置我们的文件结构

B3。在一个碳酸饮料自动售货机的投币口，发出了可怕的嘶嘶声，泡沫，灾难。
> 似乎作者yy出了一个恐怖画面的场景，无语中...

当我在洗手间洗手的时候，我有了一个答案。

```
[ Add a New To Do ] ← input
 
checkbox
- clicking will draw a line through the title of the to do item
 ↓
[x] To Do Item #1
[ ] To Do Item #2
    ↑ title
      - double clicking will trigger an "edit" mode
```

或者...

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/vision-big.png" alt="vision-big">

让我们设置一个可以把这个版本带到现实中来的文件结构。

`generator-backbone` 附带着一些秘密武器：子生成器。`yo backbone`搭建了我们应用的脚手架，但是请切换到你的终端，查看下这些子生成器都能做什么：

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/todo-generate-models.png" alt="todo-generate-models">

查看下你的index.html

```html
<!-- build:js scripts/main.js -->
<script src="scripts/main.js"></script>
<script src="scripts/templates.js"></script>
<script src="scripts/collections/todos-collection.js"></script>
<script src="scripts/models/todo-model.js"></script>
<script src="scripts/views/todos-view.js"></script>
<script src="scripts/views/todo-view.js"></script>
<!-- endbuild -->
```

看上去怎么样？它不仅创建了文件并且把文件放到了相应的目录里，甚至把js文件引入到了你的HTML中。

我已经为我们的To Do应用创建了一个代码库 - [把它迁出](https://github.com/addyosmani/yeoman-examples/tree/master/backbone-localStorage-todos)。我们将一起来看看这些文件，但是请参阅代码库中的完整代码（而不只是截屏）。

_scripts/main.js_

```javascript
/*global backboneApp, $*/
 
window.backboneApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        });
    }
};
 
$(document).ready(function () {
    backboneApp.init();
});
```

### 思索

这个Backbone生成器采用了一些很好的实践，在其他地方也很适用。它使用了你的目录名作为变量名，在我的例子中是"backboneApp"，并且把它暴露为一个对象字面量来持有我们可能创建的模型，集合以及其他Backbone对象。

同时，这个生成器把[JSHint](http://www.jshint.com/)也结合到了你的应用构建过程中，确保你的代码有着最高的质量和一致性。我们鼓励你在项目根目录下的`.jshintsrc`文件中来定制你自己的偏好。

最终，`$(document).ready`将会调用`backboneApp.init`，这个函数创建了一个`TodosCollection`实例，然后把它传递到了一个`TodosView`实例中。我将在后面对此进行详细的讲解。

_scripts/collections/todos-collection.js_

```javascript
/*global backboneApp, Backbone*/
 
backboneApp.Collections.TodosCollection = Backbone.Collection.extend({
 
    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
 
    initialize: function () {
        this.model = backboneApp.Models.TodoModel;
    }
 
});
```

### 思索

如果我们想要这个To Do应用多少有点实用的价值，我们必须把我们To Do项目存储在什么地方。有一个叫做`Backbone.LocalStorage`的很好用的Backbone适配器你也许很熟悉。它将截断Backbone对于默认的远程后端的调用，用你浏览器的`window.localStorage`来替代。

我们已经知道我们需要`Backbone.LocalStorage`适配器，但是我们怎样得到它呢？想法！想法！

我们还没有怎么直接使用过Bower。当我们搭建应用时，Bower在幕后被用来获取Modernizr，Twitter Bootstrap，jQuery，Underscore 以及Backbone。
但是如果我们想要添加其他的JavaScript依赖，应该怎么办呢？

返回你酷爱的终端，试试下面这个：

```
$ bower search backbone
```

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/bower-search-backbone.png" alt="bower-search-backbone">

好的，天哪，太多结果了，或许我们应该试着把范围缩小一些：

```
$ bower search backbone.localstorage
Search results:
 
    backbone.localStorage git://github.com/jeromegn/Backbone.localStorage.git
```
这才是我们想要的，现在我们直选要安装它就行。

```
$ bower install backbone.localStorage --save
bower cloning git://github.com/jeromegn/Backbone.localStorage.git
bower cached git://github.com/jeromegn/Backbone.localStorage.git
bower fetching backbone.localStorage
bower checking out backbone.localStorage#v1.1.4
bower installing backbone.localStorage#v1.1.4
```

当与多个开发者一起工作时，保证每个人都有正确的依赖和匹配的版本可能会有点麻烦。通过使用上面的`--save`参数，我们将告诉Bower去记住这个新的依赖，然后把它写进我们的`bower.json`文件中。当其他开发者clone你的项目时，他们只需要运行`bower install`去下载每项依赖，这样就保持了每个人都是同步的。这就是为什么`app/bower_components`被列在了你的`.gitignore`文件中。欢呼吧，代码库臃肿不堪的日子已经一去不复返了。

Bower已经把我们的整个应用变得非常棒了，让我们打开`app/index.html`并更新`scripts/vendor.js`注释块：

```html
<!-- build:js scripts/vendor.js -->
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/underscore/underscore.js"></script>
<script src="bower_components/backbone/backbone.js"></script>
<script src="bower_components/backbone.localStorage/backbone.localStorage.js"></script>
<!-- endbuild -->
```

当你保存文件的时候，你的浏览器会被刷新并且你将有新的代码库可以使用了。再具体一点，`TodoCollection`已经可以使用它了。

_scripts/collections/todo-model.js_

```javascript
/*global backboneApp, Backbone*/
 
backboneApp.Models.TodoModel = Backbone.Model.extend({
 
    defaults: {
        title: '',
        completed: false
    },
 
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
 
});
```

### 思索

这是一个非常基本的Backbone模型。我们为To Do项设置了一些默认属性并且定义了一个`toggle`函数，它可以被用来在“Complete”和“Incomplete”状态间简单的进行切换。

_scripts/views/todos-view.js_

```javascript
/*global backboneApp, Backbone, JST*/
 
backboneApp.Views.TodosView = Backbone.View.extend({
 
    el: '#todo-app',
 
    template: JST['app/scripts/templates/todos.ejs'],
 
    events: { /* ... */ },
 
    initialize: function () { /* ... */ },
 
    render: function () { /* ... */ },
 
    createTodo: function () { /* ... */ },
 
    addTodoItem: function () { /* ... */ },
 
    addAllTodoItems: function () { /* ... */ }
 
});

```

### 思索

这是我们最具活力的Backbone视图，请参阅这个[代码库](https://github.com/addyosmani/yeoman-examples/tree/master/backbone-localStorage-todos)去了解这里各种属性和方法的定义。

然而，这里有些关键的地方，最好先说明一下：

```javascript
el: '#todo-app'
```

这个选择器匹配了我们在`index.html`文件中创建的```<section id="todo-app"></section>```元素，这将会是我们的主视图。

```javascript
template: JST['app/scripts/templates/todos.ejs']
```

这个JST小东西是趁我们运行`yo backbone:view __ `的时候生成的。当我们视图的JavaScript文件创建后，Backbone的子生成器为我们创建了一个对应的模板文件：
`app/scripts/templates/todos.ejs`

这些`.ejs`模板文件将定义我们视图的HTML。当我们通过`grunt server`或者`grunt build`运行我们的应用时，我们的模板文件将会被集中压缩到一个JavaScript对象`JST`中。当我们的视图文件配置`template:JST['path/to/view/template.ejs']`时，它指的是就是那个对象。

_scripts/templates/todos.ejs_

```html
<form class="input-append">
    <input type="text" id="new-todo" placeholder="What do you need to do today?">
    <input type="submit" class="btn" value="Submit">
</form>
<ul>
    <!-- Where our To Do items will go -->
</ul>
```

### 思索

因为我们构建应用脚手架时，对问题“Would you like to include Twitter BootStrap for Sass?”回答了“Yes”，为了美化我们的应用，我已经添加了一系列class名称。请尽情在`styles/main.scss`文件中给你的内容编写样式。

_styles/main.scss_

```css
@import 'sass-bootstrap/lib/bootstrap';
 
.hero-unit {
    margin: 50px auto 0 auto;
    width: 300px;
}
 
form {
    margin-top: 10px;
}
 
ul,
li form {
    margin: 0;
    padding: 0;
}
 
ul {
    list-style: none;
}
 
li form {
    display: none;
}
 
.editing {
    span {
        display: none;
    }
 
    form {
        display: inline-block;
    }
}
 
input:checked ~ span {
    text-decoration: line-through;
}
```

### 思索

Sass简直太TMD的酷了。

一样酷的还有在修改Sass文件时你的浏览器依然会被重载。如果你之前使用过Sass，你肯定知道把一个有高效的开发环境快速搭建好可能是一个困难。但是有了Yeoman，你在编辑，监视并且重载的时候没有遇到丝毫之前提到的困难。一个大大大大的笑脸。

_scripts/views/todo-view.js_

```javascript
/*global backboneApp, Backbone, JST*/
 
backboneApp.Views.TodoView = Backbone.View.extend({
 
    tagName: 'li',
 
    template: JST['app/scripts/templates/todo.ejs'],
 
    events: {
        'click input[type="checkbox"]': 'toggle',
        'dblclick span': 'toggleEdit',
        'submit form': 'toggleEdit'
    },
 
    initialize: function () { /* ... */ },
 
    render: function () { /* ... */ },
 
    toggle: function () { /* ... */ },
 
    toggleEdit: function () { /* ... */ }
 
});
```


### 思索

这个`TodoView`将用来展示单个的To Do项。它将会是一个带有自定义的单击，双击以及提交功能的`<li>`，来使用户可以编辑和保存一个To Do项。

_scripts/templates/todo.ejs_

```html
<input type="checkbox" <% if (completed) { %>checked<% } %>>
<form>
    <input type="text" value="<%= title %>">
</form>
<span>
    <%= title %>
</span>
```

### 思索

足够简单了。我们正在使用基础的Underscore模板系统来展示内容以及在复选框上切换到选中的状态。

## To Do: 再来一次

我们的ToDo应用实际上已经完成了。虽然它只有很基础的功能，但是你应该已经感受到用Yeoman和他的生成器小伙伴们开发一个应用是多么自然而然的一件事。虽然功能是很基础的，但是在这个过程中我们使用的技术一点儿也不“基础”。我们在一个老少咸宜的开发过程（Grunt，LiveReload，Compass）中使用了灵巧，高效的函数库（Sass，Backbone，Underscore），我们唯一要做的只是敲几行终端的命令。


## To Do: 让它试航

让我们把它放在水里看看她会不会漏水！不要把你的电脑放到水里。等一下，MacBook Air会漏水？不会吧，应该不会漏。嗯....

上面那可真是一个危险的段落。让我们做好把应用部署到生产环境的准备，安全并且干燥的。

`grunt server`的表现一直很出色，现在是时候见见他的兄弟`grunt build`了。我们在之前提到过他，现在让我们来更深入的了解一下。

下面是`grunt build`任务在你的`Gruntfile.js`中的定义：

```javascript
grunt.registerTask('build', [
    'clean:dist',    // Clears out your .tmp/ and dist/ folders
    'coffee',        // Compiles your CoffeeScript files (if any)
    'createDefaultTemplate', // Creates a JS file that sets up your JST object
    'jst',           // Compiles your `scripts/templates/` files
    'compass:dist',  // Compiles your Sassiness
    'useminPrepare', // Looks for those <!-- special blocks --> in your HTML
    'imagemin',      // Optimizes your images!
    'htmlmin',       // Minifies your HTML files
    'concat',        // Task used to concatenate your JS and CSS
    'cssmin',        // Minifies your CSS files
    'uglify',        // Task used to minify your JS
    'copy',          // Copies files from .tmp/ and app/ into dist/
    'rev',           // Creates unique hashes and re-names your new JS/CSS files
    'usemin'         // Updates the references in your HTML with the new files
]);
```

这个设置看起来非常合理。所有这些任务都定义在`Gruntfile.js`中，所以请随意的折腾来自定义你的应用构建任务。你极有可能不需要做任何的自定义，但是如果你想的话，他就在那里，你懂的。

哦，差点忘了一件事。实际上`grunt build`被封装在另一个任务中。

_grunt_

只运行`grunt`的话，将会执行`default`任务：

```javascript
grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
]);
```

当你要把一个应用赶工出来的时候，头两个任务`jshint`和`test`是非常重要确又极易被忽视的。

### JSHint

`jshint`任务将参照你的`.jshintrc`文件去了解你的编码偏好，然后扫描你所有的JS文件确定你的规则没有被违背。要想充分使用JSHint的各种选项，请查看[JSHint文档](http://www.jshint.com/docs/#options)。

### 测试

下面是`test`任务的样子：

```javascript
grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'createDefaultTemplate',
    'jst',
    'compass',
    'connect:test',
    'mocha'
]);
```

基本上，它已经为你的测试框架Mocha执行你的测试做足了准备。

废话，测试先。

在你的`app/`和`/dist/`目录旁边，这个`test/`目录一直在等待着我们的关注。

噢。

如果你打开那个目录，你将发现`test/`有它自己的`bower.json`和`index.html`文件，还有一个`spec`目录。你的测试将会有一些它们自己的依赖，[Chai断言库](http://chaijs.com/)和[Mocha测试框架](http://visionmedia.github.io/mocha)。

展开`spec/`目录，你将看到一个`test.js`文件，它看起来像下面这样：

```javascript
/*global describe, it */
'use strict';
 
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
 
            });
        });
    });
})();
```

哦，看上去我们可以提交一个[pull request](https://github.com/yeoman/generator-backbone/pulls)来纠正下语法，有志愿者吗？

如果你之前没有自己写过测试代码，你将会看到像`describe`，`it`，`before`，`beforeEach`，`after`，还有`afterEach`这样的术语。`describe`是对一组相关测试的一个封装器，`____Each`是可选的函数，它将在你的测试执行前(`before`)或者执行后(`after`)执行，每一个`it`是一个特定的测试。

试着运行`grunt test`命令来见证奇迹的发生。

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/todo-grunt-test.png" alt="todo-grunt-test">

你应该尝试一下，并且看看你能不能为我们的ToDo应用写一些测试。一些关于测试用例的想法大概会是：

* 创建的新的To Do项目会保存在localStorage吗？
* 一个新的To Do项目的标题被处理（除去额外的空格）了吗?
* 当编辑一个To Do项目时，删除标题然后保存会把To Do项目从localStorage中移除吗？

接下来只有一件事情需要做。

### 按下回车

```
$ grunt
```

你应该已经看见了我们最爱的哪一行字：`Done, without errors.`。

## 找到Yeoman

Yeoman还很年轻；他才刚满一岁（当前为1.0版本）。现在一切都进展的很顺利而且还将变得更好。然而，像很多一岁大的孩子一样，Yeoman仍然在学着走路时不要摔跤，说话时不要流口水。你可能在运行时发现了一两个bug。每当这时，想一想他就像你可爱的小外甥一样，在生活中他需要正面的榜样，所以请帮帮他。

他像真正的孩子一样好学，学的非常快。我们将帮助他一点一点成长：现在有一些bug，我们需要你的帮助去消灭它们（我说过“一点一点”）。甚至不是一个bug，而是一些你喜欢的，“我知道一个非常快的Grunt插件可以在这个生成其中使用”，请把它报告到合适的生成器问题追踪系统。

如果你想要了解更多关于Yeoman的信息或者只是想要了解这个团队，你将会在下面这些网站找到我们。

* [yeoman.io](http://yeoman.io/) （[中文站yeomanjs.org](http://yeomanjs.org)）
* [新手上路指南](http://yeoman.io/gettingstarted.html) （[中文版](http://yeomanjs.org/gettingstarted.html)）
* [@Yeoman on Twitter](http://twitter.com/yeoman)
* [+Yeoman on Google+](https://plus.google.com/101063139999404044459)

如果你遇到了头疼的问题，试试下面这些资源来寻求帮助。

* [StackOverflow](http://stackoverflow.com/questions/tagged/yeoman)
* [#yeoman on IRC](http://webchat.freenode.net/?channels=yeoman)

Yeoman只是整个栈中的一部分--[NPM](http://npmjs.org/)，[Node](http://nodejs.org/)，[Grunt](http://gruntjs.com/)还有[Bower](http://bower.io/)。如果你不熟悉这些的话，可能会有些发怵，但是关键是不要被学习的曲线给吓住了。我们需要学习，并且像往常一样，我们只有经过刻苦的学习才能真正地掌握技巧。

嘘，如果你在每一个命令前都要用`sudo`，赶快去看[30秒搞定Node和NPM](https://gist.github.com/isaacs/579814)。在那儿你会找到一些你可以运行的脚本来把控制权交还给你的用户账户。如果你是从头开始的，它也会帮助你搞定Node和NPM。

## 你的下一个应用，会使用Yo吗？

像所有工具一样，我相信Yeoman值得每一个开发者可以试一下。如果你试过了但是发现它不适合你的项目，我和团队中其它的人都很乐意知道为什么。如果你需要有人在你的项目上帮助你，请来找我。你在上面的链接中可以找到我，或者直接在Twitter上联系我。我是[@stephenplusplus](http://twitter.com/stephenplusplus)或者Stephen Sawchuk。

<img src="http://cdn.tutsplus.com/net.tutsplus.com/uploads/2013/07/me.jpg" alt="me">

很期待见到你。

>如果各位中国的开发者对Yeoman感兴趣的话，请参看下面的链接，这是由中国的开发者为了推动Yeoman在中国的发展，而进行的Yeoman相关文档本地化的项目而组织的网站和发起的项目。

<img src="http://ww3.sinaimg.cn/mw1024/73ad65f1jw1e9bm0ay6pxj213e0ilgr3.jpg" alt="Yeoman中文社区">

* [Yeoman中文社区](http://yeomanjs.org/index.html)
* [Yeoman中文文档翻译](https://github.com/qivhou/yeoman-cn/)
* [Yeoman中文社区网站建设](https://github.com/qivhou/yeomanjs.org/)




