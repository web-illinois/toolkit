const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-serif-fixed',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}