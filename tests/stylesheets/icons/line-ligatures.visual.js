const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-line-ligatures',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/line-ligatures.html'),
      'viewports': [viewports.desktop]
    }
  ];
}