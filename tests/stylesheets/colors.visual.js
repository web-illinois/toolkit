const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'tests/stylesheets/colors',
      'caption': 'Color palette',
      'url': util.url('/tests/stylesheets/colors.html'),
      'viewports': [viewports.desktop]
    }
  ];
}