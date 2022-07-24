const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://wm-market.herokuapp.com',
        changeOrigin: true,
      }
    }
  }
})
