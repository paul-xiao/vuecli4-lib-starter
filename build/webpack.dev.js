const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

dev = merge(baseConfig, {
  mode: "development",
  stats: "none",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../dist"),
      "@assets": path.resolve(__dirname, "../src/assets")
    }
  },
  entry: path.resolve("src/pages/index.js"), //入口
  devServer: {
    contentBase: path.join(__dirname, "../examples"), // Tell the server where to serve content from. This is only necessary if you want to serve static files. devServer.publicPath will be used to determine where the bundles should be served from, and takes precedence.
    historyApiFallback: true, // 404 fallback
    open: false,
    compress: true,
    quiet: true, //不显示日志信息
    noInfo: true,
    publicPath: "/"
  },
  plugins: [
    new ProgressBarPlugin({
      format: "build [:bar]" + ":percent" + " (:elapsed seconds)",
      clear: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", // 生成文件名称
      template: "./public/index.html", // target
      inject: true
    })
  ]
});
// console.log(dev.module.rules)

module.exports = dev;
