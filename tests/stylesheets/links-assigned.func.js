const util = require('../tests.util');

describe("loading the page and checking links", () => {
  beforeEach(async () => {
    await page.goto(util.testUrl(__filename), {waitUntil: 'domcontentloaded'});
  });

  test("the elements are accessible", async () => {
    await expect('body').toHaveColorContrast();
  });

  test('check the link with blank information', async () => {
    const linkHandler = await page.$('#link-blank');
    const html = await page.evaluate(linkHandler => linkHandler.innerHTML, linkHandler);
    const href = await page.evaluate(linkHandler => linkHandler.getAttribute('href'), linkHandler);
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(html).toBe('Accessibility');
    expect(href).toBe('https://illinois.edu/resources/website/accessibility.html');
    expect(display).toBe('');
  });
  test('check the link with information', async () => {
    const linkHandler = await page.$('#link-override');
    const html = await page.evaluate(linkHandler => linkHandler.innerHTML, linkHandler);
    const href = await page.evaluate(linkHandler => linkHandler.getAttribute('href'), linkHandler);
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(html).toBe('Accessibility');
    expect(href).toBe('https://illinois.edu/resources/website/accessibility.html');
    expect(display).toBe('');
  });
  test('check the control link', async () => {
    const linkHandler = await page.$('#link-control');
    const html = await page.evaluate(linkHandler => linkHandler.innerHTML, linkHandler);
    const href = await page.evaluate(linkHandler => linkHandler.getAttribute('href'), linkHandler);
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(html).toBe('Example.org');
    expect(href).toBe('https://example.org/');
    expect(display).toBe('');
  });
  test('check the link with class information', async () => {
    const linkHandler = await page.$('#link-class');
    const html = await page.evaluate(linkHandler => linkHandler.innerHTML, linkHandler);
    const href = await page.evaluate(linkHandler => linkHandler.getAttribute('href'), linkHandler);
    const classInfo = await page.evaluate(linkHandler => linkHandler.getAttribute('class'), linkHandler);
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(html).toBe('Accessibility');
    expect(href).toBe('https://illinois.edu/resources/website/accessibility.html');
    expect(classInfo).toBe('il-button');
    expect(display).toBe('');
  });
  test('check the link with missing data', async () => {
    const linkHandler = await page.$('#link-missing');
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(display).toBe('none');
  });
  test('check the link with missing data override', async () => {
    const linkHandler = await page.$('#link-missing-with-data');
    const display = await page.evaluate(linkHandler => linkHandler.style.display, linkHandler);
    expect(display).toBe('none');
  });
});
