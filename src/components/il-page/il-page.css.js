import { css } from 'lit';

export default css`
:host {
  display: block;
  position: relative;
  font: 400 1rem/1em var(--il-font-sans);
}
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