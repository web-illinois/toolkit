const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'vertical-tab-blue',
      caption: 'Vertical Tab blue',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}