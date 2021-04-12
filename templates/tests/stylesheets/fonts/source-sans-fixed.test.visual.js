const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-sans-fixed',
      'url': util.url('/tests/stylesheets/fonts/source-sans-fixed.html'),
      'viewports': [viewports.desktop]
    }
  ];
}