const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'colors',
      'caption': 'Color palette',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}