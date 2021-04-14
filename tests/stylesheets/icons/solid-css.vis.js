const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-solid-css',
      'caption': 'Icon set',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}