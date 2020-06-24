const webpack = require("webpack");
const config = require("./webpack.prod");
webpack(config).watch({ ignored: /node_modules/ }, function(err, stats) {
  console.log(stats.compilation);
});
