const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'tables',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop, viewports.iphone]
    }
  ];
}