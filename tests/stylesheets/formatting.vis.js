const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'formatting',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop, viewports.iphone]
    }
  ];
}