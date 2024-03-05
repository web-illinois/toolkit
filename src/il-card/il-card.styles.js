import {css} from "lit";

export default css`
  :host {
    display: block;
  }
  article {
    position: relative;
  }
  .content {
    box-sizing: border-box;
    padding-top: var(--il-card-content-padding-top);
    padding-bottom: var(--il-card-content-padding-bottom);
    padding-left: var(--il-card-content-padding-left);
    padding-right: var(--il-card-content-padding-right);
  }
  .content .container {
    padding: var(--il-card-content-container-padding);
  }
`