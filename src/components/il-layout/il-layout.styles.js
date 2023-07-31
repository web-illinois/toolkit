import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
  }

  #layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
  }

  /* Grid */
  
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  .grid ::slotted(*) {
    grid-column-end: span 2;
  }
  @media (min-width: 360px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
    .grid.columns-1 ::slotted(*) {
      grid-column-end: span 4;
    }
  }
  @media (min-width: 660px) {
    .grid {
      grid-template-columns: repeat(6, 1fr);
    }
    .grid.columns-1 ::slotted(*) {
      grid-column-end: span 6;
    }
    .grid.columns-2 ::slotted(*) {
      grid-column-end: span 3;
    }
  }
  @media (min-width: 990px) {
    .grid {
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 1.5rem;
    }
    .grid.columns-1 ::slotted(*) {
      grid-column-end: span 8;
    }
    .grid.columns-2 ::slotted(*),
    .grid.columns-3 ::slotted(*) {
      grid-column-end: span 4;
    }
  }
  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(12, 1fr);
    }
    .grid.columns-1 ::slotted(*) {
      grid-column-end: span 12;
    }
    .grid.columns-2 ::slotted(*) {
      grid-column-end: span 6;
    }
    .grid.columns-3 ::slotted(*) {
      grid-column-end: span 4;
    }
    .grid.columns-4 ::slotted(*) {
      grid-column-end: span 3;
    }
    .grid.columns-6 ::slotted(*) {
      grid-column-end: span 2;
    }
  }
  @media (min-width: 1440px) {

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