module.exports = function(wallaby) {
  var path = require("path");
  process.env.BABEL_ENV = "test";
  process.env.NODE_ENV = "test";
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, "node_modules") +
    path.delimiter +
    path.join(__dirname, "node_modules/react-scripts/node_modules");
  require("module").Module._initPaths();

  return {
    files: ["app/**/*.+(ts)", "!test/*.spec.ts"],

    tests: ["test/*.spec.ts"],

    env: {
      type: "node",
      runner: "node"
    },

    preprocessors: {
      "**/*.js": file =>
        require("@babel/core").transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: [require("babel-preset-jest")]
        })
    },

    testFramework: "jest"
  };
};
