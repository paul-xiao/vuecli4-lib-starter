const path = require('path')
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false, // 提取style里的css到单独文件
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
      filename: 'bundle.js'
    }
  },
  chainWebpack: config => {
    // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
    config.resolve.alias.set('@', path.resolve('examples')).set('~', path.resolve('packages'))
    // lib目录是组件库最终打包好存放的地方，不需要eslint检查
    // examples/docs是存放md文档的地方，也不需要eslint检查
    config.module.rule('eslint').exclude.add(path.resolve('lib')).end().exclude.add(path.resolve('examples/docs')).end()
    // copy文件
    config.plugin('copy').use(require.resolve('copy-webpack-plugin'), [
      [
        {
          from: 'packages/theme',
          to: 'theme'
        },
      ]
    ])
    // packages和examples目录需要加入编译
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
