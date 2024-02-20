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
