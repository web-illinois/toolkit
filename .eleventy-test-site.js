const glob = require('fast-glob');
const path = require('path');

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css']);
  eleventyConfig.addPassthroughCopy({ "dist": "." });

  eleventyConfig.addShortcode("addStaticImages", function () {
    let info = '<h2>Web Toolkit reference images</h2><ul>';
    glob.sync('tests/_reference/*.png').forEach(file => {
      var filename = path.basename(file);
      var filepath = 'static-images/' + filename;
       info = info + `<li><a href="${filepath}">${filename}</a></li>`;
    });
    info = info + '</ul>';
    return info;
  });

  return {
    pathPrefix: '/samples/2.0/',
    dir: {
      input: "tests",
      output: "var/full-site-deploy"
    }
  };
};
