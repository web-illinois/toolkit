const path = require('path');

function elementHasFocus(page, sel) {
  return page.evaluate((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [sel]);
}

function moveFocus(page, sel) {
  return page.evaluate((sel) => document.querySelector(sel).focus(), [sel]);
}

function url(path) {
  return 'http://localhost:8080' + path;
}

function testUrl(testPath) {
  const relative = path.relative(__dirname, testPath);
  return url('/' + relative.replace(/\.(func|vis|visual)\.js$/, '') + '/');
}

module.exports = {
  elementHasFocus,
  moveFocus,
  url,
  testUrl
}