const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "page-title-themes",
      viewports: [viewports.desktop]
    }
  ]
}