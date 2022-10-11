const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-sans',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}