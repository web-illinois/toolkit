# il-header

The header component implements the standard campus website header design. It should be placed at the top of the page.

## Basic usage

````html
<il-header>
  
  <div slot="identity">
    <h1><a href="/">College of Examples</a></h1>
  </div>
  
  <il-nav slot="links">
    <ul>
      <li><a href="/apply">Apply</a></li>
      <li><a href="/give">Give</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </il-nav>
  
  <il-search slot="search">
    <form action="/search">
      <!-- ... -->
    </form>
  </il-search>
  
  <il-nav slot="navigation">
    <ul>
      <li><a href="/programs">Programs</a></li>
      <li><a href="/directory">Directory</a></li>
      <li><a href="/news">News</a></li>
      <li><a href="/events">Events</a></li>
    </ul>
  </il-nav>
  
</il-header>
````

## Content slots

### identity

(required) Contains the name of the site. If appropriate, it can also contain the name of the site's parent organization.

### links

(optional) Contains a list of links to be places in the top-right corner of the page (eyebrow menu).

### navigation

(optional) Contains the primary site navigation. See [il-nav](../il-nav/) for more information.

### search

(optional) Contains the site search form. See [il-search](../il-search/) for more information.
