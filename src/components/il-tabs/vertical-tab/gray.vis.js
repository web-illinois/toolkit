const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'vertical-tab-gray',
      caption: 'Vertical Tab gray',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}