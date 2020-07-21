# Web components



This library provides styles and web components for creating branded UIUC websites.

## Build

To build a copy of the library from a local repository, first make sure you have all project dependencies installed by running `npm install`.

Create the build with this script: 

````
npm run build
````

The built files can now be found in the `dist` directory of the repository root.

## Testing

The library uses two libraries for automated tests: [Testcafe](https://devexpress.github.io/testcafe/) for end-to-end interaction tests, and [Backstop](https://github.com/garris/BackstopJS) for visual regression testing.

Testing requires all development dependencies to be installed.

Before running the tests, start the local development server:

````
npm start
````

You can now run the tests in another terminal window or tab with this script: 

````
npm test
````

Once the tests are complete, press <kbd>Ctrl-C</kbd> to stop the test server. 

## Development

The library contains a collection of usage examples that are used during development. To start the development server, use this script:

````
npm start
````

You can now visit http://127.0.0.1:8080/ to see the development site.
