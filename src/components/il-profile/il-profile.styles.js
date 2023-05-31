import { css } from 'lit';

export default css``;

const oldcss = css`
  :host {
    display: block;
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .primary {
    grid-area: primary;
  }
  .contact {
    grid-area: contact;
  }
  .additional {
    grid-area: additional;
  }
  @media (min-width: 600px) {
    article {
      --il-profile-page-name-font-size: 50px;
      display: grid;
      grid-template-columns: auto 300px;
      grid-gap: 40px;
      grid-template-areas: "primary primary" "additional contact";
    }
  }
  @media (min-width: 960px) {
    article {
      max-width: 1140px;
      grid-template-columns: auto 400px;
      grid-gap: 40px;
      grid-template-areas: "primary contact" "additional contact";
    }
  }
`;
