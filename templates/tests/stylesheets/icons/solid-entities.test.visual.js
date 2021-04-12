const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'icons-solid-entities',
      'caption': 'Icon set',
      'url': util.url('/tests/stylesheets/icons/solid-entities.html'),
      'viewports': [viewports.desktop]
    }
  ];
}