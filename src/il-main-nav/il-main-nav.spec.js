import {test, expect} from '@playwright/test';

const disclosureNavigationMenuPattern = 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/';
const disclosureNavigationMenuWithTopLevelLinksPattern = 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/';

test('clicking the toggle of a collapsed section expands the section', async ({page}) => {
  await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
  await page.getByText('About', { exact: true }).click();
  await expect(page.getByText('Departments, units, and programs')).toBeVisible();
})
test('clicking the toggle of an expanded section collapses the section', async ({page}) => {
  await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
  await page.getByText('About', { exact: true }).click();
  await expect(page.getByText('Departments, units, and programs')).not.toBeVisible();
})
test.describe('pressing escape when any section is expanded', () => {
  test('collapses that section', async ({page}) => {
    await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
    await page.keyboard.press('Escape');
    await expect(page.getByText('Departments, units, and programs')).not.toBeVisible();
  })
  test("moves focus to that section's toggle", async ({page}) => {
    await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
    await page.keyboard.press('Escape');
    await expect(page.getByText('Departments, units, and programs')).not.toBeVisible();
  })
})
test.describe('when a section toggle has focus', () => {
  test.describe('and its section is collapsed', () => {
    test('pressing enter expands the section', async ({page}) => {
    })
    test('pressing space expands the section', async ({page}) => {
    })
  })
  test.describe('and its section is expanded', () => {
    test('pressing enter collapses the section', async ({page}) => {
    })
    test('pressing space collapses the section', async ({page}) => {
    })
  })
})
test.describe('when the toggle of a top-level section has focus', () => {
  test.describe('and the section has a link', () => {
    test('pressing shift+tab moves focus to the section link', async ({page}) => {
    })
  })
  test.describe('and the section does not have a link', () => {
    test.describe('and it is the first section in the navigation', () => {
      test('pressing shift+tab moves focus outside the navigation', async ({page}) => {
      })
    })
    test.describe('and it is not the first section in the navigation', () => {
      test.describe('and the previous adjacent section is collapsed', () => {
        test('pressing shift+tab moves focus to the toggle of the previous section', async ({page}) => {
        })
      })
      test.describe('and the previous adjacent section is expanded', () => {
        test('pressing shift+tab moves focus to the last item within the section', async ({page}) => {
        })
      })
    })
  })
  test.describe('and the section is collapsed', () => {
    test.describe('and it is the last section in the navigation', () => {
      test('pressing tab moves focus outside the navigation', async ({page}) => {
      })
    })
    test.describe('and it is not the last section in the navigation', () => {
      test.describe('and the next adjacent section has a link', () => {
        test('pressing tab moves focus to that link', async ({page}) => {
        })
      })
      test.describe('and the next adjacent section does not have a link', () => {
        test('pressing tab moves focus to the toggle of the adjacent section', async ({page}) => {
        })
      })
    })
  })
  test.describe('and the section is expanded', () => {
    test('pressing tab moves focus to the first item within the section', async ({page}) => {
    })
  })
})
