# Web toolkit

The goal of this toolkit is to make it easier for website creators to implement the campus brand standards, including those for color, typography, and iconography. For more information about campus brand standards, visit [the Strategic Marketing and Branding website](https://marketing.illinois.edu).

**You don't need to download or checkout this repository to use the toolkit.** See the [Getting Started guide](https://github.com/web-illinois/toolkit/wiki/Getting-started) for instructions on adding the toolkit to your website.

This toolkit includes styles, themes, and web components to use on any campus website. To use the toolkit, please see the [web-illinois/toolkit wiki](https://github.com/web-illinois/toolkit/wiki), which includes full documentation on the styles, themes and web components, as well as release notes.

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

The build process will place a copy of the assets in the /toolkit/x.x/ folder, and code samples and screen shots in /toolkit/x.x/examples/index.html. This runs for production (main branch and tags), and development (all other branches). This will also remove develop branches when the branch is removed from Github. 

[![deploy_develop](https://github.com/web-illinois/toolkit/actions/workflows/deploy_develop.yml/badge.svg)](https://github.com/web-illinois/toolkit/actions/workflows/deploy_develop.yml) [![deploy_minor](https://github.com/web-illinois/toolkit/actions/workflows/deploy_minor.yml/badge.svg)](https://github.com/web-illinois/toolkit/actions/workflows/deploy_minor.yml) [![deploy_major](https://github.com/web-illinois/toolkit/actions/workflows/deploy_major.yml/badge.svg?branch=main)](https://github.com/web-illinois/toolkit/actions/workflows/deploy_major.yml) [![delete_develop](https://github.com/web-illinois/toolkit/actions/workflows/delete_develop.yml/badge.svg)](https://github.com/web-illinois/toolkit/actions/workflows/delete_develop.yml)



