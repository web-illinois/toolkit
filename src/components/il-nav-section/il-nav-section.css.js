import { css } from 'lit';

export default css`
  :host {
    position: relative;
    display: block;
    width: 100%;
  }
  #section {
    position: relative;
    display: block;
  }
  button {
    all: initial;
    display: flex;
    flex: 1 1 2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: var(--il-blue);
    color: white;
    cursor: pointer;
  }
  button:hover, button:focus {
    background-color: var(--il-orange);
    color: var(--il-blue);
  }
  button ::slotted(*) {
    all: initial;
    display: block;
    padding: .75em;
    background-color: inherit;
    color: inherit;
    font: 600 1.1875em/1em var(--il-font-sans);
    pointer-events: none;
  }

  #icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
  #chevron {
    position: relative;
    width: 1.2em;
    height: 1.2em;
    overflow: hidden;
    transform: rotate(-90deg);
    opacity: .75;
  }
  #chevron svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }


  #content {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
  }
  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  /*
  #section {
    position: relative;
    display: block;
  }
  #header ::slotted(a) {
    display: block;
    position: relative;
    width: calc(100% - 3em);
  }
  button {
    all: initial;
    display: flex;
    flex: 1 1 2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  button .placeholder {
    position: absolute;
    left: -99vw;
    width: 1px;
    height: 1px;
    overflow: hidden;
    text-indent: 1px;
    white-space: nowrap;
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