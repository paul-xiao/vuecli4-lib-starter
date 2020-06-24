const merge = require("webpack-merge");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
// static files
// const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.base");
const path = require("path");
const glob = require("glob");

let entryFiles = {};
glob.sync("packages/**/*.js").forEach(entry => {
  let key = entry.split("/")[1];
  entryFiles[`${key}/index`] = path.resolve(entry);
});
const prod = merge(baseConfig, {
  mode: "production",
  stats: "errors-only",
  entry: Object.assign(entryFiles, {
    index: path.resolve("src/index.js")
  }), //入口
  optimization: {
    minimize: false //压缩 默认true
  },
  output: {
    path: path.resolve(__dirname, "../dist"), // 项目的打包文件路径
    filename: "./lib/[name].js",
    library: "test",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [
    // new OptimizeCSSAssetsPlugin(),
    new ProgressBarPlugin({
      format: chalk.bgGreen.black(" build ") + "[:bar]" + ":percent" + " (:elapsed seconds)",
      summary: false,
      summaryContent: chalk.red.green("Build Completed in"),
      clear: false
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "../src/index.js"),
    //       to: path.resolve(__dirname, "../dist/lib")
    //     }
    //   ]
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "/dist"]
    }) //清理dist文件
  ]
});

module.exports = prod;
