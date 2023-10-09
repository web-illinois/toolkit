# Footer

The footer component implements the standard campus footer. It contains information about the website and its organization, as well as a standard set of links to campus resources.

The footer is designed to accommodate the following pieces of content:

* The name of the site (required)
* The parent organization of the website
* contact information for the site
* social media links

There is also a general purpose content area on the right side of the footer that is most commonly used for navigation but which can be used for alternate purposes.

## Creating a footer

A minimal header contains the name of the site. 

The site name is placed in the `name` content slot.

```html
<il-footer>
  <div slot="name">College of Examples</a></h1>
</il-footer>
```
For sites with multiple pages, this can include a link to the site homepage.

```html
<il-footer>
  <a slot="name" href="/">College of Examples</a>
</il-footer>
```

[screenshot]

## Adding a parent organization

To display the parent organization of the site, use the `parent` content slot:

```html
<il-footer>
  <a slot="parent" href="https://example.com">College of Examples</a>
  <a slot="name" href="/">Department of Hypotheticals</a></h1>
</il-footer>
```

Including more than 3 parent organizations is discouraged.

## Adding the footer to a page

When using the [`il-page`](../il-page/README.md) component, the footer should be placed in the `footer` content slot.

```html
<il-page>
  <il-footer slot="footer">
    <!-- ... --->
  </il-footer>
</il-page>
```
## Adding contact information

Contact information is placed in the `contact` content slot:

```html
<il-footer>
  <div slot="contact">
    <div>123 Green Street</div>
    <div>Champaign, IL 61820</div>
    <div><a href="tel:+12175550000">1 (217) 555-0000</a></div>
    <div><a href="mailto:contact@example.com">contact@example.com</a></div>
  </div>
</il-footer>
```

## Adding social media links

Social media links are placed in the `social` content slot:

```html
<il-footer>
  <div slot="social">
    <a href="https://facebook.com">Facebook</a>
    <a href="https://instagram.com">Instagram</a>
    <a href="https://linkedin.com">LinkedIn</a>
  </div>
</il-footer>
```

For recognized social networking site, links are replaced with icons. Recognition is based on the URL of the link. To manually specify the source of a link, use the `data-il-type` attribute:

```html
<a href="https://facebook.com" data-il-type="facebook">Facebook</a>
```

