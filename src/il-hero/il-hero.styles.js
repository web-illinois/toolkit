import {css} from "lit";

export default css`
  :host {
    display: block;
  }
  .hero {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 25rem;
    padding: 4.5rem 2rem 5.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    container-type: inline-size;
  }
  .layer {
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .background.layer {
    z-index: 1;
  }
  .background ::slotted(img) {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content {
    position: relative;
    z-index: 10;
  }
`