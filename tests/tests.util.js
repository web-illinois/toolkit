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
  const pathWithoutExtension = relative.replace(/\.(func|vis|visual)\.js$/, '');
  const segments = pathWithoutExtension.split('/');
  if (segments.at(-1) === 'index') {
    segments.pop();
  }
  else if (segments.at(-1) === segments.at(-2)) {
    segments.pop();
  }
  return url('/' + segments.join('/') + '/');
}

module.exports = {
  elementHasFocus,
  moveFocus,
  url,
  testUrl
}