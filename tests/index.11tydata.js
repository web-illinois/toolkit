const fs = require('fs');
const glob = require('fast-glob');
const path = require('path');
const { URL } = require('url');

function pad(val) {
  return val < 10 ? '0' + val : val;
}

function findVisualTestsForPage(page, config, images) {
  try {
    const pageTests = [];
    config.scenarios.forEach(c => {
      const url = new URL(c.url);
      if (url.pathname !== page.data.page.url) return;
      const test = {
        caption: c.caption ? c.caption : c.label,
        label: c.label,
        images: []
      };
      const pattern = makeReferenceImagePattern(config.id, c.label);
      images.forEach(img => {
        const basename = path.basename(img);
        const m = basename.match(pattern);
        if (!m) return;
        test.images.push({
          matches: m,
          viewport: config.viewports.find(v => v.label === m[3]),
          image: basename
        })
      });
      pageTests.push(test);
    });
    console.debug(pageTests);
    return pageTests;
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
      url: makePageUrl(f),
      path: f.filePathStem.substr(1),
      title: makePageTitle(f),
      date: formatDate(f.data.page.date),
      group: f.data.group ? f.data.group : 'Other',
      tests: findVisualTestsForPage(f, config, images)
    };
  });
  pages.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
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

function makePageTitle(page) {
  return page.data.title ? page.data.title : path.basename(page.data.page.url);
}

function makePageUrl(page) {
  let url = page.data.page.url.substr(1)
  if (!url.endsWith('.html')) {
    url += 'index.html';
  }
  return url;
}

function makeReferenceImagePattern(id, label) {
  return new RegExp('^' + id + '_' + label + '_([0-9]+)_document_([0-9]+)_(.+)\\.png$');
}

module.exports = {
  eleventyComputed: {
    groups: data => {
      const pages = getVisualTestPages(data.collections.all.filter(f => f.url !== data.page.url));
      return groupFiles(pages);
    }
  }
}