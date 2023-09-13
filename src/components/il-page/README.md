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
