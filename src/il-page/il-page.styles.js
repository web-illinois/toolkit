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
  .content {
    padding: 2rem 1.25rem;
    font-size: 1.125rem;
  }
  @container (min-width: 75rem) {
    .content {
      padding-left: calc(50cqw - 37.5rem);
      padding-right: calc(50cqw - 37.5rem);
    }
    .content ::slotted(il-featured-section) {
      margin-left: calc(37.5rem - 50cqw);
      margin-right: calc(37.5rem - 50cqw);
      padding-left: calc(50cqw - 37.5rem);
      padding-right: calc(50cqw - 37.5rem);
    }
  }
`