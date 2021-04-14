const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-montserrat',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}