const ToolkitTester = require('../_lib/tester');

module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  const tester = new ToolkitTester(page);

  if (scenario.onReady) {
    await scenario.onReady(page, scenario, tester);
  }
};
