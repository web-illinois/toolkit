const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'section-nav',
      'caption': 'Default state, formatted',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}