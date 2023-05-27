import { css } from 'lit';

export default css`
  :host {
    position: relative;
    display: block;
  }
  
  #container {
    position: relative;
    display: block;
  }

  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  #header ::slotted(a) {
    display: block;
    
    padding-top: var(--il-nav--item--padding-top, .75em);
    padding-right: var(--il-nav--item--label--padding-right, 1em);
    padding-bottom: var(--il-nav--item--padding-bottom, .75em);
    padding-left: var(--il-nav--item--padding-left, 1em);
    
    background-color: var(--il-nav-section--header--link--background-color);
    color: var(--il-nav-section--header--link--color);
    line-height: 1em;
    font-family: var(--il-font-sans);
    font-size: var(--il-nav-section--header--link--font-size, 1.1875em);
    font-weight: var(--il-nav-section--header--link--font-weight, 600);
    cursor: pointer;
  }
  #header ::slotted(a:focus),
  #header ::slotted(a:hover) {
    background-color: var(--il-nav-section--header--link--focus--background-color);
    color: var(--il-nav-section--header--link--focus--color);
  }

  #toggle {
    all: initial;
    display: flex;
    flex: 1 1 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: var(--il-nav-section--header--button--background-color);
    color: var(--il-nav-section--header--button--color);
    cursor: pointer;
    pointer-events: var(--il-nav-section--header--button--pointer-events, all);
  }
  #toggle:hover, #toggle:focus {
    background-color: var(--il-nav-section--header--button--focus--background-color);
    color: var(--il-nav-section--header--button--focus--color);
  }
  #toggle ::slotted(*) {
    all: initial;
    position: relative;
    display: block;
    padding-top: var(--il-nav--item--padding-top, .75em);
    padding-right: var(--il-nav--item--label--padding-right, 1em);
    padding-bottom: var(--il-nav--item--padding-bottom, .75em);
    padding-left: var(--il-nav--item--padding-left, 1em);

    background-color: inherit;
    color: inherit;
    font: 600 1.1875em/1em var(--il-font-sans);
    pointer-events: none;
    flex: 1 1 100%;
    align-self: flex-start;
  }
  #toggle .placeholder {
    position: absolute;
    left: -99vw;
    top: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    text-indent: 99vw;
    white-space: nowrap;
  }
  #indicator {
    box-sizing: border-box;
    flex: 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: var(--il-nav--item--padding-top);
    padding-right: var(--il-nav--item--padding-right);
    padding-bottom: var(--il-nav--item--padding-bottom);
    padding-left: var(--il-nav--item--indicator--padding-left);
  }
  il-nav-indicator {
    display: var(--il-nav-section--indicator--display, block);
    position: relative;
  }
  
  #content {
    display: var(--il-nav-section--content--display, none);
    pointer-events: var(--il-nav-section--content--pointer-events, none);
    z-index: 100;
    background-color: var(--il-nav-section--content--background-color, transparent);
    left: var(--il-nav-section--content--left, 0);
    margin: var(--il-nav-section--content--margin, 0);
    padding: var(--il-nav-section--content--padding, 0);
    position: var(--il-nav-section--content--position, relative);
    top: var(--il-nav-section--content--top, 0);
    width: var(--il-nav-section--content--width, 100%);
  }
  .expanded #content {
    display: block;
    pointer-events: all;
  }
  
  
`