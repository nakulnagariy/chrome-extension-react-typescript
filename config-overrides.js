const path = require("path");
const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin("transform-remove-console"),
  (config, env) => customOverride(config, env)
);

function customOverride(config, env) {
    config.devtool = "eval-source-map";
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            "@Config": path.resolve(__dirname, "src/config"),
            "@Components": path.resolve(__dirname, "src/components"),
            "@Containers": path.resolve(__dirname, "src/containers"),
            "@Handlers": path.resolve(__dirname, "src/handlers"),
            "@Utils": path.resolve(__dirname, "src/utils"),
            "@Style$": path.resolve(__dirname, "src/style/style.js"),
        },
    };

    if (env !== "development") {
        config.devtool = false;
    }

    return config;
}
