# `il-grid`

Grids arrange their content into rows, each row divided into a prescribed number of columns. Items in the grid are arranged from left to right until the row is full, then from left to right again in a new row below the previous row.

The maximum number of columns is 6. 

The following markup defines a 3-column grid containing 9 items:

```html
<il-grid columns="3">
  <p>Item #1</p>
  <p>Item #2</p>
  <p>Item #3</p>
  <p>Item #4</p>
  <p>Item #5</p>
  <p>Item #6</p>
  <p>Item #7</p>
  <p>Item #8</p>
  <p>Item #9</p>
</il-grid>
```

These items would be arranged as follows:

```
+---------+---------+---------+
| Item #1 | Item #2 | Item #3 |
+---------+---------+---------+
| Item #4 | Item #5 | Item #6 |
+---------+---------+---------+
| Item #7 | Item #8 | Item #9 |
+---------+---------+---------+
```

In circumstances where there is not enough horizontal space for the desired number of columns, the grid will reduce the number of columns until there is an appropriate amount of space. Where there is only enough space for 2-columns, the grid above would be arranged as follows:

```
+---------+---------+
| Item #1 | Item #2 |
+---------+---------+
| Item #3 | Item #4 |
+---------+---------+
| Item #5 | Item #6 |
+---------+---------+
| Item #7 | Item #8 |
+---------+---------+
| Item #9 |
+---------+
```

In cases where there is not enough horizontal space to arrange items in multiple columns, items are arranged in a single column:

```
+---------+
| Item #1 |
+---------+
| Item #2 |
+---------+
| Item #3 |
+---------+
| Item #4 |
+---------+
| Item #5 |
+---------+
| Item #6 |
+---------+
| Item #7 |
+---------+
| Item #8 |
+---------+
| Item #9 |
+---------+
```

## Grid bases

The toolkit uses one of two different grid bases, based on the number of columns. The 4-column grid base can accommodate grids of 1, 2, or 4 columns:

```
         :                                                           :
-------------------------------------------------------------------------------
         :              .              *              .              :
         :              .              *              .              :
         :              .              *              .              :
         :              .              *              .              :
         :              .              *              .              :
-------------------------------------------------------------------------------
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

The 6-column grid base can accommodate grids of 1, 2, 3, or 6 columns:

```
         :                                                           :
-------------------------------------------------------------------------------
         :         .         *         .         *         .         :
         :         .         *         .         *         .         :
         :         .         *         .         *         .         :
         :         .         *         .         *         .         :
         :         .         *         .         *         .         :
-------------------------------------------------------------------------------
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```


## Using grids as section backgrounds

Grids can be used as section backgrounds to create complex layouts. A background grid takes up the full width of the section but it is designed to match the grid in the content area.

For instance, the following markup defines a section containing a 3-column grid, with content in the middle column:

```html
<il-section>
  <il-grid columns="3">
    <div></div>
    <div>Content</div>
    <div></div>
  </il-grid>
</il-section>
```
On a desktop monitor, this might look like:

```
         :       1/3         :       1/3         :       1/3         :
.............................+-------------------+.............................
         :                   |                   |                   :
         :                   |   Content         |                   :
         :                   |                   |                   :
         :                   |                   |                   :
         :                   |                   |                   :
.............................+-------------------+.............................
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

The grid is contained by the left and right content boundaries, and each column of the grid takes up 1/3 of that space.

A similar grid can be placed in the background of the section, in order to fill the empty columns with a background images:

```html
<il-section>
  <il-grid slot="background" columns="3">
    <img src="stripes-1.png" alt="">
    <div></div>
    <img src="stripes-2.png" alt="">
  </il-grid>
  <il-grid columns="3">
    <div></div>
    <div>Content</div>
    <div></div>
  </il-grid>
</il-section>
```
This would produce something like:

```
         :       1/3         :       1/3         :       1/3         :
+----------------------------+-------------------+----------------------------+
|\ \ \ \ : \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / : / / / /| 
| \ \ \ \:\ \ \ \ \ \ \ \ \ \|   Content         |/ / / / / / / / / /:/ / / / |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / : / / / /|
| \ \ \ \:\ \ \ \ \ \ \ \ \ \|                   |/ / / / / / / / / /:/ / / / |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ |                   | / / / / / / / / / : / / / /|
+----------------------------+-------------------+----------------------------+
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```
Notice that the background grid is wider than the content grid, and yet the edges of the columns line up. The first and last columns of a background grid will expand to take up additional space on the edges of the page, and will generally be wider than middle columns.

### Example: Image/content split

The goal is a section with an image on one side and text on the other. The image should stretch from the left edge to the center of the screen. The text side should have a blue background which extends to the right edge of the page, but the text should stay within the content boundaries:

```
         :             1/2             :             1/2             :
+--------------------------------------+--------------------------------------+
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ |                             :        |
| \ \ \ \:\ \ \ \ \ \ \ \ \ \ \ \ \ \ \|  This text does not         :        |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ |  extend beyond the content  :        |
| \ \ \ \:\ \ \ \ \ \ \ \ \ \ \ \ \ \ \|  boundaries, but its        :        |
|\ \ \ \ : \ \ \ \ \ \ \ \ \ \ \ \ \ \ |  background does            :        |
| \ \ \ \:\ \ \ \ \ \ \ \ \ \ \ \ \ \ \|                             :        |
+--------------------------------------+--------------------------------------+
         :                                                           :
         : left content                                right content :
         : boundary                                         boundary :
```

The markup would be a 2-column grid with content in the second column of the grid. The background of the section would be another 2-column grid, with an image in the first column.

```html
<il-section color="blue">
  <il-grid slot="background" columns="2">
    <img src="diagonal-stripes.png" alt="">
    <div></div>
  </il-grid>
  <il-grid columns="2">
    <div></div>
    <div>This text does not extend beyond the content boundaries, but its background does</div>
  </il-grid>
</il-section>
```
