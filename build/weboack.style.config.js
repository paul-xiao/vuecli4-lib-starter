const { resolve } = require('path');

module.exports = {
  context: resolve('/'),
  resolve: {
    extensions: ['.styl'],
    alias: {
      '@': resolve('src'),
      '~': resolve('/'),
    },
  },
  entry: resolve('src/styles/index.styl'),
  output: {
    path: resolve('dist/styles'),
    publicPath: './',
    filename: '[name].js',
    library: 'pxui/styles',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: false,
  },
};
