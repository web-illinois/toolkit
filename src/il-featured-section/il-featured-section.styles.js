import {css} from "lit";

export default css`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    margin-left: var(--il-page-offset-left, auto);
    margin-right: var(--il-page-offset-right, auto);
  }
  section {
    display: relative;
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
    padding-top: var(--il-section-padding-top);
    padding-bottom: var(--il-section-padding-bottom);
  }
`