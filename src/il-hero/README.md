# Hero

The hero component provides a visually-impactful element at the top of pages.

For a smaller top-of-page element, see [il-page-title](../il-page-title/README.md).

A basic hero contain the page title: 

```html
<il-hero>
  <h1>Graduate Programs</h1>
</il-hero>
```

<object type="text/plain" data="./comps/basic.txt"></object>

## Changing the color

By default, the hero component has white text on a blue gradient background. To change the color scheme, use the color attribute:

```html
<il-hero color="orange">
  <h1>Graduate Programs</h1>
</il-hero>
```

[screenshot]

## Using a background image

```html
<il-hero>
  <img src="background.png" alt="" slot="background">
  <h1>Graduate Programs</h1>
</il-hero>
```
[screenshot]

### Changing the position of the text

When using a background image, it may become necessary to reposition the text so as not to obscure an important part of the image. The text can be repositioned using any of the `il-align` classes:

```html
<il-hero class="il-align-right il-align-bottom">
  <img src="background.png" alt="" slot="background">
  <h1>Graduate Programs</h1>
</il-hero>
```

