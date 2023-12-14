# Statistic

This is a large number or word that you want to emphasize in a page. It may have header text (before the main text),
footer text (after the main text), and/or an attribution, but the number or word is central to the statistic.

The statistic should read as a complete sentence (minus the attribution).

No header information should be displayed in the statistic.

## Basic use

Example of full statistic with citation.

```html
<il-statistic>
    Nation's <em>Top Six</em> Overall ranking 
    among undergraduate programs in the U.S.
    <p slot="attribution">U.S. News and World 2022</span>
</il-statistic>
```

Example of statistic with only footer text.

```html
<il-statistic>
    <em>97%</em> of our 2020 graduates with teaching degrees 
    plus licensure are employed in the field of education.
</il-statistic>
```

## Advanced use

### Changing the background color and size

This component may vary by color and size. This component uses the following attributes:

* _color_: white, blue, orange, blue-gradient. Note that "orange" will produce a white background with an orange emphasis. Default is white. 
* _size_: small, medium, large, x-large

```html
<il-statistic color="orange" size="x-large">
    Nation's <em>Top Six</em> Overall ranking 
    among undergraduate programs in the U.S.
    <p slot="attribution">U.S. News and World 2022</span>
</il-statistic>
```


The heading color, heading size, and body size will be controlled via CSS attributes, so they can be modified independently. If you do modify the heading color, ensure that the new color has at least 3:1 color contrast. 

### Columns

You can use the `<il-section>` and `<il-grid>` to create columns and backgrounds to show multiple statistics.

If multiple statistics are in a column, the main statistic (including header, main stat, and footer) will be lined up at the middle of the component, and the attribution (if any) will be lined up at the bottom of the component.

```html

<il-section>
  <il-grid columns="3">
    <il-statistic color="blue">
      Xxxxxxx <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
    </il-statistic>
    <il-statistic>
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
    <il-statistic color="blue">
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
  </il-grid>
</il-section>
```

```
|------------------------------------------------------------------------------------------------------------|
|     : (blue)                         : (white)                       : (blue)                        :     |
|     :             Xxxxxxx            :              XX%              :              XX%              :     |
|     :                                :                               :                               :     |
|     :               XX%              :          xx xxx xxxxxx        :          xx xxx xxxxxx        :     | 
|     :                                :         xxxxxxxxxxxxxxx.      :         xxxxxxxxxxxxxxx       :     |
|     :          xx xxx xxxxxx         :                               :        xxxxxxxxxxxxxxxx.      :     |
|     :         xxxxxxxxxxxxxxx.       :                               :                               :     |
|     :                                :           xxxxxxxxxxx         :            xxxxxxxxx          :     |
|     :                                :                               :                               :     |
|------------------------------------------------------------------------------------------------------------|
|     :                                                                                                :     |
|     : left content boundary                                                   right content boundary :     |
```

The statistic component will honor the background grid attribute of the section, and you can use the il-background class to make the statistic flush with the border. 

```html

<il-section background="grid">
  <il-grid columns="3">
    <il-statistic color="blue" class="il-background">
      Xxxxxxx <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
    </il-statistic>
    <il-statistic>
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
    <il-statistic color="blue" class="il-background">
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
  </il-grid>
</il-section>
```

```
|------------------------------------------------------------------------------------------------------------|
|       (blue)                         : (white)                       : (blue)                              |
|                   Xxxxxxx            :              XX%              :              XX%                    |
|                                      :                               :                                     |
|                     XX%              :          xx xxx xxxxxx        :          xx xxx xxxxxx              | 
|                                      :         xxxxxxxxxxxxxxx.      :         xxxxxxxxxxxxxxx             |
|                xx xxx xxxxxx         :                               :        xxxxxxxxxxxxxxxx.            |
|               xxxxxxxxxxxxxxx.       :                               :                                     |
|                                      :           xxxxxxxxxxx         :            xxxxxxxxx                |
|                                      :                               :                                     |
|------------------------------------------------------------------------------------------------------------|
|     :                                                                                                :     |
|     : left content boundary                                                   right content boundary :     |
```
## Accessibility
In compliance with WCAG 2.2 Level AA this component implements the following accessibility features:

Success Criterion 1.3.1 Info and Relationships
Emphasized information in the statistic module is defined through the emphasis tag.

SC 1.3.2 Meaningful Sequence
Content displayed in the markup matches the sequence generated by the web control. 

SC 1.4.1 Use of Color
Color is not used to define pertinent information

SC 1.4.3: Contrast (Minimum) 
There is a minimum contrast ratio of 4.5:1 between the text and the background, following color themes. This may be altered using CSS variables, but guidance is provided to keep proper contrast

SC 1.4.10: Reflow 
The statistic changes size to ensure the information retains proper flow. 

SC 2.4.6 Headings and Labels
Guidance is given to ensure headings are not used in the statistic component. 

SC 2.4.7: Focus Visible 
Focus with the component is clearly indicated using the basic themes.

