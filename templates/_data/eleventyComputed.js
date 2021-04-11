const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '..', '..', 'var', 'tests.functional.results.json');

function getTestFile(template) {
  const p = template.template.parsed;
  return path.resolve(p.root, p.dir, p.name + '.test.js');
}

module.exports = {
    tests: data => {
      if (data.tests) {
        const templates = data.collections.test.filter(test => {
          return data.tests.includes(test.template.fileSlug.inputPath);
        })
        const results = fs.existsSync(resultsPath) ? require(resultsPath).testResults : [];
        return templates.map(template => {
          return {
            page: template,
            results: results.find(r => r.name === getTestFile(template))
          }
        })
      }
      return [];
    }
}