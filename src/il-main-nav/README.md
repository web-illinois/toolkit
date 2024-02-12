# Main navigation

The main navigation provides a reliable way for visitors to locate key pages in the site. It presents links in a hierarchy that allows visitors to expand sections to reveal additional layers of links.

This component is part of the standard header and is not designed for use outside that component.

## Structure

Within the main navigation component are one or more <dfn>items</dfn>. There are two types of items:

<dfn>Links</dfn> take visitors to individual locations within the site. Each link has a <dfn>link label</dfn>, which is provided to the visitor, and a <dfn>link URL</dfn>, which provides the destination for the link.

<object class="screenshot">
An example of a top-level navigation link
</object>

<dfn>Sections</dfn> are groups of items, and can contain both links and other sections. Sections can be <dfn>collapsed</dfn>, with their items hidden from the visitor, or <dfn>expanded</dfn>, with their items visible. The <dfn>section toggle</dfn> is used to alternate between these two states. 

<object class="screenshot">
An example of a top-level navigation section when collapsed
</object>

<object class="screenshot">
The same top-level navigation section when expanded
</object>

Sections may also contain a <dfn>section link</dfn>, which is positioned beside the section toggle and takes the visitor to a primary page for the section.

<object class="screenshot">
The same top-level navigation section when expanded
</object>


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


## Appearance

On larger screens it appears as a horizontal bar with dropdowns for secondary levels of links. On small screens, it is contained within the header menu widget, and appears as a vertical column of links with expandable secondary levels.
