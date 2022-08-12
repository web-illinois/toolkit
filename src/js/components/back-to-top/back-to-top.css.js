import {css} from 'lit';

/*
:host {
  position: fixed;
  display: block;
  right: 20px;
  bottom: 20px;
}
button {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: 68px;
  height: 68px;
  box-sizing: border-box;
  overflow: hidden;
  background: #06162C;
  border-radius: 50%;
  border: 1px solid white;
  transition: transform .4s;
}
button.top-of-page {
  transform: translateY(100px);
}
svg {
  position: absolute;
  fill: white;
  top: 20px;
  left: 17px;
}


*/
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