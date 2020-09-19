module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"templates/_assets": "_assets"});
    return {
        dir: {
            input: "templates",
            output: "html"
        }
    };
};
