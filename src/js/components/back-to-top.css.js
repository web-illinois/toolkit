import {css} from 'lit-element';

export default css`

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

`