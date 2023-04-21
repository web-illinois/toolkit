const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "gallery-default-large",
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ]
}