const nav = require('../../../_includes/navigation');

beforeEach(async () => {
    await page.goto(localhost + '/tests/components/il-nav/default-expanded.html');
});

describe("when a submenu is open", () => {

    test("the submenu is visible", async () => {
        const isVisible = await nav.sectionisExpanded(page, '#section-2');
        await expect(isVisible).toBeTruthy();
    });

    describe("clicking outside the navigation", () => {
        beforeEach(async () => {
            await page.click('#before-nav');
        });

        test.todo('closes the submenu');
    });

    describe("hovering over another top-level link", () => {
        beforeEach(async () => {
            await page.hover('#link-3');
        });

        test('closes the open submenu', async () => {
            const isVisible = await nav.sectionisExpanded(page, '#section-2');
            await expect(isVisible).toBeFalsy();
        });

        test('opens the new submenu', async () => {
            const isVisible = await nav.sectionisExpanded(page, '#section-3');
            await expect(isVisible).toBeTruthy();
        });
    });

    describe("when a top-level link has focus", () => {
        beforeEach(async () => {
            await nav.moveFocus(page, '#link-2');
        });

        describe("pressing tab", () => {
            beforeEach(async () => {
                await page.keyboard.press('Tab');
            });

            test("moves focus to the first submenu link", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2A');
                await expect(hasFocus).toBeTruthy();
            });
        });
    });

    describe("when a submenu link has focus", () => {
        beforeEach(async () => {
            await nav.moveFocus(page, '#link-2B');
        });

        describe("pressing the escape key", () => {
            beforeEach(async () => {
                await page.keyboard.press('Escape');
            });

            test("closes the submenu", async () => {
                const isVisible = await nav.sectionisExpanded(page, '#section-2');
                await expect(isVisible).toBeFalsy();
            });

            test("moves focus to the top-level link", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2');
                await expect(hasFocus).toBeTruthy();
            });
        })

        describe("pressing tab", () => {
            beforeEach(async () => {
                await page.keyboard.press('Tab');
            });

            test("moves focus to the next submenu link", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2C');
                await expect(hasFocus).toBeTruthy();
            });
        });

        describe("pressing the down arrow", () => {
            beforeEach(async () => {
                await page.keyboard.press('ArrowDown');
            });

            test("moves focus to the next submenu link", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2C');
                await expect(hasFocus).toBeTruthy();
            });
        });

        describe("pressing the up arrow", () => {
            beforeEach(async () => {
                await page.keyboard.press('ArrowUp');
            });

            test("moves focus to the previous submenu link", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2A');
                await expect(hasFocus).toBeTruthy();
            });
        });
    });

    describe("when the last submenu link has focus", () => {
        beforeEach(async () => {
            await nav.moveFocus(page, '#link-2C');
        });

        describe("pressing the down arrow", () => {
            beforeEach(async () => {
                await page.keyboard.press('ArrowDown');
            });

            test("moves focus to the first link in the submenu", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2A');
                await expect(hasFocus).toBeTruthy();
            });
        });
    });

    describe("when the first submenu link has focus", () => {
        beforeEach(async () => {
            await nav.moveFocus(page, '#link-2A');
        });

        describe("pressing the up arrow", () => {
            beforeEach(async () => {
                await page.keyboard.press('ArrowUp');
            });

            test("moves focus to the last link in the submenu", async () => {
                const hasFocus = await nav.elementHasFocus(page, '#link-2C');
                await expect(hasFocus).toBeTruthy();
            });
        });
    });
});