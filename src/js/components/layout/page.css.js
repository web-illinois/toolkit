import { css } from 'lit';

export default css`

.page {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: auto 1fr auto;
}
header {
  grid-area: header;
  z-index: 600;
}
main {
  grid-area: main;
  overflow: auto;
}
footer {
  grid-area: footer;
}

`;