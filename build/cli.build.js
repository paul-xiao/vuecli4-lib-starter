const { run } = require('runjs')
const { getAssetsPath, chalkConsole, resolve } = require('../utils')
const { move, fileDisplay } = require('../utils/file')
const rimraf = require('rimraf')

function build() {
  run(`vue-cli-service build --target lib --name pxui --formats umd-min --dest lib packages/index.js`)
}

build()
// 删除多余文件
rimraf(getAssetsPath('./demo.html'), function () {})
// 创建样式文件夹

// 重命名common文件
fileDisplay(getAssetsPath(), file => {
  const reg = /.umd.min/
  if (reg.test(file)) {
    file = `../${file}`
    move(resolve(file), resolve(file.replace(reg, '')))
  }
})

chalkConsole.success()
