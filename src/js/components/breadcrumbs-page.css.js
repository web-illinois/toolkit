import {css} from 'lit-element';

export default css`
  :host {
    counter-increment: breadcrumb;
  }
  li {
    display: inline;
    color: #252525;
  }
  li.current {
    font-weight: 700;
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