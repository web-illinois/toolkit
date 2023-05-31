import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
    font: 400 1rem/1em var(--il-font-sans);
  }
  :host:after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - var(--il-page--content-max-width)/2);
    width: 100%;
    max-width: var(--il-page--content-max-width);
    height: 100%;
    opacity: .35;
    pointer-events: none;
    border-left: var(--il-page--content-padding-left) solid var(--il-orange);
    border-right: var(--il-page--content-padding-left) solid var(--il-orange);
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

`;