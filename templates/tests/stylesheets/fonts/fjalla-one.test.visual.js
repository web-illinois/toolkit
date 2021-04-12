const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-fjalla-one',
      'url': util.url('/tests/stylesheets/fonts/fjalla-one.html'),
      'viewports': [viewports.desktop]
    }
  ];
}