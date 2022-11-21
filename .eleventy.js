module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css', 'jpg', 'json']);
  eleventyConfig.addPassthroughCopy({
    "dist": ".",
    "node_modules/axe-core": "axe",
    "tests/_reference": "reference-images"
  });

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
