import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: 1em;
    height: 1em;
  }
  #arrow {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: var(--il-nav-indicator--arrow--transform, var(--il-nav-indicator--right));
  }
  #arrow svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;