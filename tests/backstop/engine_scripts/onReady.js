module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  if (scenario.onReady) {
    await scenario.onReady(page, scenario);
  }
};
