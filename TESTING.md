
# Testing

We use [Playwright](https://playwright.dev/) as our testing framework

## Running tests

You can run existing tests from the command line.

### Run all tests

````shell
npx playwright test
````

or...

````shell
npm test
````

### Running selected tests

To run tests for one component:

````shell
npx playwright test src/components/accordion/
````

## Writing tests

Tests for a component are located in the same subdirectory as the component source code. A typical component test suite is composed of at least two files:

* An HTML page with the component markup to be tested (`.html`)
* A JavaScript file containing the tests to be conducted on the page (`.spec.js`)

The accordion component, for example, contains these files:

* `src/components/accordion/il-accordion.component.js` (the source code for the component)
* `src/component/accordion/accordion.html` (test page)
* `src/component/accordion/accordion.spec.js` (tests)

Components with more extensive testing may require multiple pairs of HTML and JavaScript files, each tailored to a specific testing scenario. (See below.)

### The HTML test page

The test page uses only the necessary elements to run the tests. A test page for the accordion component would begin with only the resources required to add an accordion to the page:

````html
<!DOCTYPE html>
<script src="./il-accordion.component.js" type="module"></script>

<il-accordion></il-accordion>
````

Within the testing environment, we are able to include components in isolation, as we're doing above by including only the source code for the accordion component. The testing framework will load any dependencies automatically.

### The tests file

The tests file contains all the tests to be run, but also sets up the browser environment for each test. This file begins by including the necessary files, setting the viewport size, and pointing the browser to the HTML test page:

````js
import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1200, height: 800 }});

test.beforeEach(async({page}) => {
    await page.goto('components/accordion/accordion.html');
})
````

### Isolating components

We can isolate specific parts of the test page using `data-testid` attributes and the `page.getByTestId()` method.

````html
<il-accordion data-testid="component-to-test"></il-accordion>
````

````js
page.getByTestId('component-to-test')
````

## Accessibility testing

This checks the color contrast of the test page:

````js
const AxeBuilder = require('@axe-core/playwright').default;

test('accessibility', async({page}) => {
    const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
    expect(results.violations).toEqual([]);
})
````

## Taking screenshots

````js
test('screenshot', async ({ page }) => {
    await expect(page.getByTestId('component-to-test')).toHaveScreenshot();
})
````

## Using multiple test scenarios

**NOTE: You might not need multiple files**

If you're simply testing your component with multiple combinations of attribute values, it's easier to use [parameterized testing](https://playwright.dev/docs/test-parameterize). This is also ideal when using CSS classes for theming, sizing, etc.

**However** there will be tests that require significantly different markup than others. We may want to test how multiple components behave with one another, or how a new component behaves next to an existing component. In these cases, we will create a new HTML page for these tests.

The names of these additional files should convey how they are different from our primary test file. We might have `layout-grid` and `layout-column` if we are testing how our component can be arranged in different layouts, or we might have something like `with-heading` if we're testing how our component behaves alongside another element.