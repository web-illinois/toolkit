import {css} from "lit";

export default css`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
  }
  section {
    display: relative;
    padding-top: var(--il-featured-section-padding-top);
    padding-bottom: var(--il-featured-section-padding-bottom);
    padding-left: var(--il-featured-section-padding-left);
    padding-right: var(--il-featured-section-padding-right);
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .background ::slotted(img) {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overlow: hidden;
    object-fit: cover;
  }
  .content {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
`