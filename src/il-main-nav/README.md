# Main navigation

The main navigation provides a reliable way for visitors to locate key pages in the site. It presents links in a hierarchy that allows visitors to expand sections to reveal additional layers of links.

This component is part of the standard header and is not designed for use outside that component.

## Appearance

On larger screens it appears as a horizontal bar with dropdowns for secondary levels of links. On small screens, it is contained within the header menu widget, and appears as a vertical column of links with expandable secondary levels.

## Structure

A simple main navigation component might contain a single list of links, representing important locations within the site. This component is placed in the `navigation` slot of the header component.

```html
<il-header>
  <il-main-nav slot="navigation">
    <ul>
      <li><a href="/about.html">About</a></li>
      <li><a href="/programs.html">Programs</a></li>
      <li><a href="/news.html">News</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </il-main-nav>
</il-header>
```

## Multiple navigation levels

Additional navigation levels can be created with the use of navigation sections. In this example, the `Programs` item contains an `il-nav-section` element with an additional level of navigation links.

```html
<il-header>
  <il-main-nav slot="navigation">
    <ul>
      <li><a href="/about.html">About</a></li>
      <li>
        <il-nav-section>
          <a slot="link" href="/programs.html">Programs</a>
          <ul>
            <li><a href="/programs/undergrad.html">Undergraduate</a></li>
            <li><a href="/programs/grad.html">Graduate</a></li>
            <li><a href="/programs/doc.html">Doctorate</a></li>
          </ul>          
        </il-nav-section>
      </li>
      <li><a href="/news.html">News</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </il-main-nav>
</il-header>
```

The `Programs` item in this example navigation acts as both a link and a label for this section of the navigation. This requires a separate toggle for expanding and collapsing the navigation section. For top-level navigation items, this toggle appears immediately to the right of the top-level link.

```
+---------------+
| Programs | \/ |
+---------------+
```

In some situations it may be preferable to omit the top-level link, leaving only a toggle for the navigation section. In this case, the `label` slot is used to provide a readable label for the navigation section.

```html
<il-header>
  <il-main-nav slot="navigation">
    <ul>
      <li><a href="/about.html">About</a></li>
      <li>
        <il-nav-section>
          <span slot="label">Programs</span>
          <ul>
            <li><a href="/programs/undergrad.html">Undergraduate</a></li>
            <li><a href="/programs/grad.html">Graduate</a></li>
            <li><a href="/programs/doc.html">Doctorate</a></li>
          </ul>          
        </il-nav-section>
      </li>
      <li><a href="/news.html">News</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </il-main-nav>
</il-header>
```

```
+-------------+
| Programs \/ |
+-------------+
```
