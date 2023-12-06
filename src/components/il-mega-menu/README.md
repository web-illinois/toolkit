# Mega menu

Mega menus are used in the [main navigation](../il-main-nav/README.md) to display the full contents of a navigation section, with room for additional content on larger displays. Mega menus can only be used as top-level navigation items.

## Creating a mega menu


```html
<il-main-nav>
  <ul>
    <li>
      <il-mega-menu>
        <span slot="label">Research</span>
        <il-columns count="3">
          <ul class="il-nav">
            <li><a href="/research/facilities">Facilities</a></li>
            <li><a href="/research/faculty">Faculty</a></li>
            <li><a href="/research/news">News</a></li>
          </ul>
        </il-columns>
      </il-mega-menu>
    </li>
  </ul>
</il-main-nav>
```

```html
<il-main-nav>
  <ul>
    <li>
      <il-mega-menu>
        <span slot="label">Research</span>
        <il-grid columns="3">
          <ul class="il-nav">
            <li><a href="/research/facilities">Facilities</a></li>
            <li><a href="/research/faculty">Faculty</a></li>
            <li><a href="/research/news">News</a></li>
          </ul>
          <div>
            News story #1
          </div>
          <div>
            News story #2
          </div>
        </il-grid>
      </il-mega-menu>
    </li>
  </ul>
</il-main-nav>
```

```
+-------------+ +-------------+ +-----------+
| Programs \/ | | Research /\ | | About \/  |
+---------------+             +-----------------------------------------------+
|                         :                         :                         |
| * Facilities            : News story #1           : News story #2           |
| * Faculty               :                         :                         |
| * News                  :                         :                         |
|                         :                         :                         |
+-----------------------------------------------------------------------------+
```

## Further reading

* [Mega Menus Work Well for Site Navigation](https://www.nngroup.com/articles/mega-menus-work-well/), Neilsen Norman Group, March 26, 2017


