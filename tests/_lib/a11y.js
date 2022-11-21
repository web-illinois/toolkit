const colors = require('../../api/colors.json');

function displayColor(hex) {
  let color = hex;
  const colorName = Object.keys(colors).find(n => colors[n] === hex);
  if (colorName) {
    color += ` (${colorName})`;
  }
  return color;
}

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
      message: () => {
        let message = 'The following contrast violations were found:';
        results.violations.forEach(violation => {
          violation.nodes.forEach(node => {
            const actualRatio = node.any[0].data.contrastRatio;
            const requiredRatio = node.any[0].data.expectedContrastRatio;
            message += `\n  * Contrast ratio is ${actualRatio} (should be ${requiredRatio})`;
            message += `\n    Node: ${node.target[0]}`;
            message += `\n    Foreground color: ${displayColor(node.any[0].data.fgColor)}`;
            message += `\n    Background color: ${displayColor(node.any[0].data.bgColor)}`;
            message += `\n    Font size: ${node.any[0].data.fontSize}`;
            message += `\n    Font weight: ${node.any[0].data.fontWeight}`;
          })
        })
        return message;
      },
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