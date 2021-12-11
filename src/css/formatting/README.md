# Basic formatting

The stylesheets in this folder are designed for generic HTML markup, i.e. HTML elements in the page that do not belong to a specific component and are not referenced by a specific class name.

These styles are applied to markup that meets one of the following conditions:

* It is wrapped with an <il-page> element
* It is wrapped with an element of class "il-formatted"

## Spacing between block elements

Spacing between block elements is controlled exclusively by the margin-top property of the elements. All block level elements should have a margin-bottom equal to 0, and should not use padding-top or padding-bottom to add space between adjacent elements. 

The [adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) should be used to control the spacing between specific elements. In the following example, element <x> has 1em of spacing between itself and the element that immediately precedes it. However, when <x> immediately follows element <y>, there is 2em of spacing between the two elements. The CSS would be as follows:

````css
x { margin-top: 1em; }
y + x { margin-top: 2em; }
````

Using these two techniques - default space above an element and custom spacing between two specific elements - you should be able to control the spacing between all formatted elements.
