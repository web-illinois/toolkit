# `il-columns`

This is a layout component that spreads content across multiple, newspaper-style columns. This is not ideal for long sections of content, but it can improve the readability of long lists of short items.

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
If there is not enough available horizontal space for the requested number of columns, the number will be reduced to accommodate the available space. On very small screens, the content will be presented in a single column.

