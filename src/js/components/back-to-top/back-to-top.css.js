import {css} from 'lit';

export default css`

:host {
  bottom: var(--il-back-to-top-position-y);
  position: fixed;
  right: var(--il-back-to-top-position-x);
  z-index: 2;
}
button {
  box-sizing: border-box;
  padding: 4px;
  display: block;
  background-color: var(--il-back-to-top-background-color);
  border: 2px solid var(--il-back-to-top-foreground-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  transition: transform .4s;
  cursor: pointer;
}
button:hover, button:focus {
  background-color: var(--il-back-to-top-foreground-color);
  border-color: var(--il-back-to-top-background-color);
}
button.top-of-page {
  transform: translateY(88px);
}
svg {
  height: 36px;
  width: 36px;
}
path {
  fill: var(--il-back-to-top-foreground-color);
}
button:hover path, button:focus path {
  fill: var(--il-back-to-top-background-color);
}

`