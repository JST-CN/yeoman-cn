对那些希望发布或者部署一些特定目录（比如`dist`）到Github pages或者其他一些生产服务器的开发者来捉，以下的部署指南是很有用的。

对于一个使用`yo`搭建的典型项目来说，`grunt build`将会在`dist`目录中生成一份经过优化的应用版本。有很多种方式来进行版本优化并且把代码部署到生产环境。

### Grunt-build-control 任务


[Grunt build control](https://github.com/robwierzbowski/grunt-build-control)是专门为部署Yeoman应用而开发的。它可以帮助你进行版本转换并且利用grunt任务自动部署构建的代码。配置选项包括：

- 需要把代码提交到的分支名称 (比如, prod, gh-pages)
- 需要推送的远端(比如, Heroku实例, GitHub远端, 或者本地代码仓库)
- 自动提交构建的代码以及包含分支内容的信息
- 安全性检查确保源码仓库的干净以及构建代码与源代码码提交保持一致。

Build Control抓取之前的每一个提交，并且通常在有多个代码贡献者独立部署的情况下可以很好的保持代码的版本控制。只要没有用户强制push它就能维护完整的修订历史。项目的完整文档可以在查看[GitHub page](https://github.com/robwierzbowski/grunt-build-control)。

### Git subtree 命令

你可以在同一个分支上维护源代码以及构建代码，并且通过[`git subtree`](https://github.com/apenwarr/git-subtree) 命令只部署`dist`目录。

1. 从`.gitignore`文件中移除`dist`目录，默认情况下Yeoman项目是忽略它的。
2. 添加`dist`目录到你的代码仓库:  

        git add dist && git commit -m "Initial dist subtree commit"

3. 部署subtree到一个不同的分支。用`--prefix`指定一个相对于`dist`目录的相对路径:

        git subtree push --prefix dist origin gh-pages

4. 正常开发，提交你整个代码库到你的默认（master）分支。
5. 部署`dist`目录, 从根目录运行`subtree push`命令:

        git subtree push --prefix dist origin gh-pages

### Git-directory-deploy 脚本

[Git directory deploy](https://github.com/X1011/git-directory-deploy) 是一个精简的自动化脚本，它与grunt build control有着相似的工作理念。

### 衍生内容

- [Git Subtree docs](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)
- [Yeoman Build process docs](https://github.com/yeoman/yeoman/wiki/yeoman-build)
- [Github Pages docs](https://help.github.com/articles/user-organization-and-project-pages)
- [Generating a Heroku procfile with generator-heroku](https://github.com/passy/generator-heroku)










# 部署

## 部署你的应用

当你运行 ```grunt build``` 后，它会在 ```dist``` 目录中为你的应用生成一个完整的，优化过的可部署版本。

部署 ```dist``` 目录的推荐方式是使用 ```git subtree```。

1. 从 ```.gitignore``` 文件中移除 ```dist```目录。


2. 添加 ```dist``` 目录到你的代码仓库中并且随着你的项目提交。

   ```
   git add dist && git commit -m "Initial dist subtree commit"
   ```

3. 一旦 ```dist``` 目录成为了你项目的一部分，我们可以使用 [```git subtree```](https://github.com/apenwarr/git-subtree) 来设置一个独立的代码仓库到一个另外的分支上。

   ```
   // 部署dist到GitHub Pages
   git subtree push --prefix dist origin gh-pages
   ```

   注意: prefix必须是相对你 ```dist``` 目录的相对路径。这里假设 ```dist``` 是你的根目录。


4. 现在你可以提交你的整个代码仓库到你的默认的（master）分支上，当你想要部署 ```dist``` 目录的时候你可以运行：

   ```
   git subtree push --prefix dist origin gh-pages
   ```

### 一些常见错误
 * 在默认情况下，```dist``` 目录将会被git命令忽略，从.gitignore文件中移除它是很重要的。
 * 你必须在运行git subtree命令前先提交你的 ```dist``` 目录到默认的（master）分支。
 * ```git subtree``` 命令必须从根目录进行调用。
 * ```--prefix``` 选项必须是相对于你 ```dist``` 目录的相对路径。
 * GitHub Pages使用 ```gh-pages``` 分支来部署项目页面。用户或者组织页面使用 ```master``` 分支。这意味着你有可能会使用master作为你的subtree分支，并且为你的应用源码设置一个不同的分支。
 * 你可能会得到一个像这样的错误 `Updates were rejected because the tip of your current branch is behind`。你可以通过[强制推送到远程](http://stackoverflow.com/a/13403588/64949) 解决它（但是请小心一点，它将会销毁那儿已经存在的所有文件）。


### 替代方式

如果你倾向于不把dist提交到master分支，你可以使用[git-directory-deploy](https://github.com/X1011/git-directory-deploy)脚本从工作目录直接部署文件。

### 额外的资料
 [Git Subtree 文档](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)

 [Yeoman Build](https://github.com/yeoman/yeoman/wiki/yeoman-build)

 [Github Pages](https://help.github.com/articles/user-organization-and-project-pages)

 [generator-heroku](https://github.com/passy/generator-heroku)
