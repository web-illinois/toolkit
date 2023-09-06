# `il-carousel`

This component presents a series of slides in a continuously rotating carousel.

## Accessibility

This component follows the [ARIA APG carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/);

## Appearance

![Screenshot of a carousel on a mobile device](mockups/Property 1=mobile carousel.jpg)

To the left and right of the current slide are two arrow buttons. Clicking the left button causes the carousel to move to the previous slide in the sequence, and clicking the right button moves to the next slide int he sequence.

Below the slides are the carousel controls. The first control is a play/pause toggle. When the carousel is paused, the toggle displays a play icon, and clicking the toggle will cause the carousel to resume autoplay. During autoplay, the carousel advances after a short period of time and the toggle displays a pause icon.

Next to the play/pause toggle are buttons for each slide in the carousel. Clicking on of these buttons will advance the carousel to that slide. This button now expands in width, and if autoplay is enabled, it displays the status of the timer. 

![Screenshot of a carousel on a tablet](mockups/Property 1=tablet carousel.jpg)

On tablets, the previous and next buttons also include a preview of the previous and next slides in the sequence. When these buttons are clicked, these previews rotate into place and become the current slide.

![Screenshot of a carousel on desktop monitor](mockups/Property 1=desktop carousel.jpg)

These slide previews increase in size as the width of the display increases.

![Screenshot of a carousel on a very wide display](mockups/Property 1=xl desktop carousel.jpg)

On very wide displays, a significant portion of the next and previous slides is visible.

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

By default, the carousel starts with the first slide in the sequence. To start with a different slide, set the `slide` attribute:

```html
<il-carousel slide="3">
  ...
</il-carousel>
```

## Attributes

### autoplay

(true/false) If true, the carousel will start playing when the page loads. If false, the carousel will be paused at page load.

### slide

(int) Represents the index (starting with 1) of the current slide. This attribute changes as the carousel rotates. Changing this attribute will cause the carousel to rotate to the specified slide.

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

// Move to the second slide in the sequence
carousel.goTo(2);
```