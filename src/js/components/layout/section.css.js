import { css } from 'lit';

export default css`

section {
  position: relative;
  margin: 0;
  padding: 0;
}

section.fixed-width {
  padding: 40px 20px;
}

@media (min-width: 850px) {
  section.fixed-width {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (min-width: 1200px) {
  section.fixed-width {
    padding-left: calc(50vw - 570px);
    padding-right: calc(50vw - 570px);
  }
}

`;