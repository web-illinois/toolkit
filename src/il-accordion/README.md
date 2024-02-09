# Accordion

[Accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) arrange multiple sections of content into columns. Each section can be expanded or collapsed by the user.

Accordions are composed of multiple <dfn>sections</dfn> which are either <dfn>expanded</dfn> or <dfn>collapsed</dfn>. Each section contains 2 parts:

* The <dfn>header</dfn> provides a label or summary for the section, and acts as the control for expanding or collapsing the section. Headers should be a section heading element (`<h2>`-`<h6>`) or an element with `role="heading"`, and must be the appropriate level for their position in the document. Because the header also acts as a control, header text should be as concise as possible for the benefit of speech-input users.
* The <dfn>panel</dfn> contains content that is visible when the section is expanded.

<object class="sample" type="text/html" data="samples/three-sections.html">
  An accordion with three sections
</object>

## Limiting the number of expanded panels

By default, there is no limit to the number of panels which can be expanded at one time. Use the `limit` attribute to keep only one panel expanded at a time.

<object class="sample" type="text/html" data="samples/with-limit.html#5">
  An accordion with a limit attribute
</object>

*Note:* the only valid value for the `limit` attribute is `1`.

When a panel is expanded in an accordion using the `limit` attribute, any previously expanded panels are collapsed.

## Expanding a section by default

Adding `data-expanded="true"` to an accordion section will cause that section to be expanded by default.

<object class="sample" type="text/html" data="samples/with-expanded-section.html#6">
  An accordion with an expanded section
</object>

When using the `limit="1"` attribute and multiple panels with `data-expanded="true"`, only the last panel will be expanded on page load.

## Accessibility features

An invisible button within each panel element toggles the state of that panel. This button is placed between the header and the panel in the document flow and should act as a prompt to expand or collapse the panel. The button element contains an `aria-controls` attribute which references the panel content. It contains an `aria-expanded` attribute which will be either `true` or `false` depending on if the section is expanded or collapsed.

The appearance of a section's header changes when its adjacent toggle button receives focus. When the button loses focus, the header reverts to its default appearance.

The toggle button uses the content of the adjacent header as its label, by means of an `aria-labelledby` attribute which references the header content. 

### Relevant success criteria

* SC 1.3.1: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
* SC 1.3.2: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.
* SC 1.3.5: The purpose of each input field collecting information about the user can be programmatically determined when:
  * The input field serves a purpose identified in the Input Purposes for user interface components section; and
  * The content is implemented using technologies with support for identifying the expected meaning for form input data.
* SC 1.3.6: In content implemented using markup languages, the purpose of user interface components, icons, and regions can be programmatically determined.
* SC 2.4.3: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
* SC 2.4.6: Headings and labels describe topic or purpose.
* SC 2.4.7: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
* SC 2.4.11: When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.
* SC 2.5.3: For user interface components with labels that include text or images of text, the name contains the text that is presented visually.
* 