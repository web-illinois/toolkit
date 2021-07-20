const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'unit-wordmarks',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}