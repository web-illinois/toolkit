import {css} from 'lit';

export default css`
  :host {
    counter-reset: breadcrumb 0;
    color: #252525;
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    font: 400 14px/32px var(--il-font-sans);
  }
`;