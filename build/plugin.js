function MyPlugin(options) {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", function() {
    console.log("Hello World!");
  });
};

module.exports = MyPlugin;
