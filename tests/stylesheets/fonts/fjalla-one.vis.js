const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-fjalla-one',
      'url': util.url('/stylesheets/fonts/fjalla-one/'),
      'viewports': [viewports.desktop]
    }
  ];
}