const fs = require('fs');
const glob = require('fast-glob');
const path = require('path');
const { URL } = require('url');

function pad(val) {
  return val < 10 ? '0' + val : val;
}

function findVisualTestsForPage(page, config, images) {
  try {
    const pageConfig = config.scenarios.find(c => {
      const url = new URL(c.url);
      return url.pathname === page.data.page.url;
    });
    if (!pageConfig) {
      throw new Error("No tests found for page: " + page.data.page.url);
    }
    const pattern = new RegExp('^' + config.id + '_' + pageConfig.label + '_([0-9]+)_document_([0-9]+)_(.+)\\.png$');
    const pageImages = [];
    images.forEach(img => {
      const basename = path.basename(img);
      const m = basename.match(pattern);
      if (!m) return;
      const viewport = config.viewports[m[2]];
      pageImages.push({
        viewport: config.viewports[m[2]],
        image: basename
      })
    })
    return pageImages;
  }
  catch (err) {
    console.error(err.message);
    return [];
  }
}

function formatDate(obj) {
  const date = obj.getFullYear() + '-' + pad(obj.getMonth()) + '-' + pad(obj.getDate());
  const time = pad(obj.getHours()) + ':' + pad(obj.getMinutes()) + ':' + pad(obj.getSeconds());
  return date + ' ' + time;
}

function getVisualTestsConfig() {
  const configPath = path.join(__dirname, '..', 'backstop.config.js');
  if (!fs.existsSync(configPath)) {
    throw new Error("Visual test configuration not found");
  }
  return require(configPath);
}

function getVisualTestPages(collection) {
  const config = getVisualTestsConfig();
  const images = getVisualTestReferenceImageFiles();
  const pages = collection.map(f => {
    return {
      url: f.data.page.url.endsWith('.html') ? f.data.page.url.substr(1) : f.data.page.url.substr(1) + 'index.html',
      path: f.filePathStem.substr(1),
      title: f.data.title,
      date: formatDate(f.data.page.date),
      group: f.data.group ? f.data.group : 'Other',
      tests: findVisualTestsForPage(f, config, images)
    };
  });
  pages.sort((a, b) => {
    return a.path > b.path ? 1 : -1;
  })
  return pages;
}

function getVisualTestReferenceImageFiles() {
  return glob.sync(path.join(__dirname, '_reference', '*.png'));
}

function groupFiles(files) {
  const groups = [];
  files.forEach(file => {
    let group = groups.find(g => g.name === file.group);
    if (!group) {
      group = { name: file.group, files: []};
      groups.push(group);
    }
    group.files.push(file);
  });
  groups.sort((a, b) => {
    if (a.name === 'Other') return 1;
    if (b.name === 'Other') return -1;
    return a.name > b.name ? 1 : -1;
  });
  return groups;
}

module.exports = {
  eleventyComputed: {
    groups: data => {
      const pages = getVisualTestPages(data.collections.all.filter(f => f.url !== data.page.url));
      return groupFiles(pages);
    }
  }
}