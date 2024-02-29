import { css } from "lit";

export default css`
  :host {
    display: block;
  }
  .section {
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
    padding-left: var(--il-page-padding-left);
    padding-right: var(--il-page-padding-right);
  }

  .site.section {
    background-color: var(--il-storm-lighter-4);
    color: var(--il-blue);
    border-top: .5rem solid var(--il-blue);
    display: grid;
    grid-template-columns: var(--il-footer-site-grid-template-columns);
    grid-auto-rows: var(--il-footer-site-grid-template-rows);
    grid-template-areas: var(--il-footer-site-grid-template-areas);
    grid-gap: 1rem;
  }
  .site.section .site-name {
    grid-area: site-name;
  }
  .site.section .actions {
    grid-area: actions;
    justify-self: end;
  }
  
  .campus.section {
    background-color: var(--il-blue);
    color: white;
    border-top: .5rem solid var(--il-orange);
  }
  .campus .logo {
    position: relative;
    padding: .75rem .25rem 3.75rem;
  }
  .campus .logo a {
    display: block;
    position: relative;
    width: 9.4375rem;
    height: 1.5625rem;
  }
  .campus .logo svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .campus svg .illinois {
    fill: white;
  }
  .campus svg .block-i .fill {
    fill: var(--il-orange);
  }
  .campus svg .block-i .outline {
    fill: white;
  }
  .campus ul {
    margin: 0;
    padding: 0;
    list-style: none;
    column-count: var(--il-footer-campus-column-count);
    column-gap: 2rem;
  }
  .campus li {
    margin: 0;
    padding: .5rem 0;
    list-style: none;
  }
  .campus a {
    color: white;
    font: 400 1.125rem/1.5rem var(--il-font-sans);
    text-decoration: none;
  }
  .campus a:hover, campus a:focus {
    text-decoration: underline;
  }
  .campus a:focus {
    outline: 2px dotted;
  }
  
  .legal.section {
    background-color: var(--il-blue);
    color: white;
    border-top: .5rem solid var(--il-industrial-blue-darker-2);
  }
  .legal a {
    display: block;
    padding: .3125rem;
    color: white;
    font: 400 1rem/1 var(--il-font-sans);
    text-decoration: underline;
  }
  .legal a:focus {
    outline: 2px dotted;
  }
  .cookies-button-and-links {
    display: flex;
    flex-direction: var(--il-footer-legal-flex-direction);
    justify-content: flex-start;
    align-items: var(--il-footer-legal-align-items);
    gap: 1.875rem;
  }
`