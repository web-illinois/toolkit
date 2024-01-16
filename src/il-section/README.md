# Sections

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

