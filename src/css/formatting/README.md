# Basic formatting

The toolkit contains a set of basic styles for generic HTML markup.

Scoped to .il-formatted

Intended for content that does not contain CSS classes or specific styling. When used in combination with other styling, you should expect to see side effects.

## Development guidelines

* Don't use !important
* All spacing above block elements. This allows us to override the spacing between two particular elements (e.g. h2 + p, p + ol)

## Where do styles go?

### For sequential selectors (e.g. h2 + p)

* If one of the elements is in a specific stylesheet (i.e. not in _index.scss) the rule should go in the more specific stylesheet
* If both elements are in a specific stylesheet, the rule should go in the stylesheet that corresponds with the second element. A rule for h2 + ol would be placed in the lists stylesheet, but ol + h2 would be placed in the heading stylesheet. Remember: spacing always belongs to the element below the spacing.