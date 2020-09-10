
describe('Source Sans (fixed weights)', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080/fonts/source-sans-fixed.html');
    });
    it('should have the correct font-family', async () => {
        const family = await page.evaluate(() => {
            const sample = document.getElementById('il-source-sans-fixed-normal-400');
            return window.getComputedStyle(sample).fontFamily;
        });
        await expect(family).toMatch('"Source Sans", sans-serif');
    });
    it('should load the fixed font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em 'Source Sans'"));
        await expect(fontLoaded).toBeTruthy();
    });
    it('should not load the variable font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em 'Source Sans Variable'"));
        await expect(fontLoaded).toBeFalsy();
    });
});
