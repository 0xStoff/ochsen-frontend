// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = function override (config) {

    config.resolve.alias = {
        "@": path.resolve("src"),
        "@config": path.resolve("src/config"),
        "@interfaces": path.resolve("src/interfaces"),
        "@services": path.resolve("src/services"),
        "@styles": path.resolve("src/styles"),
        "@components": path.resolve("src/components"),
        "@hooks": path.resolve("src/hooks"),
        "@tabs": path.resolve("src/components/tabs")
    };
    return config;

};
