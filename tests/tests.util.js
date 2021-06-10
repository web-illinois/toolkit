const path = require('path');

function elementHasFocus(page, sel) {
  return page.evaluate((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [sel]);
}

function host() {
  return process.env.BACKSTOP_ENV === 'docker' ? 'host.docker.internal' : 'localhost';
}

function moveFocus(page, sel) {
  return page.evaluate((sel) => document.querySelector(sel).focus(), [sel]);
}

function url(path) {
  return 'http://' + host() + ':8080' + path;
}

function testUrl(testPath) {
  const relative = path.relative(__dirname, testPath);
  let urlPath = '/' + relative.replace(/\.(func|vis|visual)\.js$/, '') + '/';
  if (urlPath.endsWith('/index/')) {
    urlPath = urlPath.substring(0, urlPath.length - 6);
  }
  return url(urlPath);
}

module.exports = {
  elementHasFocus,
  moveFocus,
  url,
  testUrl
}