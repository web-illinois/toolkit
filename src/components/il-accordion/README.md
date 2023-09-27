# `il-accordion` and `il-accordion-panel`

This is a vertically stacked set of headings that contain a title or content snippet. The headings act as controls that allow users to show or hide the content associated with the heading (content stored in an il-accordion-panel). Opening one accordion panel may or may not close other panels in the accordion, depending on configuration. 

https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

## Basic use
```
<il-accordion>
    <il-accordion-panel>
        <h3 slot="header">Test #1 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #2 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #3 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
</il-accordion>
```

### Use limitations

* An `il-accordion` component may only contain `il-accordion-panel` components.
* An `il-accordion-panel` component must have a *header* slot, and this slot must contain a heading (h2 - h6).
* An `il-accordion-panel` component may be used outside of an `il-accordion` component. However, consider if you want to use a single `il-accordion-panel` component or a `<details><summary>` HTML element. 

## Styling

The `il-accordion` can take theme classes as normal. By default, the accordion is black headings, gray background on the headings. 

The heading size in the accordion panel is fixed (in other words, an h2 and h3 will have the same size). This can be changed by updating the em size on the header. 

The `il-accordion` and `il-accordion-panel` components will expand to fill as much space as possible with no margins. The `il-accordion-panel` will indent the content inside it so the text will align with the heading. 

The `il-accordion-panel` component does not style its contents. If you want the contents to be styled, you must use another component. 

The `il-accordion-panel` uses the `il-nav-indicator` component. 

## Open Multiple

By default, if you open one accordion, the rest will close. You can change this behavior to allow multiple to be open by using the `multiple` attribute
```
<il-accordion multiple>
    <il-accordion-panel>
        <h3 slot="header">Test #1 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #2 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #3 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
</il-accordion>
```

## Start as open

By default, all items will be closed. You can choose to start one as open by using the `open` attribute on the il-accordion-panel. 
```
<il-accordion>
    <il-accordion-panel open>
        <h3 slot="header">Test #1 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #2 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
    <il-accordion-panel>
        <h3 slot="header">Test #3 information</h3>
        <il-content>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </il-content>
    </il-accordion-panel>
</il-accordion>
```