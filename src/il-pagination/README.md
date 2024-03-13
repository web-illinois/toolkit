# Pagination

This is a navigation component for paged content.

```html
<il-pagination>
  <ol>
    <li><a href="/posts?p=1">1</a></li>
    <li><a href="/posts?p=2">2</a></li>
    <li><a href="/posts?p=3" aria-current="page">3</li>
    <li><a href="/posts?p=4">4</a></li>
    <li><a href="/posts?p=5">5</a></li>
  </ol>
</il-pagination>
```

Notes on this usage:

* The links **must** be contained in an ordered list.
* The current page **must** contain the `aria-current="page"` attribute.

The following affordances are provided for large collections of pages:
* Additional links may be introduced to allow quicker access to common navigation actions (e.g. go to the next/previous page).
* Ellipses may be used as visual emphasis for gaps in the numeric page sequence.

```html
<il-pagination>
  <ol>
    <li><a href="/posts?p=1">First</a></li>
    <li><a href="/posts?p=2">Previous</a></li>
    <li><a href="/posts?p=1">1</a></li>
    <li><a href="/posts?p=2">2</a></li>
    <li><a href="/posts?p=3" aria-current="page">3</li>
    <li><a href="/posts?p=4">4</a></li>
    <li><a href="/posts?p=5">5</a></li>
    <li><a href="/posts?p=100" class="il-ellipsis-before">100</a></li>
    <li><a href="/posts?p=4">Next</a></li>
    <li><a href="/posts?p=5">Last</a></li>
  </ol>
</il-pagination>
```

## Accessibility features

* The component wraps the list of links in a `nav` element with `aria-label="Pages"`.

