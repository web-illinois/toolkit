# `il-section`

This component is used to divide the length of a web page into distinct sections. Each section can have a different visual appearance, including color schemes and background images.

The `il-section` component can only be used within the `il-page` component. Sections can be placed beside any other block-level element.

```html
<il-page>
  
  <p>This paragraph comes before the section.</p>
  
  <il-section>
    <p>This paragraph is inside the section.</p>
  </il-section>

  <p>This paragraph comes after the section.</p>

</il-page>
```

Sections extend to the edges of the page, but maintain the page content boundaries. This allows sections to have custom backgrounds which span the width of the page, yet maintain padding and line lengths consistent with the rest of the page.

```
         :                                                           :
         :This paragraph comes before the section.                   :
         :                                                           :
+-----------------------------------------------------------------------------+
|        :                                                           :        | 
|        :This paragraph is inside the section                       :        |
|        :                                                           :        |
+-----------------------------------------------------------------------------+
         :                                                           :
         :This paragraph comes after the section.                    :
         :                                                           :
         :                                                           :
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

For more on content boundaries, see [the `il-page` component reference](../il-page/README.md#page-margins).

## Changing the section color scheme

On a page with multiple sections, it can be helpful to distinguish the individual sections by using different colors schemes for each section.

```html
<il-page>
  <il-section color="white">
    <p>Section one uses the white color scheme</p>
  </il-section>
  <il-section class="gray">
    <p>Section two uses the gray color scheme</p>
  </il-section>
</il-page>
```
```
         :                                                           :
+-----------------------------------------------------------------------------+
|        :                                                           :        |
|        :Section one uses the white color scheme                    :        |
|        :                                                           :        |
+-----------------------------------------------------------------------------+
|        :                                                           :        |
|        :Section two uses the gray color scheme                     :        |
|        :                                                           :        |
+-----------------------------------------------------------------------------+
         :                                                           :
```

The available color schemes are:

* white (default)
* gray
* orange
* blue
* blue-gradient
* orange-gradient

## Adding a background image

To add a background image to a page section, use the `background` content slot.

```html
<il-section>
  <img src="background.jpg" alt="" slot="background">
  <p>This section has a background image</p>
</il-section>
```

```
         :                                                           :
+-----------------------------------------------------------------------------+
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ : \ \ \ \|
| \ \ \ \:This section has a background image \ \ \ \ \ \ \ \ \ \ \ \:\ \ \ \ |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ : \ \ \ \|
+-----------------------------------------------------------------------------+
         :                                                           :
```

For complex background images or images without sufficient color contrast, the `il-inset` class is used to create an overlay using the color scheme of the parent section.

```html
<il-section color="blue">
  <img src="background-with-poor-contrast.jpg" alt="" slot="background">
  <div class="il-inset">
    <p>This content will be inset from the background and use the blue color scheme.</p>
  </div>
</il-section>
```

```
         :                                                           :
+-----------------------------------------------------------------------------+
|########:###########################################################:########|
|########:##                                                       ##:########|
|########:##  This content will be inset from the background and   ##:########|
|########:##  use the blue color scheme.                           ##:########|
|########:##                                                       ##:########|
|########:###########################################################:########|
+-----------------------------------------------------------------------------+
         :                                                           :
```

## Using grids inside sections

When a grid is placed inside a section, the grid is contained within the content boundaries, including the backgrounds of any grid items.

```html
<il-section>
  <il-grid columns="3">
    <div class="il-blue">Blue</div>
    <div class="il-white">White</div>
    <div class="il-orange">Orange</div>
  </il-grid>
</il-section>
```

```
- - - - -+-------------------+-------------------+-------------------+- - - - -
         | \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / |         
         |\ \ \ \ \ \ \ \ \ \|                   |/ / / / / / / / / /|        
         | \ \ \ Blue  \ \ \ |       White       | / / / Orange  / / |        
         |\ \ \ \ \ \ \ \ \ \|                   |/ / / / / / / / / /|        
         | \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / |        
- - - - -+-------------------+-------------------+-------------------+- - - - -
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

To extend the backgrounds of grid items to the edge of the page, use the `background` attribute with a value of `grid`. Add the `il-background` class to grid items to extend the background of that item when it is the left-most or right-most item in a grid row.

```html
<il-section background="grid">
  <il-grid columns="3">
    <div class="il-blue il-background">The background of this item will extend to the left edge of the page.</div>
    <div class="il-white">This item is not at the end of a row, so it cannot extend its background.</div>
    <div class="il-orange">This item is at the end of a row but does not have the il-background class, so its background will not extend.</div>
  </il-grid>
</il-section>
```

```
+----------------------------+-------------------+-------------------+- - - - -
|\ \ \ \ : \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / |          
| \ \ \ \:The background of \| This item is not  | This item is at/ /|         
|\ \ \ \ :this item will \ \ | at the end of a   | the end a the row |         
| \ \ \ \:extend to the left | row, so it cannot | but does not have/|         
|\ \ \ \ :edge of the page. \| extend its        | the il-background |         
| \ \ \ \: \ \ \ \ \ \ \ \ \ | background.       | class, so its/ / /|         
| \ \ \ \: \ \ \ \ \ \ \ \ \ |                   | background will / |         
| \ \ \ \: \ \ \ \ \ \ \ \ \ |                   | not extend./ / / /|         
+----------------------------+-------------------+-------------------+- - - - -
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

When the grid item is an image, the `il-background` will extend it to the edge of the page when appropriate. **Please note** that this has the potential to crop the image in unpredictable ways and is intended for images whose purpose is primary decorative.


```html
<il-section background="grid" color="blue">
  <il-grid columns="2">
    <img src="background.jpg" alt="" class="il-background">
    <div>This content is on the blue background of the section.</div>
  </il-grid>
</il-section>
```
```
+--------------------------------------+-----------------------------+--------+
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ |                             :        |
| \ \ \ \:\ \ \ \ \ \ \ \ \ \ \ \ \ \ \| This content is on the blue :        |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ | background of the section.  :        |
| \ \ \ \:\ \ \ \ \ \ \ \ \ \ \ \ \ \ \|                             :        |
+--------------------------------------+-----------------------------+--------+
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```
