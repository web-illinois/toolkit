# Card

```html
<il-card>
  <h3><a href="granite.html">Granite</a></h3>
  <p>Granite pebbles or boulders are the most common igneous rocks found in glacial deposits in Illinois. They are not native to the state but were brought here by the great ice sheets or glaciers that advanced from southern Canada to cover much of northern United States during Pleistocene time.</p>
</il-card>
```

This card only has one link. Using the `data-il-link` attribute, the link target can be expanded to include the entire card:

```html
<il-card link="true">
  <h3><a href="granite.html">Granite</a></h3>
  <p>Granite pebbles or boulders are the most common igneous rocks found in glacial deposits in Illinois. They are not native to the state but were brought here by the great ice sheets or glaciers that advanced from southern Canada to cover much of northern United States during Pleistocene time.</p>
</il-card>
```
With this setting, clicking the card will take the visitor to the destination of the link.

This feature is not suitable for cards that contain more than one link. Use with multiple links may produce undesired results.

## Actions

## See also

* [Cards](https://www.nngroup.com/articles/cards-component/). Nielsen Normal Group, 11/2/2016