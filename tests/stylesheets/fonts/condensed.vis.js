const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-condensed',
      'url': util.url('/stylesheets/fonts/condensed/'),
      'viewports': [viewports.desktop]
    }
  ];
}