# 获取这个主题的Gist 
下载[点击这里](https://gist.github.com/ffcbf037e6e856e1010d)

# 如何整合

## 第一部分: Grunt

### 将`grunt-contrib-stylus`作为一项`devDependency`加入package.json

运行 `npm install -D grunt-contrib-stylus`. 这个命令会将`grunt-contrib-stylus`在安装后添加到你的`package.json`文件中。

(如果你想要对gradients(渐变)采用node-canvas的方案, 你可以运行`npm install -D canvas`，请查看nib文档了解更多。)


### 在`Gruntfile.js`中进行任务声明

```
  grunt.loadNpmTasks('grunt-contrib-stylus'); // 如果你使用load-grunt-tasks的话，这行可以省略
  grunt.registerTask('compass', ['stylus']);
```

注意: 如果你之前并没有使用compass，此时你不必对它进行重写覆盖，你只需要把'stylus'(或者'stylus:compile'，这取决与你的具体需要)添加到grunt.registerTask()函数的队列参数中。

## 第二部分: Stylus

### 设置编译配置

```
    stylus: {
      compile: {
        options: {
          compress: true,
          paths: ['node_modules/grunt-contrib-stylus/node_modules']
        },
        files: {
          'app/styles/*.css': ['app/styles/*.styl']
        }
      }
    },
```

这里的 `paths` 定义允许你在样式中使用 `@import 'nib'`.



### 配置 `--watch`
```
      stylus: {
        files: [
          'app/styles/**/*.styl'
        ],
        tasks: ['stylus']
      },
```

## 第三部分 (可选): 删除Compass和Compass watch配置
