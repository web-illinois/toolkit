const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-sans',
      'url': util.url('/tests/stylesheets/fonts/source-sans.html'),
      'viewports': [viewports.desktop]
    }
  ];
}