const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-open-sans-condensed',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}