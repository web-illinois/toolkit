import {css} from "lit";

export default css`
  .header-with-link {
    all: initial;
    box-sizing: border-box;
    display: grid;
    position: relative;
    width: 100%;

    grid-template-columns: auto max-content;
    grid-column-gap: 0;
    background: var(--il-nav-item-background);
    color: var(--il-nav-item-color);
  }
  .header-with-link .link {
    display: block;
    font: var(--il-nav-section-header-weight) 1rem/1.25rem var(--il-font-sans);
    white-space: nowrap;
    background: var(--il-nav-section-header-background);
    color: var(--il-nav-section-header-color);
  }
  .header-with-link .toggle {
    all: initial;
    display: block;
    padding-left: var(--il-nav-section-indicator-padding-left);
    padding-right: var(--il-nav-item-padding-right);
    padding-top: var(--il-nav-item-padding-top);
    padding-bottom: var(--il-nav-item-padding-bottom);
    border-bottom-color: var(--il-nav-item-border-bottom-color);
    border-bottom-width: var(--il-nav-item-border-bottom-width);
    border-bottom-style: solid;
    width: var(--il-nav-section-indicator-width);
    cursor: pointer;
    background: var(--il-nav-section-header-background);
    color: var(--il-nav-section-header-color);
  }
  .header-with-link .toggle:hover, .header-with-link .toggle:focus {
    background: var(--il-nav-item-focus-background);
    color: var(--il-nav-item-focus-color);
  }
  .header-with-link .toggle:focus {
    outline: 2px dotted;
  }
`