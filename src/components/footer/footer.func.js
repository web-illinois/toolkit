const util = require('../../tests.util');

async function getDefaultSlot(tag) {
  return page.evaluate(tag => {
    return document.querySelector(tag).shadowRoot.querySelector("slot:not([name])");
  }, tag);
}

async function getSlot(tag, name) {
  return page.evaluate((tag, name) => {
    return document.querySelector(tag).shadowRoot.querySelector(`slot[name='${name}']`);
  }, tag, name);
}

beforeEach(async () => {
  await page.goto(util.testUrl(__filename))
});

test("the component has correct color contrast", async () => {
  await expect('il-footer').toHaveColorContrast();
});

test('has default slot', async () => {
  const slot = getDefaultSlot('il-footer');
  expect(slot).not.toBeNull();
});

test('has contact slot', async () => {
  const slot = await getSlot('il-footer', 'contact');
  expect(slot).not.toBeNull();
});

test('has social slot', async () => {
  const slot = await getSlot('il-footer', 'social');
  expect(slot).not.toBeNull();
});

test('has parent slot', async () => {
  const slot = await getSlot('il-footer', 'parent');
  expect(slot).not.toBeNull();
});

test('has links slot', async () => {
  const slot = await getSlot('il-footer', 'links');
  expect(slot).not.toBeNull();
});
