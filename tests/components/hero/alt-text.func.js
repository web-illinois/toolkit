const util = require('../../tests.util');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename), {waitUntil: 'domcontentloaded'});
});

test('alt text is empty by default', async () => {
  const hero = await page.$('#hero-with-no-alt-text');
  const heroImageAlt = await page.evaluate(hero => hero.shadowRoot.querySelector('.background-image img').getAttribute('alt'), hero);
  expect(heroImageAlt).toBe("");
});

test('custom alt text is added to hero image', async () => {
  const hero = await page.$('#hero-with-alt-text');
  const heroAltAttr = await page.evaluate(hero => hero.getAttribute('alt'), hero);
  const heroImageAlt = await page.evaluate(hero => hero.shadowRoot.querySelector('.background-image img').getAttribute('alt'), hero);
  expect(heroAltAttr).toBe("Alt text for the background image");
  expect(heroImageAlt).toBe(heroAltAttr);
});
