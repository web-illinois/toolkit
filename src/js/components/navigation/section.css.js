import {css} from 'lit';

export default css`
  :host {
    display: block;
  }
  
  .section {
    position: relative;
  }

  /* Heading */

  .heading {
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    display: block;
    align-items: baseline;
    min-width: 100%;
    margin: 0;
    padding: 0 var(--il-nav-section-heading-indicator-width) 0 0;
    text-align: left;
    background: var(--il-nav-background);
    color: var(--il-nav-color);
  }
  .heading:hover {
    background: var(--il-nav-hover-background);
    color: var(--il-nav-hover-color);
  }

  .label {
    display: block;
    position: relative;
    pointer-events: none;
    z-index: 200;
    margin: 0;
    padding: 0;
    line-height: 1.125;
    font-family: var(--il-font-sans);
    white-space: var(--il-nav-item-white-space);
  }
  .label ::slotted(a) {
    pointer-events: all;
  }

  .toggle {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    pointer-events: all;
    cursor: pointer;
    font-size: var(--il-nav-font-size);
    background: var(--il-nav-background);
    color: var(--il-nav-color);
  }
  .toggle:hover {
    background: var(--il-nav-hover-background);
    color: var(--il-nav-hover-color);
  }
  
  .indicator {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--il-nav-section-heading-indicator-width);
    height: 100%;
  }
  .toggle:focus .indicator {
    outline: 4px dotted;
    outline-offset: -4px;
  }
  .indicator svg {
    display: block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    transform: var(--il-nav-indicator-transform);
  }

  .contents {
    z-index: 101;
    display: var(--il-nav-section-contents-display);
    position: var(--il-nav-section-contents-position);
    opacity: var(--il-nav-section-contents-opacity);
    pointer-events: var(--il-nav-section-contents-pointer-events);
    border-width: var(--il-nav-section-contents-border-width);
    border-style: var(--il-nav-section-contents-border-style);
    border-color: var(--il-nav-section-contents-border-color);
    max-width: var(--il-nav-section-contents-max-width);
    min-width: var(--il-nav-section-contents-min-width);
    left: var(--il-nav-section-contents-left);
    top: var(--il-nav-section-contents-top);
  }
`;

const c = css`
  .section {
    position: relative;
  }


  .label ::slotted(*) {
  }
  .label ::slotted(a) {
  }
  .label ::slotted(a):hover {
  }


  /* Contents */

  .contents {
    z-index: 101;
    max-width: var(--il-nav-section-max-width);
    min-width: var(--il-nav-section-min-width);
    display: var(--il-nav-section-display);
    position: var(--il-nav-section-position);
    left: var(--il-nav-section-left);
    top: var(--il-nav-section-top);
    opacity: var(--il-nav-section-opacity);
    pointer-events: var(--il-nav-section-pointer-events);
    border-width: var(--il-nav-section-border-width);
    border-style: var(--il-nav-section-border-style);
    border-color: var(--il-nav-section-border-color);
  }





  /*
  .full .heading {
    position: relative;
    padding: 0;
    color: var(--il-blue);
    height: 100%;
  }
  
  .full .heading:hover {
    background-color: white;
    color: var(--il-altgeld);
  }

  .full .label ::slotted(a) {
    display: block;
    position: relative;
    padding: 10px 40px 10px 20px;
    color: inherit;
    text-decoration: none;
    height: 100%;
  }

  .full .label ::slotted(a:hover),
  .full .label ::slotted(a:focus) {
    color: var(--il-altgeld);
    text-decoration: underline;
    background-color: white;
    outline: 0;
    transition: background-color .3s, color .3s;
  }

  .full.current .label ::slotted(a),
  .full .label ::slotted(a[aria-current="page"]) {
    color: var(--il-altgeld);
    background-color: white;
  }

  .full .indicator {
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    display: block;
    pointer-events: none;
    border: 2px solid transparent;
  }

  .full.current .indicator {
    color: var(--il-altgeld);
  }

  .full .indicator svg {
    position: absolute;
    right: 12px;
    top: 5px;
    display: block;
    width: 14px;
    height: 14px;
    fill: currentcolor;
  }

  .full .heading:hover .indicator svg,
  .full.active .heading .indicator svg {
    transform: rotate(180deg);
    fill: var(--il-altgeld);
  }

  .full .toggle button {
    display: block;
    border: 0;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: transparent;
    width: 24px;
    height: 24px;
  }
*/

`