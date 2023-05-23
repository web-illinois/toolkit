import { css } from 'lit';

export default css`
  :host {
    position: relative;
    display: var(--il-nav-section-display);
    width: var(--il-nav-section-width);
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
    padding: var(--il-nav-section--header--link--padding);
    background-color: var(--il-nav-section--header--link--background-color);
    color: var(--il-nav-section--header--link--color);
    font: 600 1.1875em/1em var(--il-font-sans);
    cursor: pointer;
    position: relative;
    width: calc(100% - 2em);
  }
  #header ::slotted(a:focus),
  #header ::slotted(a:hover) {
    background-color: var(--il-nav-section--header--link--focus--background-color);
    color: var(--il-nav-section--header--link--focus--color);
  }
  
  button {
    all: initial;
    display: var(--il-nav-section--header--button--display);
    flex: 1 1 2em;
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
    display: block;
    padding: var(--il-nav-section--header--button--padding);
    background-color: inherit;
    color: inherit;
    font: 600 1.1875em/1em var(--il-font-sans);
    pointer-events: none;
    width: calc(100% - 3em);
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

  #icon {
    display: flex;
    flex: 1 0 2em;
    justify-content: center;
    align-items: center;
    padding: var(--il-nav-section--header--icon--padding);
  }
  #chevron {
    position: relative;
    width: 1.2em;
    height: 1.2em;
    overflow: hidden;
    transform: var(--il-nav-section--header--icon--transform);
    opacity: .75;
  }
  button:hover #chevron, button:focus #chevron {
    opacity: 1;
  }
  #chevron svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }


  #content {
    position: var(--il-nav-section--content--position);
    top: var(--il-nav-section--content--top);
    left: var(--il-nav-section--content--left);
    z-index: 100;
    display: none;
    width: var(--il-nav-section--content--width);
    pointer-events: none;
    padding: var(--il-nav-section--content--padding, 0);
    margin: var(--il-nav-section--content--margin, 0);
    background-color: var(--il-nav-section--content--background-color, transparent);
  }
  .expanded #content {
    display: block;
    pointer-events: all;
  }
  
  
  /*
  button {
    all: initial;
    display: flex;
    flex: 1 1 2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  button ::slotted(*) {
    display: block;
    position: relative;
    width: calc(100% - 3em);
    align-self: flex-start;
  }
  #chevron {
    position: relative;
    display: flex;
    flex: 1 0 2em;
    justify-content: center;
    align-items: center;
  }
  #chevron svg {
    position: relative;
    display: block;
    width: 2em;
    height: 2em;
  }
   */
`