import {test, expect} from '@playwright/test';

const disclosureNavigationMenuPattern = 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/';
const disclosureNavigationMenuWithTopLevelLinksPattern = 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/';

// Data attributes

test('navigation sections have a data-connected attribute after load', async ({page}) => {
  await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
  const firstSectionIsConnected = await page.evaluate(() => {
    return document.querySelector('il-nav-section').hasAttribute('data-connected');
  })
  await expect(firstSectionIsConnected).toBeTruthy();
})
test('setting "data-expanded" to "true" expands a section on load', async ({page}) => {
  await page.goto('il-main-nav/samples/with-expanded-section.html');
  await expect(page.getByText('Apply to LAS')).toBeVisible();
})
test('when multiple sections are set to be expanded, only the first section should be expanded', async ({page}) => {
  await page.goto('il-main-nav/samples/with-multiple-expanded-sections.html');
  await expect(page.getByText('Departments, units, and programs')).toBeVisible();
  await expect(page.getByText('Apply to LAS')).not.toBeVisible();
  await expect(page.getByText('Academic policies and standing')).not.toBeVisible();
  await expect(page.getByText('Access and Achievement Program')).not.toBeVisible();
})

// Pointer interaction

test('clicking the toggle of a collapsed section expands the section', async ({page}) => {
  await page.goto('il-main-nav/samples/two-levels-without-section-links.html');
  await page.getByText('About', { exact: true }).click();
  await expect(page.getByText('Departments, units, and programs')).toBeVisible();
})
test('clicking the toggle of an expanded section collapses the section', async ({page}) => {
  await page.goto('il-main-nav/samples/with-expanded-section.html');
  await page.getByText('Admissions', { exact: true }).click();
  await expect(page.getByText('Apply to LAS')).not.toBeVisible();
})

// Keyboard interaction

test.describe('pressing escape when any section is expanded', () => {
  test('collapses that section', async ({page}) => {
    await page.goto('il-main-nav/samples/with-expanded-section.html');
    await page.keyboard.press('Escape');
    await expect(page.getByText('Departments, units, and programs')).not.toBeVisible();
  })
  test("moves focus to that section's toggle", async ({page}) => {
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
