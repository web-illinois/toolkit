import { css } from 'lit';

export default css`
  :host {
    display: block;
  }
  p.il-quote {
    position:relative;
  }
  p.il-quote::before {
    position: absolute;
    content: "“";
    color: var(--il-orange);
    font-size: 7.813rem;
    line-height: 0;
    top: 55px;
    left: -90px;
    font-weight: 700;
    font-style: normal;
  }
  
  p.il-quote::after {
    position: absolute;
    content: "”";
    color: var(--il-orange);
    font-size: 7.813rem;
    line-height: 0;
    bottom: 0;
    right: -90px;
    font-weight: 700;
    font-style: normal;
  }
`;
