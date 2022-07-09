const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "cards-theme-orange",
      viewports: [viewports.desktop, viewports.iphone]
    }
  ]
}