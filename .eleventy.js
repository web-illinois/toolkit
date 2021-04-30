module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css']);

  eleventyConfig.addShortcode("addStaticImages", function () {
    return '';
  });
  
  return {
    dir: {
      input: "tests",
      output: "var/test-site"
    }
  };
};
