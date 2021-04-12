const fs = require('fs');
const path = require('path');
const url = require('url');


function getFunctionalTests(template) {
  const resultsPath = path.join(__dirname, '..', '..', 'var', 'tests.functional.results.json');
  if (!fs.existsSync(resultsPath)) {
    throw new Error("Functional test results not found");
  }
  const results = require(resultsPath);
  const testFile = getTestFile(template);
  console.debug(testFile);
  return results.testResults.find(r => r.name === testFile);
}

function getTestFile(template) {
  const p = template.template.parsed;
  return path.resolve(p.root, p.dir, p.name + '.test.func.js');
}

function getVisualTests(url) {
  try {
    const config = getVisualTestsConfig();
    const results = getVisualTestsResults().tests.filter(res => {
      return urlPath(res.pair.url) === url;
    });
    const tests = [];
    results.forEach(result => {
      let test = tests.find(t => t.label === result.pair.label);
      if (!test) {
        test = {
          label: result.pair.label,
          scenario: config.scenarios.find(s => s.label === result.pair.label),
          results: []
        };
        tests.push(test);
      }
      result.viewport = config.viewports.find(v => v.label === result.pair.viewportLabel);
      test.results.push(result);
    });
    tests.forEach(test => {
      test.passed = !test.results.find(r => r.status === 'fail');
    })
    return tests;
  }
  catch (err) {
    console.error(err.name + ': ' + err.message);
    return [];
  }
}

function getVisualTestsConfig() {
  const configPath = path.join(__dirname, '..', '..', 'tests', 'backstop', 'backstop.js');
  if (!fs.existsSync(configPath)) {
    throw new Error("Visual test configuration not found");
  }
  return require(configPath);
}

function getVisualTestsResults() {
  const reportPath = path.join(__dirname, '..', '..', 'var', 'backstop', 'json', 'jsonReport.json');
  if (!fs.existsSync(reportPath)) {
    throw new Error("Visual test results not found");
  }
  return require(reportPath);
}

function urlPath(testUrlStr) {
  const testUrl = new URL(testUrlStr);
  return testUrl.pathname;
}

module.exports = {
    tests: data => {
      if (data.tests) {
        const templates = data.collections.test.filter(test => {
          return data.tests.includes(test.template.fileSlug.inputPath);
        })
        return templates.map(t => {
          const test = {
            page: t,
            functional: getFunctionalTests(t),
            visual: getVisualTests(t.data.page.url)
          };
          test.passed = true;
          if (test.functional && test.functional.numFailedTests > 0) {
            test.passed = false;
          }
          if (test.visual.find(t => !t.passed)) {
            test.passed = false;
          }
          return test;
        })
      }
      return undefined;
    }
}