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

The build process will place a copy of the assets in the /toolkit/x.x/ folder, and code samples and screen shots in /toolkit/2.0/examples/index.html. This happens when the code is released to develop (/toolkit/dev) and any release branch (so branch release/2.0 goes to /toolkit/2.0).


## CI / CD Process

There are four automated processes that kick off continuous integration:
* *deploy_major*: When you push to main, it will automatically push to the major version (at this writing, 2). This version number is hardcoded in the yml file. 
* *deploy_minor*: When you push to release/*, it will automatically push to the minor and patch version (so if you push to release/4.5.3, it will push to /4.5 and /4.5.3)
* *deploy_develop*: When you push to any branch that is not main or release/*, then it will copy your branch to the development server using your branch name. If you push to the develop branch, it will push to /latest). 
* *delete_develop*: When you delete any branch, it will delete the associated code on the development server. 

There are three manual process you can run (by choosing the workflow and choosing the "Run workflow" option)
* *deploy_develop_workflow*: You can choose any branch and any version number, and it will deploy that code to the version on the development server. 
* *deploy_production_workflow*: You can choose any branch and any version number, and it will deploy that code to the version on the production server. 
* *delete_develop_workflow*: You can choose any branch. This will wipe the development server and replace the /latest with the branch you chose. 

Before you deploy to production:
1. Make sure the package.json has been updated.
2. Make sure visual tests have been updated.
3. Make sure all unit tests have been run and have passed.
4. Make sure all accessibility tests have been run and have passed.

To deploy to production:
1. Merge to main. This will deploy the major branch. 
2. Merge to release/vx.y.z. This will deploy to the minor and patch level branch. 
3. Create a release and tag for your version. Include release notes.

After you have deployed to production:
1. Merge the main branch back to develop.
2. Make a note in the wiki saying the new release is done. Copy release notes. 
3. Post a note in the WIGG General Teams channel. 