import {css} from "lit";

export default css`
  :host {
    display: inline-block;
  }
  a, a:visited {
    all: initial;
    background: var(--il-action-background);
    border: 2px solid var(--il-action-border);
    border-radius: 4px;
    color: var(--il-action-color);
    cursor: pointer;
    display: inline-block;
    font-family: var(--il-font-sans);
    font-size: max(14pt, 1em);
    font-weight: 700;
    line-height: 1.75em;
    padding: 0 .75em;
    white-space: nowrap;
  }
  a:hover, a:visited:hover {
    --il-action-background: var(--il-action-hover-background);
    --il-action-color: var(--il-action-hover-color);
    --il-action-border-color: var(--il-action-hover-border);
  }

`