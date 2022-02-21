const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "cards-nopicture",
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ]
}