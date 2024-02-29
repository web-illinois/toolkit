import {css} from "lit";

export default css`
  :host {
    display: block;
    container-type: inline-size;
  }
  article {
    position: relative;
    display: grid;
  }
  .image {
    position: relative;
    margin: -2px -2px 0 -2px;
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
  @container (min-width: 48rem) {
    article {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "left right";
    }
    .image {
      position: relative;
      margin: -2px 0 -2px -2px;
      grid-area: var(--il-card-image-area);
    }
    .content {
      grid-area: var(--il-card-content-area);
    }
  }
`