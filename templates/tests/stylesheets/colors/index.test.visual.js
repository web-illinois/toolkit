const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'tests/stylesheets/colors',
      'url': util.url('/tests/stylesheets/colors/'),
      'viewports': [viewports.desktop]
    }
  ];
}