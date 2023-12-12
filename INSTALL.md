# Using the toolkit on your website

The simplest way to include the toolkit on a page is to add the following lines inside the `<head>` element:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/3/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/3/toolkit.mjs" type="module"></script>
````

This includes the required files from the toolkit content delivery network (CDN) which is optimized for speed and minimal file size. This will also use the latest stable 3.x release of the toolkit, meaning the site will stay up to date with all future releases automatically.

## Using a specific version of the toolkit

Some sites may find it necessary to include a specific version of the toolkit. This can be done by changing the URLs used in the `<link>` and `<script>` elements.

Within each URL is a version key, here represented by `KEY`:

`https://cdn.toolkit.illinois.edu/KEY/toolkit.css`

The version key is required in all URLs, and allows for varying levels of specificity when choosing a toolkit version.

### Major version

`https://cdn.toolkit.illinois.edu/3/toolkit.css`

This URL will always point to the latest stable release of the 3.x version of the toolkit. This includes:

* All future minor releases (3.1, 3.2, etc.)
* All future patch releases (3.0.1, 3.0.2, etc.)

This **does not** include

* Future pre-release versions (3.1-beta, etc.)
* Future major release versions (4.0, 5.0, etc.)

### Minor version

`https://cdn.toolkit.illinois.edu/3.0/toolkit.css`

This URL will always point to the latest stable release of the 3.0.x version of the toolkit. This includes:

* All future patch releases (3.0.1, 3.0.2, etc.)

This **does not** include

* Future pre-release versions (3.0.1-beta, etc.)
* Future minor releases (3.1, 3.2, etc.)
* Future major release versions (4.0, 5.0, etc.)

### Patch version

`https://cdn.toolkit.illinois.edu/3.0.0/toolkit.css`

This URL points to 3.0.0 version of the toolkit. Patch-level URLs are never updated and always point to the same files.
