# Brand toolkit for the web

The toolkit is a collection of resources for building websites that meet the campus's high standards for accessibility and fully implement the campus branding guidelines. For website owners, the toolkit makes it easy to:

* Add the official [header](./src/components/il-header/README.md) and [footer](./src/components/il-footer/README.md) to any webpage.
* Use [the campus color palette](./src/css/colors/README.md) and ensure that color combinations meet contrast requirements.
* Use [the official campus typefaces](./src/css/fonts/README.md) without hosting the font files locally.
* Add elements like accordions, carousels, and many more from [a growing collection of custom components](./src/components/README.md).

## Using the toolkit on your website

The simplest way to include the toolkit on a page is to add the following lines inside the `<head>` element:

````html
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/3/toolkit.css">
<script src="https://cdn.toolkit.illinois.edu/3/toolkit.mjs" type="module">
````

This includes the required files from the toolkit content delivery network (CDN) which is optimized for speed and minimal file size. This will also use the latest stable 3.x release of the toolkit, meaning the site will stay up to date with all future releases automatically.

### Using a specific version of the toolkit

Some sites may find it necessary to include a specific version of the toolkit. This can be done by changing the URLs used in the `<link>` and `<script>` elements.

Within each URL is a version key, here represented by `KEY`:

`https://cdn.toolkit.illinois.edu/KEY/toolkit.css`

The version key is required in all URLs, and allows for varying levels of specificity when choosing a toolkit version.

#### Major version

`https://cdn.toolkit.illinois.edu/3/toolkit.css`

This URL will always point to the latest stable release of the 3.x version of the toolkit. This includes:

* All future minor releases (3.1, 3.2, etc.)
* All future patch releases (3.0.1, 3.0.2, etc.)

This **does not** include

* Future pre-release versions (3.1-beta, etc.)
* Future major release versions (4.0, 5.0, etc.)

#### Minor version

`https://cdn.toolkit.illinois.edu/3.0/toolkit.css`

This URL will always point to the latest stable release of the 3.0.x version of the toolkit. This includes:

* All future patch releases (3.0.1, 3.0.2, etc.)

This **does not** include

* Future pre-release versions (3.0.1-beta, etc.)
* Future minor releases (3.1, 3.2, etc.)
* Future major release versions (4.0, 5.0, etc.)

#### Patch version

`https://cdn.toolkit.illinois.edu/3.0.0/toolkit.css`

This URL points to 3.0.0 version of the toolkit. Patch-level URLs are never updated and always point to the same files.

## Learn more

* [Colors](./src/css/colors/README.md)
* [Fonts](./src/css/fonts/README.md)
* [The component library](./src/components/README.md)
* [Icons](./src/css/icons/README.md)


## Authors

The toolkit is made possible by:

* [The Office of Strategic Communications & Marketing](https://brand.illinois.edu)
* [The Web Implementation Guidelines Group](https://webtheme.illinois.edu/about/)

### Developers

* [Matt Sharkey](mailto:msharkey@illinois.edu)
* [Bryan Jonker](mailto:jonker@illinois.edu)