# `il-accordion`

[Accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) arrange multiple sections of content into columns. Each section can be expanded or collapsed by the user.

Each section of an accordion contains 2 parts:

* The <dfn>header</dfn> acts as a label or summary for the section. The header is always visible. Clicking on the header expands or collapses the section. This is usually a heading element, but it is not required.
* The <dfn>panel</dfn> contains content that is visible when the section is expanded. A panel can include any valid markup, but should not contain other toolkit components.

The `il-accordion` element contains 1 or more `il-accordion-panel` components, each of which defines its corresponding `header`.

```html
<il-accordion>
  <il-accordion-panel>
    <h3 slot="header">Student Services</h3>
    <div>

      <!-- ...content of "Student Services" panel... -->

    </div>
  </il-accordion-panel>
  <il-accordion-panel>
    <h3 slot="header">Faculty Services</h3>
    <div>

      <!-- ...content of "Faculty Services" panel... -->

    </div>
  </il-accordion-panel>
  
  <!-- ...additional panels... -->
  
</il-accordion>
```

## Limiting the number of expanded panels

By default, there is no limit to the number of panels which can be expanded at one time. Use the `limit` attribute to keep only one panel expanded at a time.

```html
<il-accordion limit="1">
  
  <!-- ...accordion panels... -->
  
</il-accordion>
```

*Note:* the only valid value for the `limit` attribute is `1`.

When a panel is expanded in an accordion using the `limit` attribute, any previously expanded panels are collapsed.

## Expanding a section by default

To control the initial state of a panel when the page is loaded, use the `data-il-state` attribute. Possible values for this attribute are:

* `collapsed` sets the panel to be collapsed on page load
* `expanded` sets the panel to be expanded on page load

```html
<il-accordion>
  <il-accordion-panel data-il-state="expanded">
    <h3 slot="header">Expanded section</h3>
    
    <!-- ...this content will be visible... --->
    
  </il-accordion-panel>
  <il-accordion-panel data-il-state="collapsed">
    <h3 slot="header">Test #2 information</h3>

    <!-- ...this content will be hidden... --->

  </il-accordion-panel>
</il-accordion>
```
When using the `limit="1"` attribute and multiple panels with `data-il-state="expanded"`, only the last panel will be expanded on page load.