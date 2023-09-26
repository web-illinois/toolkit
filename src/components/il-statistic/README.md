# `il-statistic`

This is a large number or word that you want to emphasize in a page. It may have header text (before the main text), footer text (after the main text), and/or a source, but the number or word is central to the statistic. 

The header text, main text, or footer text is never a hyperlink. The main text is wrapped in a `<em></em>` tag. The header text is wrapped in a `<span slot='source'></span>` tag. The source text may be a link and is wrapped in a `<span slot='source'></span>` tag. None of the text is a header, list, or other component other than plain text. 

There will always be one and only one `<em>` in the component. 

## Basic use

Example of full statistic with citation.

```
<il-statistic>
    <span slot='header'>Nation's <em>Top Six</em> Overall ranking 
    among undergraduate programs in the U.S.
    <span slot='source'>U.S. News and World 2022</span>
</il-statistic>
```

Example of statistic with only footer text.

```
<il-statistic>
    <em>97%</em> of our 2020 graduates with teaching degrees 
    plus licensure are employed in the field of education.
</il-statistic>
``````

## Advanced use

### Changing the background color and size

This component will respect theme colors and em sizes. You can increase and decrease the size of these items independently by using CSS. 

You can use CSS to change the color of the emphasized number or text.

### Columns 

You can use the `<il-section>` and `<il-grid>` to create columns and backgrounds to show multiple . 

```
<il-section class="il-blue">
    <il-grid columns="3">
        <il-statistic>
            <span slot='header'>Xxxxxxx</span><em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx.
        </il-statistic>
        <il-statistic>
            <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx. <span slot='source'>xxxxxxxx</span>
        </il-statistic>
        <il-statistic>
            <em>XX%</em> xx xxx xxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx.<span slot='source'>xxxxxxxx</span>
        </il-statistic>
    </il-grid>
</il-section>
```

If multiple statistics are in a column, the main statistic will be lined up at the middle of the component, and the source will be lined up at the bottom of the component. 

```
               Xxxxxxxxx           |                               |                               |
                                   |                               |                               |
                  XX%              |              XX%              |              XX%              |
                                   |                               |                               |
             xx xxx xxxxxx         |          xx xxx xxxxxx        |          xx xxx xxxxxx        | 
            xxxxxxxxxxxxxxx.       |         xxxxxxxxxxxxxxx.      |         xxxxxxxxxxxxxxx       |
                                   |                               |         xxxxxxxxxxxxxxx.      |
                                   |                               |                               |
                                   |           xxxxxxxxxxx         |            xxxxxxxxx          |
```