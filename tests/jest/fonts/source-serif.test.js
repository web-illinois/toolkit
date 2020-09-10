
describe('Source Serif', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080/fonts/source-serif.html');
    });
    it('should have the correct font-family', async () => {
        const family = await page.evaluate(() => {
            const sample = document.getElementById('il-source-serif-normal-400');
            return window.getComputedStyle(sample).fontFamily;
        });
        await expect(family).toMatch('"Source Serif Variable", "Source Serif", serif');
    });
    it('should load the variable font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em 'Source Serif Variable'"));
        await expect(fontLoaded).toBeTruthy();
    });
    it('should not load the fixed font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em 'Source Serif'"));
        await expect(fontLoaded).toBeFalsy();
    });
});
