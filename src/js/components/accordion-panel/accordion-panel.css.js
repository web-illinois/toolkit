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
    font-size: 1.4rem;
    font-weight: 500;
    font-family: var(--il-source-sans);
    padding: var(--il-details-padding);
    background: var(--il-details-background);
    color: var(--il-details-color);
    width: 100%;
    text-align: left;
    border: none;
    display: flex;
    align-items: center;
  }

  button:focus, button:hover {
    background: var(--il-details-background-hover);
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
