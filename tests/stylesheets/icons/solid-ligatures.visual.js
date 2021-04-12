const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-solid-ligatures',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/solid-ligatures.html'),
      'viewports': [viewports.desktop]
    }
  ];
}