const fs = require('fs');
const colors = require('./tests/_data/colors');
const icons = require('./tests/_data/icons');

function writeJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

const newColors = [];
colors.forEach(c => {
  newColors.push({ var: '--' + c.var, hex: c.hex });
  c.variants.forEach(v => {
    newColors.push({ var: '--' + v.var, hex: v.hex });
  })
})
writeJson('tests/stylesheets/colors.11tydata.json', newColors);

const newFonts = [];
icons.forEach(i => {
  newFonts.push({
    entity: i.entity,
    ligatures: i.ligatures,
    vars: i.ligatures.map(l => "--il-icon-" + l)
  })
})
writeJson('tests/stylesheets/icons/icons.11tydata.json', newFonts);

