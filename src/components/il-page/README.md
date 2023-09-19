# `il-page`

This component is used to create complete web pages. It has slots for the standard header and footer components, and it provides standard margins and line widths for page content.

A basic HTML page using this component would look something like:

```html
<!DOCTYPE html>
<html class="il-toolkit">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ...additional head content... -->
  </head>
  <body>
    <il-page>
      <!-- ...page content... -->
    </il-page>
  </body>
</html>
```
Of note:

1. The `html` element has the `il-toolkit` class. This allows the toolkit to adjust the styling of the parts of the page outside of the `il-page` element, such as the spacing within the `body` element.
2. The `meta name="viewport"` element is necessary for the component to respond appropriately on different screen sizes.
3. The `il-page` element is the first element within the `body` element. Nesting the page component within other elements can cause the layout to behave unpredictably.

## Page margins

In order to increase readability, the page component enforces consistent left and right margins around page content, and limits the line length of content on large screens

```
|                  :Lorem ipsum dolor sit amet,             :                  |
|                  :consectetur adipiscing elit, sed do     :                  |
|                  :eiusmod tempor incididunt ut labore     :                  |
|                  :et dolore magna aliqua.                 :                  |                              
|                  :                                        :                  |
| left edge        : left edge                   right edge :       right edge |
| of screen        : of content                  of content :        of screen |
```

The horizontal distance between the edge of the screen and the edge of the content is the same on the left and right sides of the page. This distance is called the **page margin**.

On screens smaller than 650 pixels wide, the page margin is 20 pixels.

```
+---------------------+
| :Lorem ipsum      : |
| :dolor sit amet,  : |
| :consectetur      : |
| :adipiscing elit, : |
| :sed do eiusmod   : |
| :tempor incididunt: |
| :ut labore et     : |
| :dolore magna     : |
| :aliqua.          : |
| :                 : |
+---------------------+
\ /                 \ /
20px               20px
```

On screens 650 pixels wide or larger, the page margin is 30 pixels.

```
+-----------------------------+
|  :Lorem ipsum dolor      :  |
|  :sit amet, consectetur  :  |
|  :adipiscing elit, sed   :  |
|  :do eiusmod tempor      :  |
|  :incididunt ut labore   :  |
|  :et dolore magna aliqua.:  |
|  :                       :  |
|  :                       :  |
|  :                       :  |
|  :                       :  |
|  :                       :  |
+-----------------------------+
\  /                       \  /
30px                       30px
```

The maximum width of the content area is 1140 pixels. When the screen size is wider than the maximum width, the page margin increases to take up the available space.

```
 _____________________________ 1600px ____________________________
/                                                                 \
+------------------------------------------------------------------+
|        :Lorem ipsum dolor sit amet, consectetur         :        |
|        :adipiscing elit, sed do eiusmod tempor          :        |
|        :incididunt ut labore et dolore magna aliqua.    :        |
|        :                                                :        |
+------------------------------------------------------------------+
 \       /\_______________________  _____________________/\       /
   230px                        1140px                      230px
```

```
 _____________________________________ 2000px ____________________________________
/                                                                                 \
+----------------------------------------------------------------------------------+
|                :Lorem ipsum dolor sit amet, consectetur         :                |
|                :adipiscing elit, sed do eiusmod tempor          :                |
|                :incididunt ut labore et dolore magna aliqua.    :                |
|                :                                                :                |
+----------------------------------------------------------------------------------+
\_______  _______/\__________________________  __________________/\_______  ______/
      430px                                1140px                       430px
```


## Adding a header and footer

The page component has predefined content slots intended for the `il-header` and `il-footer` components. Using these content slots ensures that the header and footer are properly identified as ARIA landmarks where appropriate, and that they are positioned correctly with regard to other elements on the page.

```html
<il-page>
  <il-header slot="header">
    <!-- ...header content... -->
  </il-header>

  <!-- ...page content... -->

  <il-footer slot="footer">
    <!-- ...footer content... -->
  </il-footer>
</il-page>
```
