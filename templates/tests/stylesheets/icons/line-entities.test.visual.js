const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-line-entities',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/line-entities.html'),
      'viewports': [viewports.desktop]
    }
  ];
}