const path = require('path');
// const styleConfig = require('./build/weboack.style.config');

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule('js')
    //   .include.add(path.resolve(__dirname, 'src')).end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap((options) => options)
    //   .rule('css')
    //   .include.add(path.resolve(__dirname, 'src/styles')).end()
    //   .use('stylus')
    //   .loader('stylus-loader')
    //   .tap((options) => options);
  },
  configureWebpack: (config) => {
    // Object.assign(config, styleConfig);
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/styles/index.styl'),
      ],
    },
  },
};
