const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',  //目标地址
        changeOrigin: true,  //允许跨域
        pathRewrite: {
          '^/api':''
        }
      }
    }
  },
  lintOnSave:false
})
