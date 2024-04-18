# Footer

The standard campus footer should appear at the bottom of every page of a campus website. The [page component](../il-page/README.md) has a dedicated content slot for the footer.

The footer is placed in the `footer` slot of the `il-page` component:

```html
<il-page>
  <il-footer slot="footer"></il-footer>
</il-page>
```

The footer contains four content slots:

* The <dfn>site name</dfn> identifies the site. For multipage sites, this may also link to the front page of the site.
* The <dfn>parent unit</dfn> identifies the campus unit which manages the site or contains the unit represented by the site. This should link to the site for the parent unit.
* The <dfn>address</dfn> slot contact information for the site.
* The <dfn>actions</dfn> slot contains action buttons.

## Site name

For a single page site, the site name can be an h1 or a div as required:

```html
<il-footer slot="footer">
  <div slot="site-name">Single-Page Website</div>
</il-footer>
```

On sites with more than one page, the site name should link to the site homepage:

```html
<il-footer slot="footer">
  <a slot="site-name" href="/">Website with Multiple Pages</a>
</il-footer>
```

## Parent unit

If the website represents a department within another unit, the parent unit slot can be used to link to an additional website for the parent unit:

```html
<il-footer slot="footer">
  <a slot="parent-unit" href="http://parent.example.com/">Parent Unit</a>
  <a slot="site-name" href="/">Website with Parent Unit</a>
</il-footer>
```

## Adding contact information

Contact information is placed in the `address` content slot. This slot also contains social media links, which are placed before other contact information:

```html
    <address slot="address">
      <nav aria-label="Social media" class="il-social">
        <ul>
          <li><a data-service="twitter" href="http://example.com/">Twitter</a></li>
          <li><a data-service="youtube" href="http://example.com/">YouTube</a></li>
          <li><a data-service="facebook" href="http://example.com/">Facebook</a></li>
          <li><a data-service="instagram" href="http://example.com/">Instagram</a></li>
          <li><a data-service="linkedin" href="http://example.com/">LinkedIn</a></li>
        </ul>
      </nav>
      <p>5678 West Example Street<br>
        MC-0000<br>
        Champaign, IL 61820</p>
      <a href="mailto:address@example.com">address@example.com</a>
      <a href="tel:+12175551234">(217) 555-1234</a>
    </address>
```

For social media links, the `data-service` attribute is required. Valid attributes are:

* facebook
* instagram
* linkedin
* pinterest
* snapchat
* twitter
* weibo
* whatsapp
* x
* youtube

