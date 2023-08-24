# il-layout

The layout component is a presentation element for arranging elements onscreen. Content within the layout component is arranged on a regular grid.

## Basic usage

The most basic layout presents its content in the following environment:

- default spacing from the left/right edges of the screen, and from the elements directly above/below the layout
- maximum width of the content in the layout

This ensures a regular horizontal position of content as well as adequate vertical spacing between page components.

````html
<il-layout>
  <p>Layout content</p>
</il-layout>
````

### Backgrounds

```html
<il-layout color="blue">
</il-layout>
```

```html
<il-layout>
	<div slot="background">
		<img src="background.jpg" aria-hidden="true" alt="Wallpaper">
	</div>
	<div>Content</div>
</il-layout>
```

### Columns

```html
<il-layout columns="3">
	<div>Column #1</div>
	<div>Column #2</div>
	<div>Column #3</div>
</il-layout>
```

### Pages

```html
<il-layout type="page">
</il-layout>
```


## Specifications

## Advanced usage

## FAQ