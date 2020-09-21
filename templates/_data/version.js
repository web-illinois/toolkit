const pkg = require("../../package.json");

const version = pkg.version.substring(0, pkg.version.lastIndexOf('.'));

module.exports = {
    version,
    repository: pkg.repository,
    cdn: "https://cdn.brand.illinois.edu/toolkit/v" + version
};
