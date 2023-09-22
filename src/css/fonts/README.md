# Fonts

The toolkit contains a number of CSS variables that make it easy to use the official campus typefaces in any stylesheet.

For guidelines on font usage, see the [typography page on the brand website](https://brand.illinois.edu/visual-identity/typography).

## Using the keyword variables

The toolkit has 3 keyword variables that can be used to select a font by its general type, e.g. serif or sans serif. These variables will always use the preferred typeface for the requested type and are intended to be more future-proof than the specific font variables.

```css
p {
  font-family: var(--il-font-sans);
}
h3 {
  font-family: (--il-font-serif);
}
```
The following table shows how the keyword variable map to specific typefaces:

| Variable            | Font                |
|---------------------|---------------------|
| `il-font-sans`      | Source Sans         |
| `il-font-serif`     | Georgia             |
| `il-font-condensed` | Open Sans Condensed |

## Using specific fonts

The toolkit also includes variables for using specific typefaces.

```css
h2 {
  font-family: var(--il-montserrat);
}
```

The following table shows the available fonts and their variable names:

| Font                | Variable                   | Styles          | Weights          |
|---------------------|----------------------------|-----------------|------------------|
| Montserrat          | `--il-montserrat`          | normal, italic  | variable (1-999) |
| Source Sans         | `--il-source-sans`         | normal, italic  | variable (1-999) |
| Georgia             | `--il-georgia`             | normal, italic  | normal, bold     |
| Open Sans Condensed | `--il-open-sans-condensed` | normal, italic, | variable (1-999) |
