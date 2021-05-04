const glob = require('fast-glob');
const path = require('path');

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css', 'jpg']);
  eleventyConfig.addPassthroughCopy({ "dist": "." });

  eleventyConfig.addShortcode("addStaticImages", function () {
    let info = '<h2>Web Toolkit reference images</h2><ul>';
    glob.sync('tests/_reference/*.png').forEach(file => {
      var filename = path.basename(file);
      var filepath = 'static-images/' + filename;
      var prettyFilename = filename.replace('web-toolkit_', '').replace('_0_document', ' (').replace('.png', ')').replace('_0_', '').replace('_1_', '').replace('_2_', '').replace('_3_', '').replace('_4_', '').replace('_5_', '');
       info = info + `<li><a href="${filepath}">${prettyFilename}</a></li>`;
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
