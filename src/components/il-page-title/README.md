# `il-page-title`

This component acts as a title for the main page content. It is designed to accomodate the page breadcrumbs, and can contain an optional background image.

For a top-of-page component with more visual impact, see [il-hero](../il-hero/README.md).

```html
<il-page-title>
  <h1>Graduate Programs</h1>
</il-page-title>
```

[screenshot]

## Adding breadcrumbs

An [`il-nav`](../il-nav/README.md) component can be used for page breadcrumbs:

```html
<il-page-title>
  <il-nav slot="breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/programs">Programs</a></li>
      <li>Graduate Programs</li>
    </ul>
  </il-nav>
</il-page-title>
```

[screenshot]

## Adding a background image

```html
<il-page-title>
  <img src="background.png" alt="" slot="background">
  <h1>Graduate Programs</h1>
</il-page-title>
```
