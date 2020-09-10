
describe('Montserrat', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080/fonts/montserrat.html');
    });
    it('should have the correct font-family', async () => {
        const family = await page.evaluate(() => {
            const sample = document.getElementById('il-montserrat-normal-400');
            return window.getComputedStyle(sample).fontFamily;
        });
        await expect(family).toMatch("Montserrat, sans-serif");
    });
    it('should load the font file', async () => {
        const fontLoaded = await page.evaluate(() => document.fonts.check("1em Montserrat"));
        await expect(fontLoaded).toBeTruthy();
    });
});
