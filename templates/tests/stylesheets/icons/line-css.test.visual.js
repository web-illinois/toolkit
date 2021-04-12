const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-line-css',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/line-css.html'),
      'viewports': [viewports.desktop]
    }
  ];
}