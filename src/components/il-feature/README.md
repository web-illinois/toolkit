# il-feature

This is a component that puts a stretched/cropped background image on one side and text on the other side. When it shrinks, it will stack the two items one on top of the other. The component will resize itself to ensure that the text displays and there isn't unsightly whitespace before or after the text. 

Use this if you have a call to action where you want to put an image to text to convey a certain emotion along with factual information. 

## Basic usage

```html
<il-feature>
    <img slot="image" src="https://picsum.photos/1920/800" alt="">
    <h3>LAS Impact Award: Recognizing inspiring efforts during COVID-19</h3>
    <p>The College of LAS honors individuals and teams that have demonstrated service and sacrifice beyond expectations during the pandemic.</p>
    <p><a href="#" class="il-button">Celebrate the awardees</a></p>
</il-feature>
``````

## Content slots

* image: The image that is to be stretched / cropped. 
* default: The text, unformatted. 

### Changing the background color

You can use the `color` attribute to change the color of the component. Available options are blue (default), blue-gradient, orange, orange-gradient, gray, white.
