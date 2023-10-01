# il-tabs

This is a component that groups a lot of related, parallel text into a collapsable section that is marked with headings where you only want one section visible at a time. This is useful if you expect the user to be scanning for specific information, you have a lot of information on the page, and users will only care about one of the items in the tab section. 

In a mobile view, this is collapsed to a list of tabs with a section under it where the text resides. 

## Basic usage

```html
<il-tabs>
    <div slot="tabs">
        <div role="tab" aria-controls="panel1">Degree Programs</div>
        <div role="tab" aria-controls="panel2">Non-degree Programs</div>
        <div role="tab" aria-controls="panel3">Classroom Experience</div>
    </div>
    <il-content id="panel1">
      <h3>Degree Programs</h3>
      <p>There's no <a href="#">academic experience</a> quite like Grainger Engineering. Ranked the #6 college of engineering with 13 top 5 programs from US News and World Report, we have a reputation of being the best of the best. But a lot goes into those numbers. Engaging professors. State-of-the-art facilities. Groundbreaking student resources. Brilliant classmates. Supportive environment. Endless opportunities. Whether you're a first year undergraduate or working toward a PhD, our programs are designed to help you become the engineer you want to be.</p>
      <p><a href="#" class="il-button">Sample button</a></p>
    </il-content>
    <il-content id="panel2">
      <h3>Non-degree Programs</h3>
        <p>Panel #2. There's a <a href="#">link that goes somewhere</a> here.</p>
    </il-content>
    <il-content id="panel3">
      <h3>Classroom Experience</h3>
      <p>Panel #3</p>
    </il-content>
</il-tabs>
```

## Vertical tabs

For vertical tabs, where the tabs are displayed in a column on the left and active tab content is displayed on the right, use the `direction` attribute with the `vertical` value:

```html
<il-tabs direction="vertical">
```

## Content slots

* tabs: The list of tabs. These should be marked as `<div>`.
* default: The tabs, unformatted. 

## Accessibility notes

Each tab in the tabs content slot must be marked with role of tab and aria-control of the id it is linked to. 

All panels in the tab content must have a distinct ID. These can be programatically generated but must be unique. These panels should be marked with a heading.

This follows the [WAI tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) wtih manual activation.

## Advanced Use

### Changing the background color

Add the following classes to change the color theme: "il-theme-orange", "il-theme-blue", "il-theme-white", "il-theme-blue-gradient", "il-theme-gray"

### Vertical Tabs

You can use the class "il-vertical-tabs" to make the tabs at the left of the component as opposed to the top of the panel. Use this if you have a long list of tabs or the tabs contain a lot of text. In a mobile view, this is ignored. 

### Margins

This does not have any inherent vertical or horizontal margins. There is padding on the top and bottom. 

Use the "il-fixed-width" class to force the image and text to 1200px width and extend the background based on the color theme. Use this if you are not using the il-theme-white background and either want to have a strong vertical line with your images and text and other components or want to ensure that the text does not extend across the full width of the screen.  

