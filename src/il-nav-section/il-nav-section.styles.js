import {css} from "lit";

export default css`
  :host {
    display: block;
  }
  .section {
    position: relative;
  }
  
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
    background: var(--il-nav-item-background);
    color: var(--il-nav-item-color);
  }
  .header-with-link .toggle {
    all: initial;
    display: block;
    padding: var(--il-nav-item-padding);
    width: var(--il-nav-section-indicator-width);
    cursor: pointer;
    background: var(--il-nav-item-background);
    color: var(--il-nav-item-color);
  }
  .header-with-link .toggle:hover, .header-with-link .toggle:focus {
    background: var(--il-nav-item-focus-background);
    color: var(--il-nav-item-focus-color);
  }
  .header-with-link .toggle:focus {
    outline: 2px dotted;
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
  .expanded.section .indicator svg {
    transform: var(--il-nav-expanded-section-indicator-transform);
  }

  .items {
    display: none;
    width: var(--il-nav-items-width, auto);
    position: var(--il-nav-section-items-position);
    left: var(--il-nav-section-items-left);
    top: var(--il-nav-section-items-top);
    padding: var(--il-nav-items-padding, 0);
    background: var(--il-nav-items-background, transparent);
  }
  .expanded.section .items {
    display: block;
  }`