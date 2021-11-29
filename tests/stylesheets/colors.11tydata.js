const colors = require('../../api/colors.json');

module.exports = {
  colors: Object.keys(colors).map(key => {
    return {
      var: '--' + key,
      hex: colors[key]
    }
  })
};