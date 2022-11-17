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

  @media only screen and (max-width: 792px) {
    p.il-quote::before {
      font-size: 6.25rem;
      top: 45px;
      left: -70px;
    }
    p.il-quote::after {
      font-size: 6.25rem;
      right: -70px;
    }
  }
`;
