# il-carousel

This component presents a series of slides in a continuously rotating carousel.

This component follows the [ARIA APG carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/);

## Basic usage

```html
<il-carousel>
  <il-slide>
    Slide #1
  </il-slide>
  <il-slide>
    Slide #2
  </il-slide>
  <il-slide>
    Slide #3
  </il-slide>
  <il-slide>
    Slide #4
  </il-slide>
  <il-slide>
    Slide #5
  </il-slide>
</il-carousel>
```

The carousel will begin playing when the page loads. To pause the carousel at page load, use the `autoplay` attribute:

```html
<il-carousel autoplay="false">
  ...
</il-carousel>
```

## Attributes

### autoplay

(true/false) If true, the carousel will start playing when the page loads. If false, the carousel will be paused at page load.

## Advanced usage

### JavaScript integration

```js
const carousel = document.querySelector('il-carousel');

// Pause the carousel
carousel.pause();

// Resume the carousel
carousel.play();

// Move to the next slide
carousel.advance();

// Move to the previous slide
carousel.rewind();
```