# il-feature

This is a component that puts a stretched/cropped background image on one side and text on the other side. When it shrinks, it will stack the two items one on top of the other. The component will resize itself to ensure that the text displays and there isn't unsightly whitespace before or after the text. 

Use this if you have a call to action where you want to put an image to text to convey a certain emotion along with factual information. 

## Basic usage

```
<il-feature>
    <img slot="image" src="https://picsum.photos/1920/800" alt="">
    <il-content class="il-card">
        <h3>LAS Impact Award: Recognizing inspiring efforts during COVID-19</h3>
        <p>The College of LAS honors individuals and teams that have demonstrated service and sacrifice beyond expectations during the pandemic.</p>
        <p><a href="#" class="il-button">Celebrate the awardees</a></p>
    </il-content>
</il-feature>
```

## Content slots

* image: The image that is to be stretched / cropped. 
* default: The text, unformatted. 

## Classes

* Color Theme: "il-theme-orange", "il-theme-blue", "il-theme-white", "il-theme-blue-gradient", "il-theme-gray"
* Size of image: "il-size-portrait" (1:4 ratio), "il-size-small" (1:2 ratio), "il-size-large" (2:1 ratio). Defaults to a 1:1 ratio. Use this if your image is shorter or taller than your typical image and/or you have a little or lot of text that will display. For example, if you do not have a lot of text, you will want to increase the size of the photo to take up more of the width of the container. This is ignored if the container is under 700 pixels wide. 
* Overlay Option: "il-image-background". If you use this, the block will be overlayed over the image instead of one side. This is ignored if the container is under 700 pixels wide. 
* Horizontal Alignment and Float of Image: "il-float-left", "il-float-right". Defaults to il-float-left. If you use this with the overlay option, il-float-right will move the text to the right (use this if the focal point of the image is on the left). Otherwise, il-float-right will reverse the order of the image and text without changing the reading order. This is used if you have a lot of these features in a row and don't want to put the images all on one side. This is ignored if the container is under 700 pixels wide. 
* Margin Option: "il-fixed-width". If you use this, this will force the image and text to 1200px width and extend the background based on the color theme. Use this if you are not using the il-theme-white background and either want to have a strong vertical line with your images and text and other components or want to ensure that the text does not extend across the full width of the screen.  

## Accessibility notes

With the image, make sure you use alternative text. In most cases, the alt text will be blank because it is decorative. Be very cautious of putting informational images in the feature box, because the images may crop inappropriately. 

Be aware that the il-image-background overlay option may make text not accessible depending on the image. It will also obscure some of the image.

## Advanced

This does not have any inherent margins, as one of the use cases is to stack these one on top of each other without having white space between them. 

If you put this in an area where it is forced to be at 770px or under, it will stack the image and the text appropriately. You can use this feature along with CSS flexbox or grid to create a group of cards with images. 

Most of the time, you'll want to put the text inside of a `<il-content>` tag. Using the `<il-content class="il-card">` will normalize the headings. 

Do not use this for non-images. Instead, use a CSS flexbox or grid to make the information flow as you want it. 

You can use the CSS object-position (https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) to enforce where the focus is when it crops the image. 

For the overlay, you can use the following CSS variables to manage where the overlay appears and how large it is. 

* --il-feature--content--margin for where it sits
* --il-feature--content--width for width of the content
* --il-feature--content--padding for padding of the translucent color of content

