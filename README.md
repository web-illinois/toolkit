# Brand toolkit for the web

The goal of this toolkit is to make it easier for website creators to implement the campus brand standards, including those for color, typography, and iconography. For more information about campus brand standards, visit [the Strategic Marketing and Branding website](https://marketing.illinois.edu).

**You don't need to download or checkout this repository to use the toolkit.** You can use the toolkit on any website by adding these lines to the page header:

```html
<link rel="stylesheet" href="https://cdn.brand.illinois.edu/web-toolkit/1.1/toolkit.css">
<script src="https://cdn.brand.illinois.edu/web-toolkit/1.1/toolkit.js"></script>
``` 

Learm more about installing and using the toolkit in [the full documentation](https://toolkit.marketing.web.illinois.edu/).

## Build

To build a local copy of the toolkit, first make sure you have all project dependencies installed by running `npm install`.

Build the toolkit with this script: 

````
npm run build
````

The built files can now be found in the `dist` directory of the repository root.

## Documentation

To build a local copy of the toolkit documentation, use this script:

````
npm run build-html
````

To view the local documentation, start the development server:

````
npm start
````

The documentation should now be available at http://127.0.0.1:8080/.

## Testing

The development server contains example pages that are used by the toolkit's automated tests. To run the tests, you must first build the local documentation and start the development server.

### Backstop

[Backstop](https://github.com/garris/BackstopJS) is used for visual regression testing. Screenshots of test pages are compared against reference images to detect changes in appearance. To run the Backstop tests, use this script:

````
npm run test-backstop
````

### Jest

[Jest](https://jestjs.io/) is used for DOM and behavior testing. The tests use [Puppeteer](https://github.com/puppeteer/puppeteer/) to interact with test pages in a simulated browser environment. To run the Jest tests, use this script:

````
npm run test-jest
```` 

To run both sets of tests in sequence, use this script:

````
npm test
````

## Development

While the development server is running, all changes to files in the `src` directory will be reflected in the files served to the development site. During active development of the site HTML, the following script will regenerate the site upon changes to files in the `templates` directory.

-----

**Office of Strategic Marketing & Branding**  
University of Illinois Urbana-Champaign  
https://marketing.illinois.edu  
https://codepen.io/il-marketing  
https://github.com/il-marketing
