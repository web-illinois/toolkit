const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-serif',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}