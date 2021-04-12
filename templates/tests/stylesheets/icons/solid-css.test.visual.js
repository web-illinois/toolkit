const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-solid-css',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/solid-css.html'),
      'viewports': [viewports.desktop]
    }
  ];
}