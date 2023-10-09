# Grid

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
