import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = ['gray', 'blue', 'white', 'blue-gradient'];
const sizes = ['small', 'medium', 'large', 'xlarge'];

test.use({ viewport: { width: 1280, height: 1024 } });

themes.forEach(theme => {
    test(`${theme} with header`, async ({page}) => {
        await page.goto(`components/statistic/tests/statistic-with-header.html?theme=${theme}`);
        await expect(page.getByTestId('statistic')).toHaveScreenshot();
    })
})

sizes.forEach(size => {
    test(`${size} with header`, async ({page}) => {
        await page.goto(`components/statistic/tests/statistic-with-header.html?size=${size}`);
        await expect(page.getByTestId('statistic')).toHaveScreenshot();
    })
})

// Run color contrast tests on the smallest size

themes.forEach(theme => {
    test(`${theme} with header accessibility`, async ({page}) => {
        await page.goto(`components/statistic/tests/statistic-with-header.html?theme=${theme}&size=small`);
        const results = await new AxeBuilder({ page }).include('il-statistic').analyze();
        expect(results.violations).toEqual([]);
    })
})

