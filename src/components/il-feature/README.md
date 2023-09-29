# il-feature

This is a component that puts a stretched/cropped background image on one side and text on the other side. When it shrinks, it will stack the two items one on top of the other. The component will resize itself to ensure that the text displays and there isn't unsightly whitespace before or after the text. 

Use this if you have a call to action where you want to put an image to text to convey a certain emotion along with factual information. 

This will normalize the headings, so all headings will have the same size within this component. 

Do not use this for non-images. Instead, use a CSS flexbox or grid to make the information flow as you want it. 

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

## Accessibility notes

With the image, make sure you use alternative text. In most cases, the alt text will be blank because it is decorative. Be very cautious of putting informational images in the feature box, because the images may crop inappropriately. 

Be aware that the il-image-background overlay option may make text not accessible depending on the image. It will also obscure some of the image.

## Advanced Use

### Changing the background color

You can use the `color` attribute to change the color of the component. Available options are blue (default), blue-gradient, orange, orange-gradient, gray, white.

### Changing the size and location of the picture

You can use the `size` attribute to change the size of the picture. Available options are portrait (1:4 ratio), small (1:2 ratio), and large (2:1 ratio). This defaults to a 1:1 ratio. Use this if your image is shorter or taller than your typical image and/or you have a little or lot of text that will display. For example, if you do not have a lot of text, you will want to increase the size of the photo to take up more of the width of the container. This is ignored if the container is under 700 pixels wide. 

You can use the `float='right'` attribute to move the image to the right of the text. This is used if you have a lot of these features in a row and don't want to put the images all on one side. This is ignored if the container is under 700 pixels wide, and does not change the reading order. 

### Changing the focal point of the picture

You can use the CSS object-position (https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) to enforce where the focus is when it crops the image. 

### Margins

This does not have any inherent vertical or horizontal margins, as one of the use cases is to stack these one on top of each other without having white space between them. 

### "Card" option

If you put this in an area where it is forced to be at 770px or under, it will stack the image and the text appropriately. You can use this feature along with CSS flexbox or grid to create a group of cards with images. 

### Overlay

The `background` attribute will overlay the text over the image instead of one side. This is ignored if the container is under 700 pixels wide. 

When using this overlay option, the `float='right'` attribute will move the text to the right (use this if the focal point of the image is on the left). The `float='center'` attribute will move the text to the center of the image. Use the `float='right'` attribute option sparingly, because it will cover the image. Use this when the image is truly background or not material to the topic, and the text is the emphasis of the feature. 

For the overlay, you can use the following CSS variables to manage where the overlay appears and how large it is. 

* --il-feature--content--margin for where it sits
* --il-feature--content--width for width of the content
* --il-feature--content--padding for padding of the translucent color of content
