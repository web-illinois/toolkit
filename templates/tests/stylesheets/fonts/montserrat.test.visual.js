const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-montserrat',
      'url': util.url('/tests/stylesheets/fonts/montserrat.html'),
      'viewports': [viewports.desktop]
    }
  ];
}