// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = function override (config) {

    config.resolve.alias = {
        "@": path.resolve("src")
    };
    return config;

};
