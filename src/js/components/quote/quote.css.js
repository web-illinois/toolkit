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
    font-size: 5rem;
    line-height: 0;
    top: 40px;
    left: -50px;
    font-weight: 700;
  }
  
  p.il-quote::after {
    position: absolute;
    content: "”";
    color: var(--il-orange);
    font-size: 5rem;
    line-height: 0;
    bottom: 0;
    left: 100%;
    font-weight: 700;
  }
`;
