const merge = require("webpack-merge");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
// const CopyPlugin = require('copy-webpack-plugin')

const baseConfig = require("./webpack.base");
const path = require("path");

const prod = merge(baseConfig, {
  mode: "production",
  stats: "errors-only",
  entry: {
    button: path.resolve("./packages/button/index.js"),
    input: path.resolve("./packages/input/index.js"),
    lottery_draw: path.resolve("./packages/lottery_draw/index.js")
  }, //入口
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
      format: "build [:bar]" + ":percent" + " (:elapsed seconds)",
      clear: false
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../src/components/index.js'),
    //       to: path.resolve(__dirname, '../dist/lib'),
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "/dist"]
    }) //清理dist文件
  ]
});

module.exports = prod;
