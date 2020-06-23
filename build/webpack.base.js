const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV !== "production";

module.exports = {
  resolve: {
    extensions: [".js", ".vue"]
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
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
