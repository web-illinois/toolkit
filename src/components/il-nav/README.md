# il-nav

The navigation component is used for lists of navigation links, often with multiple nested levels. It has several presentation formats, and is capable of changing its appearance based on its location on the page.

## Basic usage

````html
<il-nav>
  <ul>
    <li><a href="/news.html">News</a></li>
    <li><a href="/calendar.html">Calendar</a></li>
    <li><a href="/directory.html">Directory</a></li>
  </ul>
</il-nav>
````

Add navigation submenus (where supported)

````html
<il-nav>
  <ul>
    <li>
      <il-nav-section>
        <a href="/programs/" slot="label">Programs</a>
        <ul>
          <li><a href="/programs/undergrad.html">Undergraduate Programs</a></li>
          <li><a href="/programs/grad.html">Graduate Programs</a></li>
          <li><a href="/programs/doc.html">Doctoral Programs</a></li>
        </ul>
      </il-nav-section>
    </li>
  </ul>
</il-nav>
````

For more information see [il-nav-section](../il-nav-section/).