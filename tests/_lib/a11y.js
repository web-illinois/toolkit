const colors = require('../../api/colors.json');

function debug(data) {
  console.debug(JSON.stringify(data, null, 2));
}

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
            const data = node.any[0].data;
            const actualRatio = data.contrastRatio;
            const requiredRatio = data.expectedContrastRatio;
            if (data.messageKey === 'fgOnShadowColor') {
              message += `\n  * Insufficient contrast between foreground and shadow`
              message += `\n    Node: ${node.target[0]}`;
              message += `\n    Contrast: ${actualRatio} (should be ${requiredRatio})`;
              message += `\n    Foreground color: ${displayColor(data.fgColor)}`;
              message += `\n    Shadow color: ${displayColor(data.shadowColor)}`;
            }
            else {
              message += `\n  * Insufficient contrast between foreground and background`
              message += `\n    Node: ${node.target[0]}`;
              message += `\n    Contrast: ${actualRatio} (should be ${requiredRatio})`;
              message += `\n    Foreground color: ${displayColor(node.any[0].data.fgColor)}`;
              message += `\n    Background color: ${displayColor(node.any[0].data.bgColor)}`;
            }
            message += `\n    Font size: ${data.fontSize}`;
            message += `\n    Font weight: ${data.fontWeight}`;
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