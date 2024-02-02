# Sidebar navigation

The sidebar navigation provides persistent access to links within a specific section of a website.

This component is designed to be used with the sidebar layout component. 

## Appearance

When the sidebar is displayed, the navigation appears as a long column of nested links.

On smaller screens, the component appears as a dropdown. Expanding the dropdown reveals the full navigation.

## Structure

```html
<il-section with-sidebar>
  <il-sidebar-nav slot="sidebar">
    <h2><a href="/about.html">About</a></h2>
    <ul>
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
  </il-sidebar-nav>
</il-section>
```