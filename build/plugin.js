const path = require("path");
const chalk = require("chalk");
function MyPlugin(options) {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", function() {
    console.log(chalk.bgGreen.black(`${process.env.NODE_ENV !== "production" ? "DEV" : "PROD"}`));
  });
};

module.exports = MyPlugin;
