# Header

The header contains five content slots:

  * The <dfn>site name</dfn> identifies the site. For multipage sites, this may also link to the front page of the site.
  * The <dfn>parent unit</dfn> identifies the campus unit which manages the site or contains the unit represented by the site. This should link to the site for the parent unit.
  * The <dfn>navigation</dfn> slot contains the main navigation component for the site.
  * The <dfn>search</dfn> slot contains a basic search engine.
  * The <dfn>utility</dfn> slot contains links which are displayed in the top-right corner of the header.

## Site name

For a single page site, the site name can be an h1 or a div as required:

```html
<div slot="site-name">Single-Page Website</div>
```

On sites with more than one page, the site name should link to the site homepage:

```html
<a slot="site-name" href="/">Website with Multiple Pages</a>
```

## Parent unit

If the website represents a department within another unit, the parent unit slot can be used to link to an additional website for the parent unit:

```html
<a slot="parent-unit" href="http://parent.example.com/">Parent Unit</a>
```

## Navigation

The main navigation is a multi-level list of links that should not change within the site.

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

For information, see the <a href="../il-main-nav/il-main-nav.spec.html">full documentation for the main navigation component</a>.

## Search

A simple search form can be added to the header via the <code>search</code> slot.

```html
<form method="get" action="/search" slot="search" role="search">
  <input type="search" name="query" aria-labelledby="search-button">
  <button type="submit" id="search-button">Search</button>
</form>
```

The following aspects of the markup are <strong>required</strong>:

  * The form element must contain the search role
  * The form element must contain the search slot
  * The input type must be search
  * The input must use the submit button for its accessible label.
  * The submit button must contain an id linking it to the input.

A customized search form might include additional hidden inputs:

```html
<form method="post" action="/search.php" slot="search" role="search">
  <input type="hidden" name="api-key" value="67890">
  <input type="search" name="q" aria-labelledby="search-button">
  <button type="submit" id="search-button" name="search" value="1">Search</button>
</form>
```

### References

  * <a href="https://www.nngroup.com/articles/magnifying-glass-icon/">The Magnifying-Glass Icon in Search Design: Pros and Cons</a>, Neilsen Norman Group, February 23, 2014
  * <a href="https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby">Using aria-labelledby</a>


## Utility links

<a href="https://www.nngroup.com/articles/utility-navigation/">utility navigation</a>

* Link labels must be short. One-word labels are prefered.
* Limit links to 3 or fewer.
* Only one level of links is allowed. Additional levels of lists may not be displayed.


## Responsive features

When the available width is 990 pixels or fewer, the header will change to a compact appearance. In this compact mode, the navigation, search, and featured links are hidden by default. In their place is a toggle button labelled "Menu" In this compact mode, the navigation, search, and links are placed into a single panel whose visibility is toggled by a menu button. 

<!-- manually put the header into compact mode -->

<!-- listening for compact events -->