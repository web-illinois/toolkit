# Main navigation

The main navigation component is used within the <a href="../il-header/README.md">standard header</a> and offers a reliable collection of links for navigating the site. These links can be arranged in nested lists to create expandable navigation sections.

## Structure

The navigation is composed of <dfn>items</dfn>. There are two primary types of items:

* <dfn>Links</dfn> take visitors directly to web pages.
* <dfn>Sections</dfn> are groups of links which can be expanded and collapsed. Sections have labels, and in some sections the label is also a link.

Navigation items are arranged in an unordered list. The simplest navigation is a single list of hyperlinks:

```html
<il-main-nav>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/academics">Academics</a></li>
    <li><a href="/research">Research</a></li>
    <li><a href="/alumni">Alumni</a></li>
  </ul>
</il-main-nav>
```

If a link in the navigation represents the current page, is it identified with the `aria-current="page"` attribute:

```html
<il-main-nav>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/academics">Academics</a></li>
    <li><a href="/research" aria-current="page">Research</a></li>
    <li><a href="/alumni">Alumni</a></li>
  </ul>
</il-main-nav>
```
If the current page should change, the `aria-current` attribute must be removed from its current location and added to the link representing the new current page. In most cases this will happen automatically as a result of navigating to a new web page, but in instances where the location is changed _in situ_, the change will need to be made manually.

## Accessibility features

### Structure and labels

Navigation content is contained within a `<nav>` element and is identified with `aria-label="Main"`.

Correct usage of the component requires that navigation items be arranged in an unordered list. Nesting of lists is employed to convey hierarchy and to group related items.

#### References

* [Page Regions: Navigation](https://www.w3.org/WAI/tutorials/page-structure/regions/#navigation)
* [Menu Structure: Unordered list](https://www.w3.org/WAI/tutorials/menus/structure/#unordered-list)

### Location

The component employs the following techniques to indicate the position of the current page within the navigation:

#### ARIA

Correct usage of the component requires that thhe `aria-current="page"` be added to the link corresponding to the current page.

#### Current top-level section

When presented as a navigation bar, a top-level section may employ a different background color to indicate that the current page is within this section. This is intended strictly as an enhancement, and as such this distinction may not be accompanied by additional visual indicators.

#### References

* [Menu Structure: Using WAI-ARIA](https://www.w3.org/WAI/tutorials/menus/structure/#using-wai-aria)

### Use of color

The main navigation uses color to indicate the state of links and controls within the component. Color may be used to indicate:

* if the item has pointer/keyboard focus
* if a section is expanded or collapsed
* if the item represents the current section or page

In cases where two colors are used to indicate either of two states, the contrast between the colors will be 3:1 or greater, providing an additional visual distinction.

#### References

* [Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
