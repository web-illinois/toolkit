import {css} from "lit";

export const baseStyles = css`
  :host {
    display: block;
  }
  .section {
    position: relative;
    background: var(--il-nav-section-background);
  }
  .indicator {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .indicator svg {
    display: block;
    position: relative;
    fill: currentColor;
    width: var(--il-nav-section-indicator-width);
    height: var(--il-nav-section-indicator-width);
    transform: var(--il-nav-section-indicator-transform);
  }
  .items {
    display: none;
    width: var(--il-nav-section-items-width);
    position: var(--il-nav-section-items-position);
    left: var(--il-nav-section-items-left);
    top: var(--il-nav-section-items-top);
    padding: var(--il-nav-items-padding, 0);
    border-top: var(--il-nav-section-items-border-top);
  }

  .expanded.section .indicator svg {
    transform: var(--il-nav-expanded-section-indicator-transform);
  }
  .expanded.section .items {
    display: block;
  }
`

export default css`
  .header {
    all: initial;
    box-sizing: border-box;
    cursor: pointer;
    display: grid;
    position: relative;
    width: 100%;
    border-bottom-color: var(--il-nav-item-border-bottom-color);
    border-bottom-width: var(--il-nav-item-border-bottom-width);
    border-bottom-style: solid;
    padding-left: var(--il-nav-item-padding-left);
    padding-right: var(--il-nav-item-padding-right);
    padding-top: var(--il-nav-item-padding-top);
    padding-bottom: var(--il-nav-item-padding-bottom);
    grid-template-columns: auto var(--il-nav-section-indicator-width);
    grid-column-gap: var(--il-nav-section-header-gap);
    background: var(--il-nav-item-background);
    color: var(--il-nav-item-color);
  }
  .header .label {
    display: block;
    font: var(--il-nav-section-header-weight) 1rem/1.25rem var(--il-font-sans);
    white-space: nowrap;
    color: inherit;
  }
`




export const withLink = css`
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