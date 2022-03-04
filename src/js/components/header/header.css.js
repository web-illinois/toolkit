import {css} from 'lit';

export default css`

.header {
  position: relative;
  font-family: var(--il-source-sans);
}

.campus {
  text-transform: uppercase;
}

.campus a:focus {
  outline: none;
  border: none;
}

.campus svg {
  fill: var(--il-blue);
}

.campus a:focus svg, .campus a:hover svg {
  fill: var(--il-altgeld);
  outline: none;
  border: none;
}

.header--full .header__main-outer {
  border-top: 7px solid var(--il-orange);
  border-bottom: 2px solid var(--il-cloud-1);
  background-color: white;
  padding: 0 var(--il-content-margin);
}
.header--full .header__main-inner {
  margin: 0 auto;
  display: grid;
  max-width: var(--il-content-max-width);
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas: "campus links" "wordmark search";
  align-items: center;
}
.header--full .campus {
  grid-area: campus;
  justify-self: left;
  padding: 10px 0px;
}
.header--full .links {
  grid-area: links;
  justify-self: right;
  padding: 10px 0;
}
.header--full .wordmark {
  grid-area: wordmark;
  justify-self: stretch;
  padding: 20px 0;
}
.header--full .search {
  grid-area: search;
  justify-self: right;
  padding: 20px 0;
}
.header--full .navigation {
  background-color: var(--il-cloud-1);
  padding: 0 var(--il-content-margin);
}
.header--full .navigation__inner {
  margin: 0 auto;
  max-width: var(--il-content-max-width);
}

.header--compact .header__main {
  border-top: 7px solid var(--il-orange);
  background-color: white;
  padding: 5px var(--il-content-margin) 10px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  border-bottom: 2px solid var(--il-cloud-1);
}
.header--compact .header__main .campus {
  grid-column: 1 / span 2;
}
.header--compact .header__main .menu-button {
  padding: 20px 0;
  margin-left: 30px;
  justify-self: flex-end;
}
.header--compact .menu-button button {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0 20px 0 40px;
  border: 0;
  border-radius: 4px;
  background-color: var(--il-alma-mater);
  color: white;
  font: 700 20px/44px var(--il-source-sans);
  text-transform: uppercase;
}
.header--compact .menu-button button:focus, .header--compact .menu-button button:hover {
  background-color: var(--il-orange);
  outline: none;
  border: none;
}
.header--compact.header--menu-visible .menu-button button {
  background-color: var(--il-alma-mater-1);
}
.header--compact.header--menu-visible .menu-button button:focus,
.header--compact.header--menu-visible .menu-button button:hover {
  background-color: var(--il-orange);
}
.header--compact .menu-button svg {
  position: absolute;
  left: 14px;
  top: 13px;
  display: block;
  width: 16px;
  height: 16px;
  fill: currentcolor;
}
.header--compact .menu-button svg.menu-icon {
  display: block;
}
.header--compact .menu-button svg.menu-close {
  display: none;
  left: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
}
.header--compact.header--menu-visible .menu-button svg.menu-icon {
  display: none;
}
.header--compact.header--menu-visible .menu-button svg.menu-close {
  display: block;
}
.header--compact .menu {
  display: none;
  width: 100%;
  max-width: 500px;
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, .25);
  z-index: 5000;
}
.header--compact .menu .search {
  background-color: white;
  padding: 1em;
}
.header--compact .menu .navigation {
  background-color: var(--il-cloud-1);
}
.header--compact.header--menu-visible .menu {
  display: block;
}

@media only screen and (max-width: 767px) {
  .header--compact .header__main .campus {
      display: none;
  }

  .header--compact .header__main {
      padding-top: 23px;
  }
}

`;