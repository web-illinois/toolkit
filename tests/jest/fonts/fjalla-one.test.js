
describe('Fjalla One', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080/fonts/fjalla-one.html');
    });
    it('should have the correct font-family', async () => {
        const family = await page.evaluate(() => {
            const sample = document.getElementById('il-fjalla-one-normal-400');
            return window.getComputedStyle(sample).fontFamily;
        });
        await expect(family).toMatch('"Fjalla One", sans-serif');
    });
    it('should load the font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em 'Fjalla One'"));
        await expect(fontLoaded).toBeTruthy();
    });
});
