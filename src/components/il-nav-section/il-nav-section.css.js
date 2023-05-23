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
    all: initial;
    display: block;
    
    //padding: var(--il-nav-section--header--link--padding);
    padding-top: var(--il-nav--item--padding-top, .75em);
    padding-right: var(--il-nav--item--label--padding-right, 1em);
    padding-bottom: var(--il-nav--item--padding-bottom, .75em);
    padding-left: var(--il-nav--item--padding-left, 1em);
    
    background-color: var(--il-nav-section--header--link--background-color);
    color: var(--il-nav-section--header--link--color);
    font: 600 1.1875em/1em var(--il-font-sans);
    cursor: pointer;
    position: relative;
    //width: calc(100% - 2em);
    flex: 1 1 100%;
  }
  #header ::slotted(a:focus),
  #header ::slotted(a:hover) {
    background-color: var(--il-nav-section--header--link--focus--background-color);
    color: var(--il-nav-section--header--link--focus--color);
  }

  button {
    all: initial;
    display: flex;
    flex: 1 1 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: var(--il-nav-section--header--button--background-color);
    color: var(--il-nav-section--header--button--color);
    cursor: pointer;
  }
  button:hover, button:focus {
    background-color: var(--il-nav-section--header--button--focus--background-color);
    color: var(--il-nav-section--header--button--focus--color);
  }
  button ::slotted(*) {
    all: initial;
    position: relative;
    display: block;
    //padding: var(--il-nav-section--header--button--padding);
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
  button .placeholder {
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
    position: relative;
  }
  
  #content {
    display: none;
    pointer-events: none;
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