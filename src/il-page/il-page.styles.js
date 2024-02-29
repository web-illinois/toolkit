import {css} from "lit";

export default css`
  :host {
    display: block;
    position: relative;
  }
  .page {
    display: block;
    position: relative;
    container-type: inline-size;
  }
  header {
    position: relative;
    z-index: 100;
  }
  .content-and-footer {
    position: relative;
    z-index: 10;
  }
  main {
    position: relative;
    z-index: 10;
  }
  footer {
    position: relative;
    z-index: 1;
  }
`