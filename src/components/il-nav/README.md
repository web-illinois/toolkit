# `il-nav`

The navigation component is used for lists of navigation links, often with multiple nested levels. It has several presentation formats, and is capable of changing its appearance based on its location on the page.

```html
<il-nav>
  <ul>
    <li><a href="/news.html">News</a></li>
    <li><a href="/calendar.html">Calendar</a></li>
    <li><a href="/directory.html">Directory</a></li>
  </ul>
</il-nav>
```

Add navigation submenus (where supported)

```html
<il-nav>
  <ul>
    <li>
      <il-nav-section>
        <a href="/programs/" slot="label">Programs</a>
        <ul>
          <li><a href="/programs/undergrad.html">Undergraduate Programs</a></li>
          <li><a href="/programs/grad.html">Graduate Programs</a></li>
          <li><a href="/programs/doc.html">Doctoral Programs</a></li>
        </ul>
      </il-nav-section>
    </li>
  </ul>
</il-nav>
```

For more information see [il-nav-section](../il-nav-section/README.md).

## Navigation types

The `type` attribute allows you to specify the visual presentation of the navigation. There are 7 possible navigation types:

### `accordion`

The `accordion` navigation type presents all the navigation elements in an expandable column. Navigation items with expandible content can be toggled open or closed. If a current navigation item is specified, the sections containing the current item will be expanded by default.

```html
<il-nav type="accordion"></il-nav>
```

### `bar`

The `bar` navigation type presents the first level of navigation elements in a row. Second level menus are displayed as dropdowns, and any additional menus are displayed as flyouts. Toggling the visibility of the menus requires a mouse/keyboard click. (Hover/focus events will not toggle the menus.)

```html
<il-nav type="bar"></il-nav>
```

### `breadcrumbs`

The `breadcrumb` navigation type presents the 

```html
<il-nav type="breadcrumbs">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/programs/">Programs</a></li>
    <li><a current href="/programs/grad">Graduate programs</a></li>
    <li><a current href="/programs/grad/sim">Simulation Theory</a></li>
  </ol>
</il-nav>
```

### `dropdown`

In this mode, the navigation is initially collapsed to a button which expands when clicked.

```html
<il-nav type="dropdown"></il-nav>
```

### `eyebrow`

This mode is a single-level navigation designed to be used in the `links` slot of the `il-header` component, appearing in the top right corner of desktop screens. 

```html
<il-nav type="eyebrow"></il-nav>
```

### `pagination`

A single-level navigation used to navigate within paged content. It provides styling for special buttons like "Next" and "Previous" and for non-link content like ellipses and the current page number.

```html
<il-nav type="pagination">
  <ul>
    <li><a href="/posts?p=1">First</a></li>
    <li><a href="/posts?p=2">Previous</a></li>
    <li><a href="/posts?p=1">1</a></li>
    <li><a href="/posts?p=2">2</a></li>
    <li class="il-current">3</li>
    <li><a href="/posts?p=4">4</a></li>
    <li><a href="/posts?p=5" class="il-ellipsis-after">5</a></li>
    <li><a href="/posts?p=100">100</a></li>
    <li><a href="/posts?p=4">Next</a></li>
    <li><a href="/posts?p=5">Last</a></li>
  </ul>
</il-nav>
```

These CSS classes are meaningful within a pagination navigation:

#### `il-ellipsis-before`/`il-ellipsis-after`

These classes can be used to place an ellipsis (&hellip;) before/after a navigation element. This should be used to indicate a gap in the sequence of pages.

### `sidebar`

```html
<il-nav type="sidebar"></il-nav>
```
## Contextual navigation

If no type is provided, the navigation component will try to choose a type based on its context. It does this based on two factors:

1. the size and shape of the screen
2. the position of the component in the DOM, relative to other components

| Screen  | DOM                          | Type      |
|---------|------------------------------|-----------|
| desktop | il-header, navigation slot   | bar       |
| desktop | il-header, links slot        | eyebrow   |
| mobile  | il-header, navigation slot   | accordion |
| mobile  | il-header, links slot        | accordion |
| desktop | il-layout, sidebar slot      | sidebar   |
| mobile  | il-layout, sidebar slot      | dropdown  |

