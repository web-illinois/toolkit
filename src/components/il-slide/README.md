# Slide

Slides are image-dominant components that are presented in [carousels](../il-carousel/README.md). Each slide is intended to direct the visitor to one or more destinations within the site.

```html
<il-carousel>
  <il-slide>
    <p class="il-slide-title">Big Announcement</p>
    <p>There is something very exciting happening</p>
    <a href="announcement.html" class="il-button">Read the big news</a>
  </il-slide>
</il-carousel>
```

## Changing the slide color

The background color of the slide can be changed using any of the [color scheme](../../css/colors/README.md#color-schemes) classes.

```html
<il-slide class="il-blue">
  <p>This slide has a blue background</p>
</il-slide>
<il-slide class="il-orange">
  <p>This slide has an orange background</p>
</il-slide>
```

## Adding a background image

Background images can be added to slides using the `background` content slot.

```html
<il-slide>
  <img src="background.jpg" alt="" slot="background">
  <p>This slide has a background image</p>
</il-slide>
```


