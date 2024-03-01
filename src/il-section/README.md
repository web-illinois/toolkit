# Sections

The readability of long and complicated pages can be improved by dividing a page into sections. The `il-section` component can only be used within the `il-page` component. Sections can be placed beside any other block-level element.

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  <main slot="main">
    <il-section>
      <h1>Page with multiple sections</h1>
      <p>This is divided into multiple sections.</p>
    </il-section>
    <il-section>
      <h2>The second section</h2>
      <p>The second section follows the first section.</p>
    </il-section>
  </main>
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```

Usage notes:

* The `il-section` element **must** be a direct child of the `main` element.
* Sections **can not** be nested.

The `il-alternate` class is used to apply a different background color to alternate sections. This improves the ability to distinguish adjacent sections.

```html
<il-page>
  <il-header slot="header">
    <a slot="site-name" href="/">Example site</a>
  </il-header>
  <main slot="main">
    <il-section>
      <h1>Page with multiple sections</h1>
      <p>This is divided into multiple sections.</p>
    </il-section>
    <il-section class="il-alternate">
      <h2>The second section</h2>
      <p>The second section follows the first section.</p>
    </il-section>
    <il-section>
      <h2>The final section</h2>
      <p>The third section is the final section.</p>
    </il-section>
  </main>
  <il-footer slot="footer">
    <a slot="site-name" href="/">Example site</a>
  </il-footer>
</il-page>
```
