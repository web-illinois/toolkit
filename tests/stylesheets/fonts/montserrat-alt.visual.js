const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-montserrat-alt',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}