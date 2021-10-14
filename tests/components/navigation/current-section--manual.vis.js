const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation-current-section-manual',
      'viewports': [viewports.desktop]
    }
  ];
}