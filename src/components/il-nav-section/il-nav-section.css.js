import { css } from 'lit';

export default css`
  #chevron {
    display: none;
  }
  button ::slotted(*) {
    pointer-events: none;
  }
  /*
  :host {
    position: relative;
    display: block;
  }
  #section {
    container-type: inline-size;
    position: relative;
    display: block;
  }
  #header {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  #content {
    position: absolute;
    top: 100%;
    left: 0;
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