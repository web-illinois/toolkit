# `il-layout`

The layout system allows components to be combined and arranged to create complete webpages or sections of webpages. Unlike most other components, it does not represent a piece of content, but is instead a container for other components.

## Creating a page layout

Use the `type="page"` attribute to create a complete page layout:

```html
<il-layout type="page">
  <!--- ...page content... --> 
</il-layout>
```

A basic HTML page using the layout component would look something like:

```html
<!DOCTYPE html>
<html class="il-toolkit">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ...additional head content... -->
  </head>
  <body>
    <il-layout type="page">
      <!-- ...page content... -->
    </il-layout>
  </body>
</html>
```
Of note:

1. The `html` element has the `il-toolkit` class. This allows the toolkit to adjust the styling of the parts of the page outside of the `il-layout` element, such as the spacing within the `body` element.
2. The `meta name="viewport"` element is necessary to the layout to respond appropriately on different screen sizes.
3. The `il-layout` element is the first element with the `body` element. Nesting the page layout within other elements can cause the layout to behave unpredictably.

## Adding a header and footer

The page layout has predefined content slots intended for the `il-header` and `il-footer` components. Using these content slots ensures that the header and footer are properly identified as ARIA landmarks where appropriate, and that they are positioned correctly with regard to other elements on the page.

```html
<il-layout type="page">
  <il-header slot="header">
    <!-- ...header content... -->
  </il-header>

  <!-- ...page content... -->

  <il-footer slot="footer">
    <!-- ...footer content... -->
  </il-footer>
</il-layout>
```
## Grouping page content into sections

Nesting layout components can be used to group page content into distinct sections.

```html
<il-layout type="page">
  <il-layout>
    <p>Section one</p>
  </il-layout>
  <il-layout>
    <p>Section two</p>
  </il-layout>
</il-layout>
```
On a page with multiple sections, it can be helpful to distinguish the individual sections by using different colors schemes for each section. By using the theme classes, the color scheme of the section and its content can be altered from the layout.

```html
<il-layout type="page">
  <il-layout class="il-white">
    <p>Section one uses the white color scheme</p>
  </il-layout>
  <il-layout class="il-blue">
    <p>Section two uses the blue color scheme</p>
  </il-layout>
</il-layout>
```
## Adding a background

To add a custom background to a page section, use the `background` content slot.

```html
<il-layout>
  <img src="background.jpg" alt="" slot="background">
</il-layout>
```
This content slot is most commonly used for images, but it is possible to create complex backgrounds (see Advanced usage, below).

If your background image doesn't provide the adequate color contrast for your content, the content can be wrapped in an additional themed layout component:

```html
<il-layout>
  <img src="background-with-poor-contrast.jpg" alt="" slot="background">
  <il-layout class="il-blue">
    <p>This content will have a blue background</p>
  </il-layout>
</il-layout>
```

[Screenshot of a page section with a very busy background. Floating in the center of the photo is a blue box with the section content]

## Arranging content in columns

A column layout spreads content across multiple, newspaper-style columns. This is not ideal for long sections of content, but it can improve the readability of long lists of short items.

```html
<il-layout columns="3">
  <ul>
    <li>This list</li>
    <li>of items</li>
    <li>will be</li>
    <li>distributed</li>
    <li>evenly</li>
    <li>across the</li>
    <li>three columns</li>
    <li>of this layout</li>
  </ul>
</il-layout>
```
If there is not enough available horizontal space for the requested number of columns, the number will be reduced to accommodate the available space. On very small screens, the content will be presented in a single column.

## Arranging content in grids

Grids are also made up of columns, but grid content is also arranged in rows, with one item placed in each column of a row.

```html
<il-layout grid columns="3">
  <p>Row 1, column 1</p>
  <p>Row 1, column 2</p>
  <p>Row 1, column 3</p>
  <p>Row 2, column 1</p>
  <p>Row 2, column 2</p>
  <p>Row 2, column 3</p>
  <p>Row 3, column 1</p>
  <p>Row 3, column 2</p>
  <p>Row 3, column 3</p>
</il-layout>
```
As with column layouts, grids will adjust the number of columns based on available horizontal space.