const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-sans-fixed',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}