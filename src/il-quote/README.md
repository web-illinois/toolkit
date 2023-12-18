# Quote

This component represents a quote or testimontial, with optional attribution. The quote or testimonial is intended to be intermixed with copy and the quote is highlighted and called out. 

Quotation marks are added automatically before the quote using decorative text. 

The first paragraph in the attribution is bolded and a dash is added to indicate that this is an attribution.

This component should not contain a heading element. 

## Basic use

Example of full quote with linked attribution.

```html
<il-quote>
  <blockquote>Either university presses will embrace new technology and offer scholarly content in new forms
    to researchers and under new business models, or they will follow the music industry and spend
    all of their resources on trying to protect their territory &mdash; unsuccessfully.</blockquote>
  <div slot="attribution">
    <p>Laura Cerruti</p>
    <p><a href="https://site.org">Director of Digital Content Development</a></p>
  </div>
</il-quote>
```

Example of full quote with only a name as attribution.

```html
<il-quote>
  <blockquote>Either university presses will embrace new technology and offer scholarly content in new forms
    to researchers and under new business models, or they will follow the music industry and spend
    all of their resources on trying to protect their territory &mdash; unsuccessfully.</blockquote>
  <div slot="attribution">
    <p>Laura Cerruti</p>
  </div>
</il-quote>
```

Example of full quote with no attribution.

```html
<il-quote>
  <blockquote>Either university presses will embrace new technology and offer scholarly content in new forms
    to researchers and under new business models, or they will follow the music industry and spend
    all of their resources on trying to protect their territory &mdash; unsuccessfully.</blockquote>
</il-quote>
```

## Advanced use

### Changing the background color

This component may vary by color. This component uses the following attribute:

* _color_: white, gray, blue, orange, blue-gradient, orange-gradient. Default is white. 

### Section

You can use the `<il-section>` to create an area that is full width. If you use the background="grid" attribute, it will generate the quote to be the full width of the page

```html
<il-section background="grid">
   <il-quote color="blue">
     <blockquote>xx xxx xxxxxx xxxx xxxxxxx xxx xxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx.</blockquote>
     <div slot="attribution">
       <p>Xxxxx Xxxxxxxx</p>
     </div>
   </il-quote>
</il-section>
```

```
|     : left content boundary                                                   right content boundary :     |
|     :                                                                                                :     |
|------------------------------------------------------------------------------------------------------------|
| (blue)                                                                                                     |
|                                                     "                                                      |
|                                                                                                            |
|          xx xxx xxxxxx xxxx xxxxxxx xxx xxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx.         | 
|                                                                                                            |
|                                              -- Xxxxx Xxxxxxxx                                             |
|                                                                                                            |
|                                                                                                            |
|------------------------------------------------------------------------------------------------------------|
|     :                                                                                                :     |
|     : left content boundary                                                   right content boundary :     |
```
