# `il-icon`

This component is used to insert icons from the official campus icon library.

```html
<il-icon>home</il-icon>
```

There are two icon families: solid (default) and line. You can use a CSS class to select the correct family.

```html
<il-icon class="il-icon-line">home</il-icon>
```
To select a family for multiple icons, wrap them in a container with the correct CSS class.

```html
<div class="il-icon-line">
  <il-icon>home</il-icon>
  <il-icon>contact</il-icon>
  <il-icon>download</il-icon>
</div>
```