import {css} from "lit";

export default css`
  :host {
    display: block;
    container-type: inline-size;
    border: 1px solid var(--il-storm-lighter-3);
  }

  article {
    position: relative;
    display: grid;
  }
  
  .image {
    position: relative;
    margin: -1px -1px 0 -1px;
  }
  
  ::slotted(img) {
    display: block;
    max-width: 100%;
  }

  .content {
    box-sizing: border-box;
    padding: var(--il-card-content-padding);
  }
  .content .container {
    padding: var(--il-card-content-container-padding, 0);
  }
  
  @container (min-width: 48rem) {
    article {
      grid-template-columns: repeat(2, 1fr);
    }

    .image {
      position: relative;
      margin: -1px 0 -1px -1px;
    }
  }
`