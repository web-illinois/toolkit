# Columns

This is a layout component that spreads content across multiple, newspaper-style columns. This is not ideal for long sections of content, but it can improve the readability of long lists of short items.

## Arranging content in columns

The `count` attribute determines the number of columns in the layout.

```html
<il-columns count="3">
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
</il-columns>
```

The content placed inside `il-columns` will be split across the total number of columns. Elements will be split in order to balance the amount of content in each column.

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * This list          * distributed         * three columns
 * of items           * evenly              * of this layout
 * will be            * across the
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
If there is not enough available horizontal space for the requested number of columns, the number will be reduced to accommodate the available space. On very small screens, the content will be presented in a single column.

## Using columns with navigation menus

Columns are a good choice for arranging small collections of navigation menus, as might appear in the footer. When multiple `il-nav` components are placed in an `il-column` component, the toolkit ensures that:

* No column splits occur between the title of a menu and its contents
* No column splits occur within a menu

[screenshot of the footer of a website with 4 navigation menus arranged in 2 columns]