import {css} from 'lit-element';

export default css`
  :host {
    counter-increment: breadcrumb;
  }
  :host(*:last-of-type) .separator {
    display: none;
  }
  li {
    display: inline;
    color: #252525;
    vertical-align: baseline;
  }
  li.current {
    font-weight: 700;
  }
  .separator {
    position: relative;
    display: inline-block;
    height: 8px;
    padding: 0 4px;
  }
  .separator svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--il-blue);
  }
  a {
    color: var(--il-link-color);
  }
  a:visited {
    color: var(--il-visited-link-color);
  }
  a:focus, a:hover {
    color: var(--il-link-hover-color);
  }
`;