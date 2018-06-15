Vue@3.x.x 脚手架
====

## 开发环境
> 遵循语义化版本，[必须使用 yarn](https://yarnpkg.com/en/docs/yarn-lock)

> *[vue-cli@3.0.0 中文文档](https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/README.md)*

```shell
node ^10.4.0
yarn ^1.7.0
vue-cli ^3.0.0
```

## 开始
```shell
yarn install       
yarn serve
```

## 生产
```shell
yarn build
```

## 代码风格（[Eslint](https://eslint.cn/)）
* 风格遵循 [Standardjs](https://standardjs.com/) 规范
* 语法检测与修复，请使用 ```yarn run lint``` 
* 保存时自动检测语法

## git 工作流
> 项目使用 [GitFlow](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html) 工作流
* feature（增加新特性）
* develop（完成新特性）
* release (发布分支)
* master (主分支)
* hotfix (紧急修复分支)

## 查看 Webpack 配置
> 查看配置请在终端使用 ```vue inspect > output.js```

## Css Reset
> 使用 [Normalize.css](http://necolas.github.io/normalize.css/)

## 使用[自定义主题](https://element.faas.ele.me/#/zh-CN/component/custom-theme)
> 色值为 `#EE2C2C`

## 按需加载
> 项目使用 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 做按需加载

## Css 预处理
> Css 预处理默认使用 [SCSS](https://github.com/sass/sass)

## Css 书写原则
> 类似于 bootstrap 一样，样式尽量通过类名优先级算法处理，参考 src/assets/scss 目录下文件

## 关于全局状态管理 [Vuex](https://vuex.vuejs.org/zh/)
> ~~考虑到**XX**项目较大，Vuex 采用 [Module](https://vuex.vuejs.org/zh/guide/modules.html) 方案~~

## 关于路由 [Vue-router](https://router.vuejs.org/zh/)
> 路由采用 [HTML5 History](https://router.vuejs.org/zh/guide/essentials/history-mode.html) 模式

## 项目统一使用 Element-ui 组件库
> 对 Element-ui 使用按需加载，需要的组件请在 plugins 中按规则添加

## 公共组建
> 对应 components 目录

## 页面组建
> 对应 views 目录

## 监控
> 项目使用 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 做性能监控（Bug：无法再生产环境使用）

## 图标
> 图标使用[阿里巴巴矢量图标库](http://www.iconfont.cn/)

## 关于 Ajax
* 请阅读 views/http.js
* 项目使用 [vue-axios](https://github.com/axios/axios)


