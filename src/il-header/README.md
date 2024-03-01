# Header

The standard campus header should appear at the top of every page of a campus website. The [page component](../il-page/README.md) has a dedicated content slot for the header.

The header is placed in the `header` slot of the `il-page` component:

```html
<il-page>
  <il-header slot="header"></il-header>
</il-page>
```

The header contains five content slots:

  * The <dfn>site name</dfn> identifies the site. For multipage sites, this may also link to the front page of the site.
  * The <dfn>parent unit</dfn> identifies the campus unit which manages the site or contains the unit represented by the site. This should link to the site for the parent unit.
  * The <dfn>navigation</dfn> slot contains the main navigation component for the site.
  * The <dfn>search</dfn> slot contains a basic search engine.
  * The <dfn>eyebrow</dfn> slot contains links which are displayed in the top-right corner of the header.

## Site name

For a single page site, the site name can be an h1 or a div as required:

```html
<il-header slot="header">
  <div slot="site-name">Single-Page Website</div>
</il-header>
```

On sites with more than one page, the site name should link to the site homepage:

```html
<il-header slot="header">
  <a slot="site-name" href="/">Website with Multiple Pages</a>
</il-header>
```

## Parent unit

If the website represents a department within another unit, the parent unit slot can be used to link to an additional website for the parent unit:

```html
<il-header slot="header">
  <a slot="parent-unit" href="http://parent.example.com/">Parent Unit</a>
  <a slot="site-name" href="/">Website with Parent Unit</a>
</il-header>
```

## Navigation

The main navigation is a multi-level list of links that should not change within the site.

```html
<il-header slot="header">
  <il-main-nav slot="navigation">
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/academics">Academics</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/alumni">Alumni</a></li>
    </ul>
  </il-main-nav>
</il-header>
```

For information, see the full documentation for the [main navigation component](../il-main-nav/README.md).

## Search

A simple search form can be added to the header via the <code>search</code> slot.

```html
<il-header slot="header">
  <form method="get" action="/search" slot="search" role="search">
    <input type="search" name="query" aria-labelledby="search-button">
    <button type="submit" id="search-button">Search</button>
  </form>
</il-header>
```

The following aspects of the markup are <strong>required</strong>:

  * The form element must contain the search role
  * The form element must contain the search slot
  * The input type must be search
  * The input must use the submit button for its accessible label.
  * The submit button must contain an id linking it to the input.

A customized search form might include additional hidden inputs:

```html
<il-header slot="header">
  <form method="post" action="/search.php" slot="search" role="search">
    <input type="hidden" name="api-key" value="67890">
    <input type="search" name="q" aria-labelledby="search-button">
    <button type="submit" id="search-button" name="search" value="1">Search</button>
  </form>
</il-header>
```

### References

  * [The Magnifying-Glass Icon in Search Design: Pros and Cons](https://www.nngroup.com/articles/magnifying-glass-icon/), Neilsen Norman Group, February 23, 2014
  * [Using aria-labelledby](https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby)


## Eyebrow

The top-right (or "eyebrow") section can be used for utility navigation:

```html
<il-header slot="header">
  <nav slot="eyebrow" aria-label="Utility">
    <ul>
      <li><a href="/apply">Apply</a></li>
      <li><a href="/visit">Visit</a></li>
      <li><a href="/donate">Donate</a></li>
    </ul>
  </nav>
</il-header>
```

* Link labels must be short. One-word labels are prefered.
* Limit links to 3 or fewer.
* Only one level of links is allowed. Additional levels of lists may not be displayed.
