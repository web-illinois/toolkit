const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'accordion',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop, viewports.iphone]
    }
  ];
}