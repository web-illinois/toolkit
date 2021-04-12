const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-serif',
      'url': util.url('/tests/stylesheets/fonts/source-serif.html'),
      'viewports': [viewports.desktop]
    }
  ];
}