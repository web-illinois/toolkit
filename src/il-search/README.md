# Search

This components creates a search form and is intended for use within the `il-header` component. It provides a default form which can be overwritten at different levels.

## Creating a basic search form

```html
<il-header>
  
  <il-search slot="search" href="/search" query="q"></il-search>
  
</il-header>
```

The available attributes are:

* `href` specifies where to send the form (defaults to the current page)
* `method` specifies the `METHOD` for the form (defaults to `get`)
* `query` specifies the name of the query parameter (defaults to `q`)

This would produce a form equivalent to:

```html
<form role="search" action="/search" method="get">
  <input type="search" name="q">
  <button type="submit">Search</button>
</form>
```

## Using a custom form

If more flexibility is required, a custom form can be provided:

```html
<il-search>
  <form role="search" action="/custom-search.php" method="post">
    <input type="hidden" name="token" value="4567">
    <input type="search" name="search-query" value="Search term">
    <button type="submit" name="do-search" value="1">Search</button>
  </form>
</il-search>
```

Things to consider when using a custom form:

* Make sure to include `role="search"` in the form element.
* There must be one `input type="search"` element and one `button type="submit"` for the form to be displayed correctly.
* Any additional input elements will not be visible.