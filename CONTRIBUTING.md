## Creating a GitHub account

If you do not already have a github account, visit https://github.com. Enter a username, your email address, and a password in the sign up form, then click Sign Up.

## Setting up your account for use with the web-illinois organization

First, be sure to review the End User Service Agreement from AITS. It covers what you should and should not use GitHub Enterprise for: https://answers.uillinois.edu/systemoffices/102098

To join the organization, you need to sign in with your Illinois credentials using the link https://github.com/orgs/web-illinois/sso. Anyone with a valid NetID/password can join our organization.

As a member of the web-illinois organization, you will be able to see the repositories within the organization. You can download the code for your own use, create issues, and comment on existing issues and pull requests.

## Code Standards


### HTML

Use [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) for HTML tag names and attributes.

Do not combine words.

#### Correct

`<il-custom-element custom-attribute="value">`

#### Incorrect

`<il-customelement customattribute="value">` _Do not combine words_

`<il-customElement customAttibute="value">` _Use kebab case (not camel case)_

### CSS

Prefer use of CSS variables instead of custom classes. 


### JavaScript

Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript);

### General writing

Use sentence case for page titles and headings (not title case).

## Git Branching and Deployment

Once develop has acquired enough features for a release (or a predetermined release date is approaching), you fork a release branch off of develop. Creating this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the release branch gets merged into main and tagged with a version number. In addition, it should be merged back into develop, which may have progressed since the release was initiated.

Using a dedicated branch to prepare releases makes it possible for one team to polish the current release while another team continues working on features for the next release. It also creates well-defined phases of development (e.g., it's easy to say, “This week we're preparing for version 4.0,” and to actually see it in the structure of the repository).

Once the release is ready to ship, it will get merged it into main and develop, then the release branch will be deleted. It’s important to merge back into develop because critical updates may have been added to the release branch and they need to be accessible to new features. If your organization stresses code review, this would be an ideal place for a pull request.

### Branches

* **main**: this is the latest code. If there is a patch, it will most likely be a branch that comes from main. 
* **develop**: this is the code that is going to be the next release. 
* **release/xxxxxxxx**: this is the code that is going to be released, most likely coming from develop or main. It will be merged to main. 
* **components/xxxxxxx**: this is work on a specific component. This may or may not be in the next release. 

### Development

When you are done working on code that is planned to go to the next release, merge that code to the develop branch. This will update the /dev/ code on the AWS server. You will need a code review or administrator access to bypass code review. 

**Do not deploy code to the develop branch that is not going to the next release.** 

### Building the Release Branch for Beta Testing

When you are ready for beta testing, first make sure all the code has been pushed to the develop branch. Deploy to the release branch. Mark the code in the release branch with a "vx.y.z-beta0" release with the same tag name. Use the format from [the Semantic Versioning specification](https://semver.org/). This will deploy the code matching the release on the AWS server. Do not reuse release names or tag names. Make a note in the wiki saying the new pre-release is done.

### Deployment Checklist

#### Before deployment

* Make sure the package.json has been updated
* Make sure all tests have been run and have passed


#### After deployment

* Merge the main branch back to develop.
* Delete the release branch (if one exists).
* Push announcements to Teams, listserv, etc. 
