const util = require('../../tests.util');
const nav = require('./nav.util');

beforeEach(async () => {
    await page.goto(util.testUrl(__filename));
});

describe("hovering over a top-level link", () => {
    beforeEach(async () => {
        await page.hover('#link-1');
    });

    test('opens the submenu', async () => {
        const isExpanded = await nav.sectionisExpanded(page, '#section-1');
        await expect(isExpanded).toBeTruthy();
    });
});

describe("when a top-level link has focus and its menu is collapsed", () => {
    beforeEach(async () => {
        await util.moveFocus(page, '#link-2');
        await page.keyboard.press('Escape');
    });

    describe("pressing tab", () => {
        beforeEach(async () => {
            await page.keyboard.press('Tab');
        });

        test("moves focus to the first submenu link", async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-3');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing enter", () => {
        beforeEach(async () => {
            await page.keyboard.press('Enter');
            await page.waitForSelector('#success');
        });

        test("navigates to the link target", async () => {
            const html = await page.$eval('#success', el => el.innerHTML);
            expect(html).toBe('Success');
        });
    });

    describe("pressing the space bar", () => {
        beforeEach(async () => {
            await page.keyboard.press('Space');
            await page.waitForSelector('#success');
        });

        test("navigates to the link target", async () => {
            const html = await page.$eval('#success', el => el.innerHTML);
            expect(html).toBe('Success');
        });
    });

    describe("pressing the right arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowRight');
        });

        test("moves focus to the next top-level link", async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-3');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the left arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowLeft');
        });

        test("moves focus to the previous top-level link", async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-1');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the down arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowDown');
        });

        test('opens the submenu', async () => {
            const isVisible = await nav.sectionisExpanded(page, '#section-2');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the first link in the submenu', async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-2A');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the up arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowUp');
        });

        test('opens the submenu', async () => {
            const isVisible = await nav.sectionisExpanded(page, '#section-2');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the last link in the submenu', async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-2C');
            await expect(hasFocus).toBeTruthy();
        });
    });
});

describe("when the first top-level link has focus", () => {
    beforeEach(async () => {
        await util.moveFocus(page, '#link-1');
    });

    describe("pressing the left arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowLeft');
        });

        test("moves focus to the last top-level link", async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-3');
            await expect(hasFocus).toBeTruthy();
        });
    });
});

describe("when the last top-level link has focus", () => {
    beforeEach(async () => {
        await util.moveFocus(page, '#link-3');
    });

    describe("pressing the right arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowRight');
        });

        test("moves focus to the first top-level link", async () => {
            const hasFocus = await util.elementHasFocus(page, '#link-1');
            await expect(hasFocus).toBeTruthy();
        });
    });
});
