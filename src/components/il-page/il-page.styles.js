import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
    font: 400 1rem/1em var(--il-font-sans);
  }
  .page {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: auto 1fr auto;
  }

  header {
    grid-area: header;
    z-index: 600;
  }

  main {
    grid-area: main;
    overflow: auto;
  }

  footer {
    grid-area: footer;
  }

  .overlay {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
  }
  #grid.overlay {
    opacity: .5;
  }
  #grid .content {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: var(--il-page--content-max-width);
  }
  #grid .content-margin {
    position: absolute;
    top: 0;
    width: var(--il-page--content-padding-left);
    height: 100%;
    background-color: var(--il-orange);
  }
  #grid .content-margin.left {
    left: 0;
  }
  #grid .content-margin.right {
    right: 0;
  }
`;