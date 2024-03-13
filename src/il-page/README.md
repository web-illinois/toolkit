# Pages

Some toolkit components can be used in isolation, but the toolkit is most useful for creating complete pages. The page component incorporates the standard campus [header](../il-header/README.md) and [footer](../il-footer/README.md) and provides default styling for most HTML elements.

## Requirements

Proper page display requires that the following elements be present in the `head` of each document:

```html
<html lang="en" class="il-toolkit">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.toolkit.illinois.edu/toolkit.css">
<script type="module" src="https://cdn.toolkit.illinois.edu/toolkit.js"></script>
```
These elements have the following effects on the respective page:

* The `il-toolkit` class removes any spacing from the `html` and `body` elements, preventing any margins around the page. (Any valid language code is acceptable here.)
* The `meta="viewport"` maintains the correct scale of the page, allowing the component to handle the responsive layout of page elements.
* the `link` and `script` tags include the toolkit source code, which is required to use toolkit components. 

## A basic page

The simplest version of a page contains a header, main contnet, and a footer:

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  <main slot="main">
    <h1>Basic page</h1>
    <p>This page contains a title and one sentence.</p>
  </main>
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

For more information about customizing the header and footer of the page, see the full documentation for the [header](../il-header/README.md) and [footer](../il-footer/README.md) components.

## Dividing pages into sections

The readability of long and complicated pages can be improved by dividing a page into sections.

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  <main slot="main">
    <il-section>
      <h1>Page with multiple sections</h1>
      <p>This is divided into multiple sections.</p>
    </il-section>
    <il-section>
      <h2>The second section</h2>
      <p>The second section follows the first section.</p>
    </il-section>
    <il-section>
      <h2>The final section</h2>
      <p>The third section is the final section.</p>
    </il-section>
  </main>
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

For more information, see the full documentation for the [section component](../il-section/README.md).

## Creating featured sections

Special content can be highlighted by placing it in a featured section. Featured sections utilize more vivid color schemes and provide more possibilities for layout.

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  
  <il-section>
    <h1>Page with multiple sections</h1>
    <p>This is divided into multiple sections. It has a featured section in the middle.</p>
  </il-section>
  
  <il-featured-section class="il-blue">
    <h2>The featured section</h2>
    <p>This section is featured.</p>
  </il-featured-section>
  
  <il-section>
    <h2>The final section</h2>
    <p>The third section is the final section.</p>
  </il-section>
  
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

For more information, see the full documentation for the [featured section component](../il-featured-section/README.md).
