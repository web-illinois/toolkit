const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-serif-fixed',
      'url': util.url('/tests/stylesheets/fonts/source-serif-fixed.html'),
      'viewports': [viewports.desktop]
    }
  ];
}