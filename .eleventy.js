const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"templates/_assets": "_assets"});
    eleventyConfig.addPassthroughCopy({"tests/backstop/bitmaps_reference": "backstop/reference"});

    /*
    eleventyConfig.addCollection('testResult', collectionApi => {
        const testResultsPath = path.join(__dirname, 'var', 'tests.functional.results.json');
        if (fs.existsSync(testResultsPath)) {
            return require(testResultsPath).testResults;
        }
        return [];
    })
     */

    return {
        dir: {
            input: "templates",
            output: "html"
        }
    };
};
