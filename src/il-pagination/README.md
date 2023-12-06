# Pagination

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

## `il-ellipsis-before`/`il-ellipsis-after`

These classes can be used to place an ellipsis (&hellip;) before/after a navigation element. This should be used to indicate a gap in the sequence of pages.

