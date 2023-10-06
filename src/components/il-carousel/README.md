# Carousels

Carousels present a series of slides in an unending rotation. Slides are shown one at a time, and controls are provided to advance the slides backward and forward. When the final slide in the series is reached, the series begins again with the first slide.

In a carousel set to autoplay, slides advance at a predetermined interval without any user interaction. Controls are provided to pause and resume autoplay.

This component follows the [ARIA APG carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) for accessible interaction.

## Creating a carousel

The following markup defines a carousel with 5 slides:

```html
<il-carousel>
  <il-slide>
    <!-- ...content for slide #1 -->
  </il-slide>
  <il-slide>
    <!-- ...content for slide #2 -->
  </il-slide>
  <il-slide>
    <!-- ...content for slide #3 -->
  </il-slide>
  <il-slide>
    <!-- ...content for slide #4 -->
  </il-slide>
  <il-slide>
    <!-- ...content for slide #5 -->
  </il-slide>
</il-carousel>
```

For more information about slide content, see the [`il-slide` component](../il-slide/README.md).

This markup would produce:

```
      +-------------------------------------+
      |                                     |
      |                                     |
 /|   |                                     |   |\
/ |   |                                     |   | \
\ |   |                                     |   | /
 \|   |                                     |   |/
      |                                     |
      |                                     |
      +-------------------------------------+

                [#] [:] [:] [:] [:]

```

The basic controls consist of:

* Two arrows to the left and right of the current slide which rewind or advance the carousel, respectively
* A series of buttons, one for each slide in the carousel, which indicate the current slide and advance the carousel directly to their respective slides

## Autoplay

Adding the `autoplay` attribute causes the carousel to automatically advance to the next slide at a designated interval.

```html
<il-carousel autoplay>
  <!-- ...these slides will autoplay ... -->
</il-carousel>
```

Autoplay introduces 2 changes to the carousel controls:

* a play/pause toggle which allows autoplay to be stopped and resumed
* the button representing the current slide expands to indicate the time until the next slide 


```
      +-------------------------------------+
      |                                     |
      |                                     |
 /|   |                                     |   |\
/ |   |                                     |   | \
\ |   |                                     |   | /
 \|   |                                     |   |/
      |                                     |
      |                                     |
      +-------------------------------------+

      [||] [::::::::::::::::] [:] [:] [:] [:]
```

The expanded slide button gradually fills from left to right until the carousel advances to the next slide.

```
[||] [###:::::::::::::::::] [:] [:] [:] [:]
```
```
[||] [##########::::::::::] [:] [:] [:] [:]
```
```
[||] [##################::] [:] [:] [:] [:]
```
```
[||] [:] [###:::::::::::::::::] [:] [:] [:]
```

### Changing the slideshow speed

The default speed of the carousel is 5 seconds per slide. To adjust the speed, enter a new value (seconds per slide) with the `speed` attribute:

```html
<il-carousel autoplay speed="8">
```
