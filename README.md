# nuxt-wiki

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

```

### 使用NUXT+VUE+VUEX重构知乎日报App

**Nuxt优点**  

- 无需为了路由划分而烦恼，你只需要按照对应的文件夹层级创建 .vue 文件就行
- 无需考虑数据传输问题，nuxt 会在模板输出之前异步请求数据（需要引入 axios 库），而且对 vuex 有进一步的封装
- 内置了 webpack，省去了配置 webpack 的步骤，nuxt 会根据配置打包对应的文件

**起因**  

之前在github上看到过相关vue实现知乎日报项目，同时又看了一些基于nuxt.js实现SSR应用的文章，便想两者结合练习练习学了有段时间的vue。利用晚上时间断断停停两个多月基本实现了主要的功能。

**环境搭建**  

nuxt有关的脚手架已经集成到了vue-cli，项目中使用了koa，页面布局主要用来flex布局，使用了知乎日报的API接口获取数据。

**layout布局**  

nuxt新特点--layout布局，可以通过layout布局方便的实现页面的多个布局之间的切换。其中layout与页面的具体内容的插口即：nuxt标签。nuxt框架将页面分层划分为3层：1.布局；2.页面；3.组件

**页面路由**  

nuxt新特点--用目录结构来划分路由的，所有router由pages目录决定。只要按照nuxt规范的页面文件目录结构进行设计，就可以自动生成vue-router文件。
 
**asyncData方法**  

能够在渲染组件之前异步获取数据。asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。

**由于asyncData方法是在组件初始化前被调用的，所以在方法内是没有办法通过this来引用组件的实例对象。**

**fetch方法**  
fetch方法用于在渲染页面前填充应用的状态树（store）数据， 与asyncData方法类似，不同的是它不会设置组件的数据。

fetch 方法的第一个参数是页面组件的上下文对象 context，我们可以用 fetch 方法来获取数据填充应用的状态树。为了让获取过程可以异步，你需要返回一个 Promise，Nuxt.js 会等这个 promise 完成后再渲染组件。

**总结**
不断踩坑，不断学习，不断进步。


