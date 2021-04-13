const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-solid-entities',
      'caption': 'Icon set',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}