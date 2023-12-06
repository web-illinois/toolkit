# Statistic

This is a large number or word that you want to emphasize in a page. It may have header text (before the main text),
footer text (after the main text), and/or an attribution, but the number or word is central to the statistic.

The statistic should read as a complete sentence (minus the attribution).

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

This component will respect theme colors and em sizes. You can increase and decrease the size of these items
independently by using CSS.

You can use CSS to change the color of the emphasized number or text.

### Columns

You can use the `<il-section>` and `<il-grid>` to create columns and backgrounds to show multiple statistics.

```html

<il-section class="il-blue">
  <il-grid columns="3">
    <il-statistic>
      Xxxxxxx <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
    </il-statistic>
    <il-statistic>
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
    <il-statistic>
      <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx.
      <span slot="attribution">xxxxxxxx</span>
    </il-statistic>
  </il-grid>
</il-section>
```

If multiple statistics are in a column, the main statistic (including header, main stat, and footer) will be lined up at the middle of the component, and the
attribution (if any) will be lined up at the bottom of the component.

```
|                                |                               |                               |
|             Xxxxxxx            |              XX%              |              XX%              |
|                                |                               |                               |
|               XX%              |          xx xxx xxxxxx        |          xx xxx xxxxxx        | 
|                                |         xxxxxxxxxxxxxxx.      |         xxxxxxxxxxxxxxx       |
|          xx xxx xxxxxx         |                               |         xxxxxxxxxxxxxxx.      |
|         xxxxxxxxxxxxxxx.       |                               |                               |
|                                |           xxxxxxxxxxx         |            xxxxxxxxx          |
|                                |                               |                               |
```
