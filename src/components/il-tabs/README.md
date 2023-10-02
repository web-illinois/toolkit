# il-tabs

Tabs allow multiple sections of content to be combined and viewed one at a time. One section in a tabs component will always be visible. This component follows the [WAI tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) with manual activation.

Each section of content is divided into 2 parts:

* A panel, which contains the primary content
* A tab, which is used to make the panel visible

When a tab is selected, its panel is made visible and other panels are hidden.

## Creating tabs

Tabs are placed in the `tabs` content slot. Tabs can be any block level element, but they must contain the `role="tab"` attribute and an `aria-controls` attribute whose value is the `id` of the corresponding panel.

```html
<il-tabs>
    <div slot="tabs">
        <div role="tab" aria-controls="panel1">Degree Programs</div>
        <div role="tab" aria-controls="panel2">Non-degree Programs</div>
        <div role="tab" aria-controls="panel3">Classroom Experience</div>
    </div>
    <div id="panel1">
      <h3>Degree Programs</h3>
      <!-- ... --->
    </div>
    <div id="panel2">
      <h3>Non-degree Programs</h3>
      <!-- ... --->
    </div>
    <div id="panel3">
      <h3>Classroom Experience</h3>
      <!-- ... --->
    </div>
</il-tabs>
```

Tabs are displayed in a row, and the selected tab is highlighted. The panel for the selected tab is displayed below.

[screenshot]

On smaller screens, the row of tabs collapses to a list.

[screenshot]

## Vertical tabs

In a vertical tab layout, tabs are displayed in a column to the left and the selected tab's panel is visible to the right. To create vertical tabs, use the `direction` attribute with the `vertical` value:

```html
<il-tabs direction="vertical">
```
## Setting the active tab

By default, the first tab is selected on page load. To change which tab is initially selected, use the `data-il-selected` attribute on the tab:

```html
<il-tabs>
    <div slot="tabs">
        <div role="tab" aria-controls="panel1">Degree Programs</div>
        <div role="tab" aria-controls="panel2" data-il-selected="true">Non-degree Programs</div>
        <div role="tab" aria-controls="panel3">Classroom Experience</div>
    </div>
      <!-- ... --->
</il-tabs>
```
