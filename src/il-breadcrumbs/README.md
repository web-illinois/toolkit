# Breadcrumbs

This navigation type presents links in a [breadcrumb trail](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) used to show the current page's place in a hierarchical site structure.

```html
<il-breadcrumbs>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/programs/">Programs</a></li>
    <li><a current href="/programs/grad">Graduate programs</a></li>
    <li><a current href="/programs/grad/sim">Simulation Theory</a></li>
  </ol>
</il-breadcrumbs>
```

