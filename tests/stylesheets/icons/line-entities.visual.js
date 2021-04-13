const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-line-entities',
      'caption': 'Icon set',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}