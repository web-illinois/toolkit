import { css } from 'lit';

export default css`

.full {
  color: var(--il-blue);
  height: 100%;
}
::slotted(a) {
  display: block;
  padding: 10px 20px;
  font: 700 16px/18px var(--il-font-sans);
  color: inherit; 
  text-decoration: none;
}
::slotted(a:hover),
::slotted(a:focus) {
  color: var(--il-altgeld);
  transition: color .3s, background-color .3s;
  text-decoration: underline;
  background-color: white;
  outline: 0;
}
.full ::slotted(a) {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: baseline;
}
.compact ::slotted(a) {
  margin: 0;
  padding: 10px 20px;
  display: block;
  background-color: var(--il-cloud-1);
  border-top: 1px solid #c0c0c0;
}
.compact ::slotted(a) {
  text-decoration: none;
  color: var(--il-blue);
  font: 600 20px/28px var(--il-font-sans);
}
.compact ::slotted(a:hover),
.compact ::slotted(a:focus) {
  text-decoration: underline;
  color: var(--il-altgeld);
  outline: 0;
}

`;