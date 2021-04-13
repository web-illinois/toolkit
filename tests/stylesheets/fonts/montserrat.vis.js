const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-montserrat',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}