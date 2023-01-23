const path = require('path');

function elementHasFocus(page, sel) {
  return page.evaluate((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [sel]);
}

function gotoTestPage() {
  return page.goto(testUrl(jasmine.testPath));
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

function lastItem(arr) {
  return arr.at ? arr.at(-1) : arr[arr.length - 1];
}

function secondToLastItem(arr) {
  return arr.at ? arr.at(-2) : arr[arr.length - 2];
}

function testUrl(testPath) {
  const relative = path.relative(__dirname, testPath);
  const pathWithoutExtension = relative.replace(/\.(func|vis|visual)\.js$/, '');
  const segments = pathWithoutExtension.split('/');
  if (lastItem(segments) === 'index') {
    segments.pop();
  }
  else if (lastItem(segments) === secondToLastItem(segments)) {
    segments.pop();
  }
  return url('/' + segments.join('/') + '/');
}

module.exports = {
  elementHasFocus,
  gotoTestPage,
  moveFocus,
  url,
  testUrl
}