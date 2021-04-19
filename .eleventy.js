module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html','md','njk','11ty.js','css']);
  eleventyConfig.addPassthroughCopy({ "dist": "." });
  return {

 dir: {
    input: "tests",
    output: "var/test-site"
  }
};
};
