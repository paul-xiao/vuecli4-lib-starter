const path = require('path');

module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/styles/index.styl'),
      ],
    },
  },
  css: {
    extract: true,
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
};
