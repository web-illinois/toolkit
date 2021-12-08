import { css } from 'lit';

export default css`

section {
  display: grid;
  margin: 0;
  padding: 40px var(--il-content-margin);
}
section.compact {
  grid-gap: 20px;
  grid-template-rows: auto auto;
  grid-template-areas: "sidebar" "main";
}
section.full {
  grid-gap: 44px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "sidebar main";
}

@media (min-width: 1200px) {
  section.full {
    margin-left: 0;
    margin-right: 0;
    grid-gap: 0;
    grid-template-columns: auto 274px 44px 822px auto;
    grid-template-areas: ". sidebar . main .";
  }
}

.main {
  grid-area: main;
  margin: 0;
}

.sidebar {
  grid-area: sidebar;
}

`;