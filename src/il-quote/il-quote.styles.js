import {css} from "lit";

export default css`
  :host {
    display: block;
  }
  .quote {
    container-type: inline-size;
    text-align: center;
    font: italic 400 1.625rem/1.2 var(--il-font-serif);
  }
  .quotation-marks {
    all: initial;
    display: block;
    height: 3.875rem;
    text-align: center;
    font: 8rem/8rem var(--il-font-serif);
    color: var(--il-quote-accent-color);
  }
  .attribution {
    font: normal 400 1.25rem/1.3 var(--il-font-sans);
  }
  hr {
    all: initial;
    margin: 2rem auto;
    display: block;
    position: relative;
    width: 5rem;
    height: .5rem;
    background: var(--il-quote-accent-color);
  }
`