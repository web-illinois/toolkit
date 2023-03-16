import { css } from 'lit';

export default css`

.full {
  height: 100%;
  transition: background-color .3s; 
}
.heading {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.full .contents {
  position: absolute;
  left: 0;
  top: 100%;
}
.full .contents.align-right {
  left: initial;
  right: 0;
}
.full .heading {
  position: relative;
  padding: 0;
  color: var(--il-blue);
  height: 100%;
}
.full .heading:hover {
  background-color: white;
  color: var(--il-altgeld);
}
.full .label ::slotted(a) {
  display: block;
  position: relative;
  padding: 10px 40px 10px 20px;
  font: 700 16px/18px var(--il-font-sans);
  color: inherit; 
  text-decoration: none;
  height: 100%;
}
.full .label ::slotted(a:hover),
.full .label ::slotted(a:focus) {
  color: var(--il-altgeld);
  text-decoration: underline;
  background-color: white;
  outline: 0;
  transition: background-color .3s, color .3s;
}
.full.current .label ::slotted(a),
.full .label ::slotted(a[aria-current="page"]) {
  color: var(--il-altgeld);
  background-color: white;
}
.full .indicator {
  position: absolute;
  left: 5px;
  top: 5px;
  right: 5px;
  bottom: 5px;
  display: block;
  pointer-events: none;
  border: 2px solid transparent;
}
.full.current .indicator {
  color: var(--il-altgeld);
}
.full .indicator svg {
  position: absolute;
  right: 12px;
  top: 5px;
  display: block;
  width: 14px;
  height: 14px;
  fill: currentcolor;
}
.full .heading:hover .indicator svg,
.full.active .heading .indicator svg {
  transform: rotate(180deg);
  fill: var(--il-altgeld);
}
.full .toggle {
  display: none;
}
.full .toggle button {
  display: block;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: transparent;
  width: 24px;
  height: 24px;
}
.full.expanded {
  background-color: white;
  transition: background-color .3s;
}
.full.collapsed .contents {
  display: none;
}
.compact .heading {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: auto 60px;
  background-color: var(--il-cloud-1);
  border-top: 1px solid #c0c0c0;
  text-align: left;
}
.compact .heading ::slotted(a) {
  box-sizing: border-box;
  text-decoration: none;
  color: var(--il-blue);
  padding: 6px 20px;
  display: block;
  border: solid 2px var(--il-cloud-1);
  width: 100%;
  font: 600 20px/28px var(--il-font-sans);
}
.compact .heading ::slotted(a:hover),
.compact .heading ::slotted(a:focus) {
  text-decoration: underline;
  color: var(--il-altgeld);
  background: white;
  border: solid 2px white;
  outline: 0;
}
.compact .indicator {
  display: none;
}
.compact .heading button {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 60px;
  height: 100%;
  min-height: 44px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: var(--il-blue);
}
.compact .heading .toggle {
  height: 100%;
  display: block;
  align-self: center;
}

.compact .heading button svg {
  position: absolute;
  top: 27%;
  left: 16px;
  display: block;
  width: 23px;
  height: 20px;
  fill: currentColor;
  transition: transform .3s;
}
.compact .heading button:hover,
.compact .heading button:focus {
  color: var(--il-altgeld);
  background: white;
  outline: 0;
}
.compact.expanded .heading button svg {
  transform: rotate(180deg);
}
.compact .contents {
  display: none;
}
.compact.expanded .contents {
  display: block;
}
:host(:last-child) .compact {
  border-bottom: 1px solid #c0c0c0;
}

`