const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-montserrat-alt',
      'url': util.url('/tests/stylesheets/fonts/montserrat-alt.html'),
      'viewports': [viewports.desktop]
    }
  ];
}