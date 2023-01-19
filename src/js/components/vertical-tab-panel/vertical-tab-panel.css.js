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
    display: flex;
    padding: 15px 20px 15px;
    background: var(--il-panel-background-color);
    border: none;
    color: var(--il-panel-foreground-color);
    font-size: 1.1875rem;
    font-weight: 700;
    text-align: left;
    border-bottom: var(--il-panel-border);
  }

  button div {
    flex-grow: 1;
  }


  button[aria-expanded="true"] {
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
  } 

  button:focus, button:hover {
    text-decoration: underline solid var(--il-panel-foreground-color);
    color: var(--il-focused-panel-foreground-color);
    background: var(--il-focused-panel-background-color);
  }

  button[aria-expanded="true"]:focus, button[aria-expanded="true"]:hover {
    text-decoration: underline solid var(--il-selected-panel-foreground-color);
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
  } 

  button span {
    float: right;
    width: 18px;
    height: 18px;
    display: inline-block;
    fill: var(--il-panel-foreground-color);
    margin-top: 3px;
  }

  button[aria-expanded=true] span {
    transform: rotate(-180deg);
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
    fill: var(--il-selected-panel-foreground-color);
  }

  button[aria-expanded="true"]:focus span, button[aria-expanded="true"]:hover span {
    fill: var(--il-selected-panel-foreground-color);
  } 

  button:focus span, button:hover span {
    fill: var(--il-focused-panel-foreground-color);
  }

  .panel {
    padding: 20px;
    border-bottom: var(--il-panel-border);
  }

  @media only screen and (min-width: 792px) {
    button {
      display: none;
    }
    .panel {
      padding: 0 0 20px 0;
      border-bottom: none;
    }
  }
`;
