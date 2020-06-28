const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MyPlugin = require("./plugin");
const path = require("path");
const mode = process.env.NODE_ENV !== "production";

module.exports = {
  resolve: {
    extensions: [".js", ".vue"] // which is what enables users to leave off the extension when importing:
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [mode ? "vue-style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          mode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              import: [path.resolve(__dirname, "../src/styles/index.styl")] //global styles
            }
          }
          // {
          //   loader: "style-resources-loader",
          //   options: {
          //     patterns: path.resolve(__dirname, "../src/styles/palette.styl"),
          //     injector: "append"
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    new MyPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "./lib/styles/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
