import { css } from 'lit';

export default css`
  #container {
    display: flex;
    flex: 1 0 2em;
    justify-content: center;
    align-items: center;
    padding: var(--il-nav-section--header--icon--padding);
  }
  #arrow {
    position: relative;
    width: 1.2em;
    height: 1.2em;
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