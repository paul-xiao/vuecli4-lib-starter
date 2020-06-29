// 插件代码
const { Console } = require("console");
const chalk = require("chalk");
const logger = new Console({ stdout: process.stdout, stderr: process.stderr });

class MyWebpackPlugin {
  constructor(options) {}

  apply(compiler) {
    // 内置插件

    // 插入钩子函数
    compiler.hooks.emit.tapAsync("MyWebpackPlugin", (compilation, callback) => {
      const manifest = {};
      logger.warn(chalk.green.bold("Name".padEnd(50)), chalk.yellow.bold("Size"));
      for (const name of Object.keys(compilation.assets)) {
        manifest[name] = compilation.assets[name].size();
        // 将生成文件的文件名和大小写入manifest对象
        logger.warn(name.padEnd(50), compilation.assets[name].size().toString());
      }

      compilation.assets["manifest.json"] = {
        source() {
          return JSON.stringify(manifest);
        },
        size() {
          return this.source().length;
        }
      };
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
