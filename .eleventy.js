const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"templates/_assets": "_assets"});
    eleventyConfig.addPassthroughCopy({"tests/backstop/bitmaps_reference": "backstop/reference"});

    eleventyConfig.addFilter('relativeUrl', (url, page) => {
        return path.relative(path.dirname(page.filePathStem), url);
    })

    return {
        dir: {
            input: "templates",
            output: "html"
        }
    };
};
