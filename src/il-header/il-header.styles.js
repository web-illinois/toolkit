import {css} from "lit";

export default css`
  :host {
    display: block;
    position: relative;
  }
  .header {
    font-family: var(--il-font-sans);
    position: relative;
    box-sizing: border-box;
    border-top: .5rem solid var(--il-orange);
    container-type: inline-size;
    background-color: white;
  }
  .stripe {
    position: relative;
    box-sizing: border-box;
    padding-left: var(--il-page-padding-left);
    padding-right: var(--il-page-padding-left);
  }
  .top.stripe {
    margin-top: -.5rem;
    display: flex;
    padding-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }
  .bottom.stripe {
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--il-cloud-1);
    gap: 1rem;
  }
  .navigation.stripe {
    box-sizing: border-box;
    margin-bottom: -2px;
  }
  .full-width.container:first-child {
    margin-top: -.5rem;
  }
  .branding-and-featured-links {
    display: flex;
    padding: 0 .625rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .branding {
    display: block;
    margin-left: -.625rem;
  }
  .branding a {
    all: initial;
    display: block;
    cursor: pointer;
  }
  .branding a:focus {
    outline: 2px dotted var(--il-blue);
  }
  .branding .elements {
    position: relative;
    max-width: 100%;
    height: 3.1875rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .block-i {
    display: block;
    position: relative;
    width: 2.75rem;
    height: 3.1875rem;
    background-color: var(--il-blue);
  }
  .block-i svg {
    display: block;
    position: absolute;
    top: .5rem;
    left: .625rem;
    width: 1.5rem;
    height: 2.1875rem;
  }
  .block-i svg .outline {
    fill: white;
  }
  .block-i svg .fill {
    fill: var(--il-orange);
  }
  .wordmark {
    position: relative;
    height: 3.1875rem;
    display: block;
    padding: 0 .5rem;
    color: var(--il-blue);
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;
    letter-spacing: .056875rem;
    font: 700 .875rem/3.1875rem var(--il-font-montserrat);
  }
  .featured-links {
    padding: 1.125rem 0 0 1.875rem;
  }
  .identity-and-search {
    padding: 0 .625rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .primary-unit {
    display: none;
  }
  @container (min-width: 30rem) {
    .primary-unit {
      display: block;
    }
  }
  
  .compact .branding {
    padding: 0 1.25rem;
  }
  .compact .identity-and-menu-toggle {
    padding: 0 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .menu-toggle button {
    position: relative;
    box-sizing: border-box;
    width: 2.75rem;
    height: 2.5rem;
    overflow: hidden;
    background-color: var(--il-blue);
    color: white;
    border: 0;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .6875rem;
  }
  .menu-toggle button:hover {
    background-color: var(--il-orange);
    cursor: pointer;
  }
  .menu-toggle button:active {
    background-color: var(--il-industrial-blue);
  }
  .menu-toggle .icons {
    position: absolute;
    top: .35rem;
    left: .5rem;
    width: 1.75rem;
    height: 1.75rem;
  }
  .menu-toggle .icon {
    position: relative;
    width: 100%;
    height: 100%;
    display: none;
  }
  .menu-toggle .icon.exit-icon {
    transform: scale(1.25);
  }
  .header.menu-collapsed .menu-toggle .icon.menu-icon {
    display: block;
  }
  .header.menu-expanded .menu-toggle .icon.exit-icon {
    display: block;
  }
  .menu-toggle .label {
    display: block;
    color: white;
    padding: 0 .5em 0 2em;
    font: 700 1.25rem/.85 var(--il-font-sans);
    text-transform: uppercase;
  }
  @container (min-width: 30rem) {
    .menu-toggle button {
      width: auto;
    }
    .menu-toggle .label {
      padding-left: 1.75em;
    }
  }
  
  
  .menu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    max-height: 100vh;
    overflow: auto;
    background: var(--il-cloud-1);
    display: none;
  }
  .header.menu-expanded .menu {
    display: block;
  }
  .menu .navigation.stripe {
    padding: 0;
  }
  .menu .featured-links {
    padding: 0;
  }

  @container (min-width: 30rem) {
    .menu {
      width: 30rem;
    }
  }
`