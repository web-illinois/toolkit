const pkg = require("../../package.json");

const version = pkg.version.substring(0, pkg.version.lastIndexOf('.'));

module.exports = {
    version,
    repository: pkg.repository,
    //dist: "https://cdn.brand.illinois.edu/web-toolkit/1.1.0-beta1",
    dist: "/dist",
    cdn: "https://cdn.brand.illinois.edu/web-toolkit/" + version
};
