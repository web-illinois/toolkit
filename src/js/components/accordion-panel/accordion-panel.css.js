import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .invisible { 
    display: none; 
  }

  button {
    font-size: 1.4rem;
    padding: 30px 0px 30px 10px;
    background: var(--il-details-background);
    font-weight: 500;
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
  }
`;
