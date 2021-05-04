# Web toolkit

The goal of this toolkit is to make it easier for website creators to implement the campus brand standards, including those for color, typography, and iconography. For more information about campus brand standards, visit [the Strategic Marketing and Branding website](https://marketing.illinois.edu).

**You don't need to download or checkout this repository to use the toolkit.** You can use the toolkit on any website by adding these lines to the page header:

```html
<link rel="stylesheet" href="https://cdn.brand.illinois.edu/web-toolkit/2.0/toolkit.css">
<script src="https://cdn.brand.illinois.edu/web-toolkit/2.0/toolkit.js"></script>
``` 

## Build

To build a local copy of the toolkit, first make sure you have all project dependencies installed by running `npm install`.

Build the toolkit with this script: 

````
npm run build
````

The built files can now be found in the `dist` directory of the repository root.

## Testing

The development server contains example pages that are used by the toolkit's automated tests. To run the tests, you must first build the test pages:

````
npm run build-html
````

Then start the development server:

````
npm start
````

The test site should now be available at http://127.0.0.1:8080/.

### Backstop

[Backstop](https://github.com/garris/BackstopJS) is used for visual regression testing. Screenshots of test pages are compared against reference images to detect changes in appearance. To run the Backstop tests, use this script:

````
npm run test-backstop
````

*Note that the test site needs to be running on your local machine for this to work (see Testing)*

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

While the development server is running, all changes to files in the `src` directory will be reflected in the files served to the development site. If you're making changes to the test pages, you can also run `npm run watch-html` to rebuild them when changes are detected.


## Build process

The build process will place a copy of the assets in the /toolkit/x.x/ folder, and code samples and screen shots in /samples/x.x/. To advance the version number, it needs to be changed in two places:

* The .github/workflows/deploy.yml file -- the environment variable at the top of the file 
* The .eleventy-test-site.js file -- the pathPrefix variable at the bottom of the file
