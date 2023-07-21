import {css} from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
  }
  #header {
    container-type: inline-size;
    border-bottom: 2px solid var(--il-cloud-1);
  }
  #top-stripe {
    position: relative;
    height: .5em;
    background-color: var(--il-orange);
  }
  #main {
    position: relative;
  }
  
  /* Uncollapsed */
  
  #main .row {
    clear: both;
    position: relative;
  }
  #branding-and-eyebrow {
  }
  #branding {
    float: left;
    clear: left;
    position: relative;
    box-sizing: border-box;
    min-height: 2.75em;
    padding-left: 2.8em;
    color: var(--il-blue);
  }
  #branding a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  #branding a:focus, #branding a:hover {
    color: var(--il-altgeld);
  }
  #block-i {
    position: absolute;
    left: -.656em;
    top: -.5em;
    display: block;
    width: 2.8em;
    height: 3.25em;
    box-sizing: border-box;
    background-color: var(--il-blue);
    padding: .53em .656em 
  }
  #block-i il-block-i {
    width: 1.5em;
    height: 2.19em;
    --il-block-i--outline-color: white;
  }
  #wordmark {
    top: 0;
    display: block;
    box-sizing: border-box;
    font: 700 14px/1em var(--il-montserrat);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    flex: 1 1 auto;
    padding: .5em .5em .5em 0;
  }
  #eyebrow {
    flex: 1 1 0;
    align-self: flex-end;
  }
  #identity-and-search {
    padding: 1em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #identity {
  }

  .content-container {
    padding-left: 2em;
    padding-right: 2em;
  }

  #navigation {
    background-color: var(--il-cloud-1);
  }



  #menu-toggle {
    all: initial;
    display: inline-block;
    position: relative;
    background-color: var(--il-blue);
    color: white;
    font: 600 1em/1em var(--il-font-sans);
    letter-spacing: .05em;
    text-transform: uppercase;
    padding: .5em .4em .5em 2em;
  }
  .menu-icon-bar {
    position: absolute;
    top: calc(50% - .05em);
    left: .35em;
    display: block;
    width: 1em;
    height: .12em;
    background-color: white;
    transition: transform .2s, opacity .2s;
  }
  .menu-icon-bar--top {
    transform: translateY(-.3em);
  }
  .menu-icon-bar--bottom {
    transform: translateY(.3em);
  }
  
  :host(*[data-il-menu-visible="1"]) .menu-icon-bar--top {
    transform: rotate(135deg);
  }
  :host(*[data-il-menu-visible="1"]) .menu-icon-bar--middle {
    opacity: 0;
  }
  :host(*[data-il-menu-visible="1"]) .menu-icon-bar--bottom {
    transform: rotate(-135deg);
  }
  
  #menu-contents {
    display: none;
  }
  :host(*[data-il-menu-visible="1"]) #menu-contents {
    display: block;
  }
  
  @container (max-width: 549px) {
    #wordmark {
      display: none;
    }
  }

`;

const oldcss = css`
.header {
  position: relative;
  font-family: var(--il-font-sans);
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
  transition: fill .3s;
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
.header--compact.header--no-menu .header__main {
  grid-template-columns: 1fr;
}
.header--compact .header__main .campus {
  grid-column: 1 / span 2;
}
.header--compact .header__main .menu-button {
  padding: 20px 0;
  margin-left: 30px;
  justify-self: flex-end;
}
.header--compact.header--no-menu .menu-button {
  display: none;
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
  font: 700 20px/44px var(--il-font-sans);
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