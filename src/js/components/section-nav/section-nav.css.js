import {css} from 'lit';

export default css`

.header {
  margin: 0;
  padding: 0 20px;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;        
}
.header h2 {
  margin: 0;
  padding: 0;
  font: 700 22px/56px var(--il-source-sans);
  color: var(--il-blue);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.header h2::after {
  content: "\\2026";
}
.header button {
  position: relative;
  box-sizing: border-box;
  width: 60px;
  height: 44px;
  overflow: hidden;
  margin: 0 0 0 10px;
  padding: 0;
  background: transparent;
  border: 2px solid var(--il-blue);
  color: var(--il-blue);
  border-radius: 3px;
  text-indent: 72px;
  white-space: nowrap;
}
.header button:focus, .header button:hover {
  background-color: var(--il-orange);
  border-color: var(--il-orange);
  color: white;
}
.header button svg {
  position: absolute;
  left: 19px;
  top: 11px;
  width: 18px;
  height: 18px;
  fill: currentColor;
}
nav.full .header {
  position: absolute !important;
  left: -9999px !important;
  top: auto !important;
  display: block !important;
  text-align: left !important;
  text-indent: -9999em !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
}
nav.full .il-section-nav__toggle {
  display: none;
}
nav.compact {
  border-radius: 3px;
  border: solid 2px #d8d8d8;
}
nav.compact .menu {
  display: none;
  background-color: white;
}
nav.compact.expanded .header {
  border-bottom: solid 1px #d8d8d8;
}
nav.compact.expanded .header button svg {
  transform: rotate(180deg);
}
nav.compact.expanded .menu {
  display: block;
}


`;