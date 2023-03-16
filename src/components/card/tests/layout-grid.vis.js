const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "cards-layout-grid",
      viewports: [viewports.desktop, viewports.iphone]
    }
  ]
}