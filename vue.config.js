// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  baseUrl: '/',
  devServer: {
    open: process.platform === 'darwin', // process.platform(当前操作系统)    darwin(苹果系统)
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false, // 在构建失败的情况下启用无需刷新页面作为回退的热模块替换。
    proxy: { // 参考 http-proxy-middleware: https://github.com/chimurai/http-proxy-middleware#proxycontext-config
      '/lenovo': {
        target: 'https://baidu.com', // 目标站点
        ws: true, // 代理 websockets
        changeOrigin: true, // 是否需要虚拟主机站点
        pathRewrite: {'^/lenovo': ''} // 替换 path
      }
    }
  },
  // 将构建好的文件输出到哪里
  outputDir: 'dist',
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`true,` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,
  // 该对象将会被 webpack-merge 合并入最终的 webpack 配置。
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 生产模式下无法使用
      // config.plugins= [
      //   new BundleAnalyzerPlugin()
      // ]
    } else {
      // 为开发环境修改配置...

    }
  }

}
