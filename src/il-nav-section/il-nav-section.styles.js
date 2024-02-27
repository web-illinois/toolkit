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
    
    padding: var(--il-nav-item-padding);
    grid-template-columns: auto var(--il-nav-section-indicator-width);
    grid-column-gap: var(--il-nav-section-header-gap);
    background: var(--il-nav-item-background);
    color: var(--il-nav-item-color);
  }
  .header:hover, .header:focus {
    background: var(--il-nav-item-focus-background);
    color: var(--il-nav-item-focus-color);
  }
  .header:focus {
    outline: 2px dotted;
  }
  .header .label {
    display: block;
    font: var(--il-nav-section-header-weight) 1rem/1.25rem var(--il-font-sans);
    white-space: nowrap;
    color: inherit;
  }
`