# yeoman 中文社区

## 目标

所有英文的wiki文档均fork自yeoman的[yeoman的wiki][yeoman-wiki]，希望可以将yeoman的相关文档本地化，来推动yeoman在中国的发展。

所有wiki文档希望可以通过网站形式进行发布，使得查询变得更方便。

_因为部分wiki文档的内容已经作为网页内容在[yeomanjs.org](http://yeomanjs.org)可以看到，没有在网页上列出的内容将随后添加专门的wiki页面。_

## 说明

* [wiki-en] 文件夹中存放从[yeoman的wiki][yeoman-wiki]fork的md文档，并将不定期与官网进行同步。

* [wiki-cn] 文件夹中存放所有翻译好的md文档，以及未翻译的英文文档。_为了保持文档结构的完整性_

* progress.md 文件记录当前进度，内容格式为
```
filename - [In Progress | Done]
```
只有开始翻译和已经进行完翻译的文件会在此文件中列出。

## 规则

* 所有中文的翻译文档将采用和英文文档一样的文件名，以避免由于文件名引起的不必要的麻烦。

* 原则上按照原wiki的文档结构由上自下进行翻译。

* 请参与贡献的同步，先运行以下`grunt update`任务，进行与官方wiki的同步，对于已经完成翻译但是官方又有更新的wiki文档，比如下面的 Deployment.md 文件，欢迎大家根据提示信息及时更新中文翻译。
> Warning: wiki-en/Deployment.md has been changed on official site, please update your translation.

```shell
>grunt update

Running "clean:0" (clean) task

Running "update_en" task

Running "copy:en" (copy) task
Copied 41 files

Running "update_cn" task
>> update file: test-example.md
>> Warning: wiki-en/Deployment.md has been changed on official site, please update your translation.

Running "clean:0" (clean) task

```

> 期待着你的加入！！！




[yeoman-wiki]: https://github.com/yeoman/yeoman/wiki
[wiki-en]: https://github.com/qivhou/yeoman-cn/tree/master/wiki-en
[wiki-cn]: https://github.com/qivhou/yeoman-cn/tree/master/wiki-cn
