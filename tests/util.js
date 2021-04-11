
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

module.exports = {
  elementHasFocus,
  moveFocus,
  url
}