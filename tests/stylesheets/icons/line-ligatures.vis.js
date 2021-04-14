const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-line-ligatures',
      'caption': 'Icon set',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}