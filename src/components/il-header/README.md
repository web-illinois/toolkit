# Header

The header component implements the standard campus website header design. It should be placed at the top of the page.

The header is designed to accommodate the following pieces of content:

* The name of the site (required)
* The parent organization of the website
* The main site navigation
* The site search form
* 1-3 additional important links

[screenshot]

On smaller screens, the navigation, search, and additional links are placed within a dropdown that can be expanded with a menu toggle:

[screenshots]

## Creating a header

A minimal header contains the name of the site. The site name is placed in the `name` content slot.

```html
<il-header>
  <div slot="name">College of Examples</div>
</il-header>
```

For sites with multiple pages, this can include a link to the site homepage.

```html
<il-header>
  <a slot="name" href="/">College of Examples</a>
</il-header>
```

[screenshot]

## Adding a parent organization

To add the parent organization of the site, use the `parent` content slot. 

```html
<il-header>
  <a slot="parent" href="https://example.com">College of Examples</a>
  <a slot="name" href="/">Department of Hypotheticals</a></h1>
</il-header>
```

Including more than 3 parent organizations is discouraged.

## Adding the header to a page

When using the [`il-page`](../il-page/README.md) component, the header should be placed in the `header` content slot.

```html
<il-page>
  <il-header slot="header">
    <!-- ... --->
  </il-header>
</il-page>
```

## Adding the main navigation

The `navigation` content slot is intended for the main site navigation and is designed to accommodate the [navigation component](../il-nav/README.md).

```html
<il-header slot="header">
  <il-nav slot="navigation">
    <!-- ... --->
  </il-nav>
</il-header>
```

It is not necessary to specify a type for the `il-nav` element when used in the `navigation` content slot. The type will be automatically determined based on the state of the header:

| Header state                      | Navigation type |
|-----------------------------------|-----------------|
| Full header                       | `bar`           |
| Compact header with menu dropdown | `accordion`     |  


See [il-nav](../il-nav/) for more information.

## Adding additional links

The header contains an additional navigation content slot intended for 1-3 links. Use the `links` content slot to place a navigation element in this area.

```html
<il-header slot="header">
  <il-nav slot="links">
    <ul>
      <li><a href="/apply">Apply</a></li>
      <li><a href="/donate">Donate</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </il-nav>
</il-header>
```
As with the main navigation, it is not necessary to provide a type for the `il-nav` as it will be determined from the state of the header.

| Header state                      | Navigation type |
|-----------------------------------|-----------------|
| Full header                       | `eyebrow`       |
| Compact header with menu dropdown | `accordion`     |  
