# Breadcrumb

This component implements the [breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

```html
<il-breadcrumb>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/components">Components</a></li>
    <li><a href="/components/navigation">Navigation</a></li>
    <li><a href="/components/navigation/breadcrumb" aria-current="page">Breadcrumb</a></li>
  </ol>
</il-breadcrumb>
```

## Usage notes

* Links **must** be placed in an ordered list.
* The first link *should* point to the home page.
* The final link *should* point to the current page.
* A link to the current page **must** contain the `aria-current="page"` attribute.

## Accessibility features

* The component wraps the list of links in a `nav` element with `aria-label="Breadcrumb"`.

## References

* [Technique G65: Providing a breadcrumb trail](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
* [Breadcrumbs: 11 Design Guidelines for Desktop and Mobile](https://www.nngroup.com/articles/breadcrumbs/)
