module.exports = {
  devServer: { // 环境配置
    host: '0.0.0.0',
    public: '211.88.26.170:8080',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    open: true, // 配置自动启动浏览器
    proxy: { // 配置跨域
      '/api': {
        target: 'http://127.0.0.1:3000/', // 这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, // 允许跨域
        pathRewrite: {
          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
            实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
           */
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            // 如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: [],
            propList: ['*'],
            exclude: /node_modules/
          }),
          require('postcss-px-to-viewport')({
            viewportWidth: 750,
            minPixelValue: 1
          })
        ]
      }
    }
  }
}
