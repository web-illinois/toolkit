# `il-section`

The section component is used to divide a web page into distinct sections, which may have a different appearance than their surrounding sections.

```html
<il-page>
  <il-section>
    <p>Section one</p>
  </il-section>
  <il-section>
    <p>Section two</p>
  </il-section>
</il-page>
```
On a page with multiple sections, it can be helpful to distinguish the individual sections by using different colors schemes for each section. By using the theme classes, the color scheme of the section and its content can be altered from the layout.

```html
<il-page>
  <il-section class="il-white">
    <p>Section one uses the white color scheme</p>
  </il-section>
  <il-section class="il-blue">
    <p>Section two uses the blue color scheme</p>
  </il-section>
</il-page>
```
## Adding a background

To add a custom background to a page section, use the `background` content slot.

```html
<il-section>
  <img src="background.jpg" alt="" slot="background">
</il-section>
```
This content slot is most commonly used for images, but it is possible to create complex backgrounds (see Advanced usage, below).

If your background image doesn't provide the adequate color contrast for your content, the content can be wrapped in an additional themed layout component:

```html
<il-section>
  <img src="background-with-poor-contrast.jpg" alt="" slot="background">
  <il-section class="il-blue">
    <p>This content will have a blue background</p>
  </il-section>
</il-section>
```

[Screenshot of a page section with a very busy background. Floating in the center of the photo is a blue box with the section content]

