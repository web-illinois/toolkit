import { css } from 'lit';

export default css`

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.full ul {
  padding-top: .375rem;
  flex-direction: row;
  font-size: 1rem;
  background-color: var(--il-cloud-1);
}
.compact ul {
  flex-direction: column;
}

`;