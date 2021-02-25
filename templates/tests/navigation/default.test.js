const {dropdownIsVisible, elementHasFocus, moveFocus} = require('../../_includes/navigation');

beforeEach(async () => {
    await page.goto('http://localhost:8080/tests/navigation/default.html');
});

describe("when a submenu toggle is clicked", () => {
    beforeEach(async () => {
        await page.click('#button-2');
    });

    test('opens the submenu', async () => {
        const isVisible = await dropdownIsVisible(page, '#list-2');
        await expect(isVisible).toBeTruthy();
    });
});

describe("when a top-level link has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#link-2');
    });

    describe("pressing the right arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowRight');
        });

        test("moves focus to the next top-level link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-3');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the left arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowLeft');
        });

        test("moves focus to the previous top-level link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-1');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the down arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowDown');
        });

        test('opens the submenu', async () => {
            const isVisible = await dropdownIsVisible(page, '#list-2');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the first link in the submenu', async () => {
            const hasFocus = await elementHasFocus(page, '#link-2A');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the up arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowUp');
        });

        test('opens the submenu', async () => {
            const isVisible = await dropdownIsVisible(page, '#list-2');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the last link in the submenu', async () => {
            const hasFocus = await elementHasFocus(page, '#link-2C');
            await expect(hasFocus).toBeTruthy();
        });
    });
});

describe("when a submenu toggle has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#button-1');
    });

    describe("pressing tab", () => {
        beforeEach(async () => {
            await page.keyboard.press('Tab');
        });

        test("moves focus to the next top-level link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-2');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing enter", () => {
        beforeEach(async () => {
            await page.keyboard.press('Enter');
        });

        test("opens the submenu", async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeTruthy();
        });
    });

    describe("pressing the space bar", () => {
        beforeEach(async () => {
            await page.keyboard.press('Space');
        });

        test("opens the submenu", async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeTruthy();
        });
    });
});

describe("when the first top-level link has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#link-1');
    });

    describe("pressing the left arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowLeft');
        });

        test("moves focus to the last top-level link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-3');
            await expect(hasFocus).toBeTruthy();
        });
    });
});

describe("when the last top-level link has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#link-3');
    });

    describe("pressing the right arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowRight');
        });

        test("moves focus to the first top-level link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-1');
            await expect(hasFocus).toBeTruthy();
        });
    });
});
