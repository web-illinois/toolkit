# Page

This component represents a complete web page. It includes content slots for the standard header and footer, and makes it possible to create unique layouts by grouping and featuring components in multiple ways.

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

The simplest version of a page contains a header, footer, and some HTML page content:

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  
  <h1>Basic page</h1>
  <p>This page contains a title and one sentence.</p>
  
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

## Dividing pages into sections

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  
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
  
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

For more information, see the <a href="../il-section/README.md">full documentation for the section component</a>.

## Creating featured sections


```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  
  <il-section>
    <h1>Page with multiple sections</h1>
    <p>This is divided into multiple sections. It has a featured section in the middle.</p>
  </il-section>
  
  <il-featured-section>
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

For more information, see the <a href="../il-featured-section/README.md">full documentation for the featured section component</a>.


## Base styles

The page contains basic styling for the following HTML elements:

### Paragraphs

#### Inline styles

* abbr
* b/strong
* cite
* code
* dfn
* em/i
* kbd
* mark
* s
* samp
* sub
* sup
* var

#### Lede paragraphs

### Headings (`h1`-`h6`)

### Links

### Lists

* unordered lists
* ordered lists
* definition lists

### Figures and captions

### Tables

* caption
* col
* colgroup
* table
* tbody
* td
* tfoot

### Additional elements

* blockquote
* hr
* pre

And the following inline HTML elements:


No default styling is provided for form elements.