import {css} from 'lit';

export default css`

  .header {
    position: relative;
    font-family: var(--il-font-sans);
    border-bottom: 2px solid var(--il-cloud-1);
  }

  .fingerprint {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 20px;
    overflow: hidden;
    background-color: var(--il-orange);
  }
  .fingerprint-texture {
    position: absolute;
    left: 0;
    top: -29px;
    display: block;
    height: 78px;
  }
  .fingerprint-texture path {
    fill: none;
    stroke: white;
    opacity: .9;
    stroke-width: 0.75;
    stroke-miterlimit: 10;
    enable-background: new;
  }
  .fingerprint-narrow {
    left: calc(50vw - 700px);
    width: 1400px;
  }
  .fingerprint-narrow.fingerprint-texture path {
    stroke-width: 2;
    opacity: .7;
  }
  .fingerprint-wide {
    left: calc(50vw - 1200px);
    width: 2400px;
    display: none;
  }
  @media (min-width: 1400px) {
    .fingerprint-narrow {
      display: none;
    }
    .fingerprint-wide {
      display: block;
    }
  }
  .fingerprint-texture svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  /* Layout */

  .content {
    position: relative;
    padding: 0 var(--il-content-margin);
  }
  
  .top-content {
    position: relative;
    width: 100%;
    max-width: var(--il-content-max-width);
    overflow: visible;
    margin: 0 auto;
    padding: 30px 0 0;
  }

  .bottom-content {
    clear: both;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: var(--il-content-max-width);
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
  }

  /* Campus wordmark  */
  
  .campus-wordmark {
    position: relative;
    display: block;
    float: left;
    width: 430px;
    height: 52px;
    margin-top: -30px;
    color: var(--il-blue);
    outline: 0;
  }
  
  @media (min-width: 768px) {
    .campus-wordmark {
      margin-left: -10px;
    }
  }

  .campus-wordmark:focus, .campus-wordmark:hover {
    color: var(--il-altgeld);
  }
  
  .campus-wordmark:focus .wordmark-container {
    outline: 2px dotted var(--il-altgeld);
    outline-offset: 4px;
  }

  .block-i-container {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 45px;
    height: 52px;
    background-color: var(--il-blue);
  }

  .block-i {
    position: absolute;
    top: 7px;
    left: 10px;
    display: block;
    width: 24px;
    height: 35px;
  }

  .block-i__outline {
    fill: white;
  }

  .block-i__fill {
    fill: var(--il-orange);
  }

  .wordmark-container {
    position: absolute;
    left: 55px;
    top: 30px;
    display: block;
    width: 362px;
    height: 10px;
  }

  .wordmark-uiuc {
    fill: currentColor;
    transition: fill .3s;
    display: block;
    width: 362px;
    height: 10px;
    outline: 0;
  }

  .wordmark-uiuc__of {
    transform: translate(97.838px);
  }

  .wordmark-uiuc__illinois {
    transform: translate(124.808px);
  }

  .wordmark-uiuc__urbana-champaign {
    transform: translate(197.666px);
  }

  .wordmark-uiuc__urbana {
    transform: translate(0 .144px);
  }

  .wordmark-uiuc__champaign {
    transform: translate(71.734px);
  }

  @media (max-width: 440px) {
    .campus-wordmark {
      width: 130px;
    }

    .wordmark-uiuc {
      width: 65px;
    }

    .wordmark-uiuc__university,
    .wordmark-uiuc__of,
    .wordmark-uiuc__urbana-champaign {
      display: none;
    }

    .wordmark-uiuc__illinois {
      transform: translate(0);
    }
  }

  /* Links */
  
  .content .links {
    float: right;
  }

  .identity {
    text-align: left;
    padding: 20px 0;
  }

  .content .search {
    margin-left: 30px;
    justify-self: flex-end;
  }
  
  /* Navigation */

  .navigation {
    background-color: var(--il-cloud-1);
    padding: 0 var(--il-content-margin);
  }
  .navigation-content {
    margin: 0 auto;
    max-width: var(--il-content-max-width);
  }
  .menu .navigation {
    background-color: transparent;
    padding: 0;
  }
  .menu .navigation-content {
    margin: 0;
    max-width: 100%;
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
  }

  .header--compact.header--no-menu .menu-button {
    display: none;
  }
  
  /* Menu toggle button */

  .menu-toggle {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 5px;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
  }
  .menu-toggle-inner {
    display: block;
    position: relative;
    margin: 0;
    padding: 0 10px 0 30px;
    border: 0;
    border-radius: 4px;
    background-color: var(--il-alma-mater);
    color: white;
  }

  .menu-toggle:focus .menu-toggle-inner,
  .menu-toggle:hover .menu-toggle-inner {
    background-color: var(--il-orange);
    outline: none;
    border: none;
  }

  .menu-visible .menu-toggle .menu-toggle-inner {
    background-color: var(--il-alma-mater-1);
  }

  .menu-visible .menu-toggle:focus .menu-toggle-inner,
  .menu-visible .menu-toggle:hover .menu-toggle-inner {
    background-color: var(--il-orange);
  }
  
  .menu-toggle-label {
    font: 700 18px/34px var(--il-font-sans);
    text-transform: uppercase;
  }

  .menu-toggle svg {
    position: absolute;
    left: 9px;
    top: 8px;
    display: block;
    width: 16px;
    height: 16px;
    fill: currentcolor;
  }

  .menu-toggle svg.menu-icon {
    display: block;
  }

  .menu-toggle svg.menu-close {
    display: none;
    left: 5px;
    top: 5px;
    width: 24px;
    height: 24px;
  }

  .menu-visible .menu-toggle svg.menu-icon {
    display: none;
  }

  .menu-visible .menu-toggle svg.menu-close {
    display: block;
  }
  
  /* Menu */

  .menu {
    display: none;
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, .25);
    z-index: 5000;
  }

  .menu .search {
    background-color: white;
    padding: 1em;
  }

  .menu .navigation {
    background-color: var(--il-cloud-1);
  }

  .menu-visible .menu {
    display: block;
  }
`;