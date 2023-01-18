import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .invisible { 
    display: none; 
  }

  h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    width: 100%;
    display: block;
    padding: 15px 20px 15px;
    background: var(--il-panel-background-color);
    border: none;
    color: var(--il-panel-foreground-color);
    font-size: 1.1875rem;
    font-weight: 700;
    text-align: left;
    border-bottom: var(--il-panel-border);
  }

  button[aria-expanded="true"] {
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
  } 

  button:focus, button:hover {
    text-decoration: underline solid var(--il-panel-foreground-color);
  }

  button span {
    float: right;
    width: 18px;
    height: 18px;
    display: inline-block;
    transform: rotate(-180deg);
    fill: var(--il-selected-panel-foreground-color);
    margin-top: 3px;
  }

  button[aria-expanded=true] span {
    transform: rotate(0deg);
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
  }

  .panel {
    padding: 20px 20px 0 20px;
  }

  @media only screen and (min-width: 792px) {
    button {
      display: none;
    }
    .panel {
      padding: 0 0 20px 0;
    }
  }
`;
