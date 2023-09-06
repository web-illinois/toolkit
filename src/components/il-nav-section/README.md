# `il-nav-section`

This component is used within an [`il-nav`](../il-nav) component to define sections of the navigation. In certain navigation views, sections can be collapsed and expanded to increase usability.

Each navigation has a label and a list of navigation items:

```html
<il-nav>
  <ul>
    <li>
      <il-nav-section>
        <span slot="label">Programs</span>
        <ul>
          <li><a href="/programs/grad">Graduate</a></li>
          <li><a href="/programs/undergrad">Undergraduate</a></li>
          <li><a href="/programs/doc">Doctoral</a></li>
        </ul>
      </il-nav-section>
    </li>
  </ul>
</il-nav>
```

The label can also be a link:

```html
<il-nav>
  <ul>
    <li>
      <il-nav-section>
        <a slot="label" href="/programs">Programs</a>
        <ul>
          <li><a href="/programs/grad">Graduate</a></li>
          <li><a href="/programs/undergrad">Undergraduate</a></li>
          <li><a href="/programs/doc">Doctoral</a></li>
        </ul>
      </il-nav-section>
    </li>
  </ul>
</il-nav>
```

Navigation sections can be nested indefinitely, but be aware that many navigation views will limit the number of levels they display.

```html
<il-nav>
  <ul>
    <li>
      <il-nav-section>
        <span slot="label">Programs</span>
        <ul>
          <li>
            <il-nav-section>
              <span slot="label">Graduate Programs</span>
              <ul>
                <!--  ... --->
              </ul>
            </il-nav-section>
          </li>
          <li>
            <il-nav-section>
              <span slot="label">Undergraduate Programs</span>
              <ul>
                <!--  ... --->
              </ul>
            </il-nav-section>
          </li>
        </ul>
      </il-nav-section>
    </li>
  </ul>
</il-nav>
```
