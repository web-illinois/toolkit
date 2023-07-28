import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  #panel {
    max-width: var(--il-content--max-width, none);
    margin: 0 auto;
    padding-bottom: 1px;
    background-color: var(--il-content--background, white);
  }
  
  #header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--il-content--background, var(--il-gray-1));
    color: var(--il-content--color, var(--il-blue));
    padding: 30px 0 30px 20px;
    cursor: pointer;
  }
  #header:focus, #header:hover {
    background-color: var(--il-accordion-panel--focus--background, var(--il-cloud-2));
  }
  #header ::slotted(*) {
    all: initial;
    color: inherit;
    font: 500 1.4rem/1em var(--il-source-sans);
  }
  #indicator {
    display: block;
    position: relative;
    top: .15em;
    font-size: 1.2em;
  }
  .expanded #indicator {
    --il-nav-indicator--arrow--transform: var(--il-nav-indicator--down);
  }
  
  #content {
    display: none;
  }
  .expanded #content {
    display: block;
    padding-left: 50px;
    background: var(--il-content--background);
  }
  
  
  button {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: var(--il-source-sans);
    padding: var(--il-details-padding);
    background: var(--il-content--background, var(--il-gray-1));
    color: var(--il-content--color, var(--il-blue));
    width: 100%;
    text-align: left;
    border: none;
    display: flex;
    align-items: center;
  }

  button:focus, button:hover {
    background: var(--il-accordion-panel--focus--background, var(--il-cloud-2));
  }

  button span {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 10px;
    transform: rotate(-90deg);
  }

  button[aria-expanded=true] span {
    transform: rotate(0deg);
  }

  .panel {
    margin-left: 40px;
    padding-bottom: 20px;
  }
`;
