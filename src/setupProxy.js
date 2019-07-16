const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://capi.douyucdn.cn',
      changeOrigin: true,
      secure: false,
    })
  ),
  app.use(
    proxy('/douyu', {
      target: 'https://www.douyu.com',
      changeOrigin: true,
      secure: false,
    })
  )
}