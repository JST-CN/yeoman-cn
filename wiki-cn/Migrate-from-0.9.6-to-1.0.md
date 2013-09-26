# 从0.9.6版本迁移到1.0版本

自从我们上个0.9.6版本后许多东西都改变了。我们决定不仅仅把Yeoman打造成一个工具。它是一个工作流；一个让web开发和谐甚至变得更好的工具和最佳实践的集合。

你可以了解更多的改变在[通向1.0版本之路](https://github.com/yeoman/yeoman/wiki/The-Road-to-1.0)。

你将注意到的第一件事是不再有`yeoman`命令。我们把脚手架提取到了一个新的工具叫做`yo`。对于包管理，我们不再代理Bower，而是让你直接使用它。对于grunt也是这样...

我们没有把大量的逻辑隐藏在`yeoman`的二进制文件里，而是基本上把每一样都改造成了通用的grunt任务，这些任务我们已经与社区共享了。`yo`命令将产生一个静态文件Gruntfile，这个文件中包含了你需要的一切。这样一来，明显的好处是现在所有的东西都是明确的并且可以自定义的。

## 样例

新的工作流和老的相似，但是不是使用`yeoman`命令，而是使用针对当前任务合适的工具。


老的工作流:

```
yeoman init
yeoman install jquery
yeoman build
```

新的工作流:

```
yo webapp
bower install jquery
grunt build
```


## 命令转换

```
yeoman init       ➜    yo
yeoman build      ➜    grunt [build]
yeoman server     ➜    grunt server
yeoman test       ➜    grunt test

yeoman install    ➜    bower install
yeoman uninstall  ➜    bower uninstall
yeoman update     ➜    bower update
yeoman list       ➜    bower list
yeoman search     ➜    bower search
yeoman lookup     ➜    bower lookup
```


## 怎样升级?

首先你需要卸载已经安装的Yeoman 0.9.6版本。你可以通过运行`npm uninstal -g yeoman`来实现它。

在你进行下一步前，请阅读[新手上路](https://github.com/yeoman/yeoman/wiki/Getting-Started)。

已经有一些[重大的改变](https://github.com/yeoman/generator-webapp/compare/adb4ae52b47f80e2cdcca9557aa461dbce798450...master#diff-8?w=1)在Gruntfile中体现，所以你不能简单地使用同样的文件。如果你并没有改动过Gruntfile文件，你可以使用`yo`命令生成一个新的项目，然后把除了自动生成的例如Gruntfile.js，package.json等文件以外的你的文件拷贝粘贴。然而，如果你已经对Gruntfile做过了修改，你需要比较[原始的文件](https://github.com/yeoman/generator-webapp/blob/adb4ae52b47f80e2cdcca9557aa461dbce798450/app/templates/Gruntfile.js)和你自己的并且试着把相同的改动采用到新的Gruntfile.js上。

## FAQ

### AppCache任务发生了什么？

因为它过多的魔法一般的自动生成应用缓存，我们决定不再包含它。我们正在[讨论](https://github.com/yeoman/yeoman/issues/762)其他的选项。
