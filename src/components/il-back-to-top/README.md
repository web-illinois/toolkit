# `il-back-to-top`

This component places a button in the bottom-right corner of the screen which takes visitors back to the top of the page. It uses animation that simulates vertical scrolling while not being overwhelming for motion-sensitive viewers.

## Placement

This component should be placed as close as possible to the ending `</body>` tag, outside of any `<il-page>` element in use:

```html
<body>
  <il-page>

  <!-- ... page content ... -->

  </il-page>
  <il-back-to-top></il-back-to-top>
</body>
```

## Changing the location of the top of the page

By default, this component will take the visitor to the top edge of the page. To change the location of the top of the page, use the `target` attribute:

```html
<il-page>
  
  <div id="my-top-of-page"></div>
  
</il-page>
<il-back-to-top target="my-top-of-page"></il-back-to-top>
```

## Changing the position of the button

To change the position of the button, modify the `il-back-to-top-right` and `il-back-to-top-bottom` CSS variables. These control the distance from the button to the right and bottom edges of the screen, respectively.

```css
il-back-to-top {
  --il-back-to-top-right: 48px;
  --il-back-to-top-bottom: 48px;
}
```