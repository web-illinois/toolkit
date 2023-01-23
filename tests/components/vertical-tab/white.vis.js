const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'vertical-tab-white',
      caption: 'Vertical Tab white',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}