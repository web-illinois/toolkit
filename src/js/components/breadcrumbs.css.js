import {css} from 'lit-element';

export default css`
  :host {
    counter-reset: breadcrumb 0;
    color: #252525;
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    font: 400 14px/32px var(--il-source-sans);
  }
  ::slotted(il-breadcrumbs-page)::after {
    content: var(--il-breadcrumbs-separator);
  }
  ::slotted(il-breadcrumbs-page:last-of-type)::after {
    content: "";
  }
`;