const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // 作用：定义的变量或函数可以在其他scss文件直接使用
        prependData: '@import "~@/assets/css/index.scss";',
      },
    },
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
      },
    },
  },
};
