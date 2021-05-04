const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'buttons',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}