# `il-nav`

This component is used to create different types of navigation elements. These are lists of links, sometimes with nested navigation sections which may collapse or expand on user interaction.

The component provides several presentation styles for navigation elements, depending on the nature of the navigation and its context on the page.

A list of 3 navigation links might be:

```html
<il-nav>
  <ul>
    <li><a href="/news.html">News</a></li>
    <li><a href="/calendar.html">Calendar</a></li>
    <li><a href="/directory.html">Directory</a></li>
  </ul>
</il-nav>
```

## Multiple navigation levels

To add additional levels of navigation, use the `il-nav-section` element:

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
For more information, see the [`il-nav-section`](../il-nav-section/README.md) component.

## Navigation types

The `type` attribute allows you to specify the presentation of the navigation. This includes the visual appearance of the navigation, the alignment of the items, and the number and nature of user interaction with the navigation.

Some navigation types do not support multiple levels, or will not display navigation items nested beyond a certain level. No navigation type supports more than 6 levels of nesting.

There are 7 possible navigation types:

### `accordion`

This navigation type presents all the navigation elements in an expandable column. Navigation items with expandable content can be toggled open or closed. If a current navigation item is specified, the sections containing the current item will be expanded by default.

```html
<il-nav type="accordion"></il-nav>
```

### `bar`

This navigation type presents the first level of navigation elements in a row. Second level menus are displayed as dropdowns, and any additional menus are displayed as flyouts. Toggling the visibility of the menus requires a mouse/keyboard click. (Hover/focus events will not toggle the menus.)

```html
<il-nav type="bar"></il-nav>
```

### `breadcrumbs`

This navigation type presents links in a [breadcrumb trail](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) used to show the current page's place in a hierarchical site structure.

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

This is a compact mode in which the navigation is collapsed to a dropdown. Clicking the dropdown reveals the navigation items.

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

This navigation type is intended to be used in the sidebar of page. It presents the navigation in a single column and uses indentation to show nesting levels.

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

