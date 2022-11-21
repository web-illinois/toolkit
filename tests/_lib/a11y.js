function evaluateColorContrast(sel) {
  return page.evaluate((sel) => {
    return axe.run(sel, {runOnly: 'color-contrast', selectors: true});
  }, [sel]);
}

function notToContainViolations(results) {
  if (!results.violations.length) {
    return {
      message: () => `expected element not to contain accessiblity violations`,
      pass: true
    }
  }
  else {
    return {
      message: () => results.violations[0].nodes[0].failureSummary,
      pass: false
    }
  }
}

async function toHaveColorContrast(sel) {
  const results = await evaluateColorContrast(sel);
  return notToContainViolations(results);
}

const toolkitAccessibility = {
  testColorContrast: function(sel) {
    return evaluateColorContrast(sel);
  }
}

expect.extend({toHaveColorContrast});

module.exports = toolkitAccessibility;