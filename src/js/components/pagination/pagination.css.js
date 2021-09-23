import { css } from 'lit';

export default css`

:host {
  color: var(--il-blue);
  font: 1em/1em var(--il-source-sans);
}
ul {
  margin: 0 1px -6px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
li {
  margin: 0 -1px 6px 0;
  padding: 0;
  list-style: none;
}
li.current, li.ellipsis, a {
  display: block;
  padding: .5rem .75rem;
  border-width: 1px;
  border-style: solid;
}
li.current {
  background-color: var(--il-blue);
  color: white;
  border-color: var(--il-blue);
}
li.ellipsis {
  color: var(--il-cloud-3);
  border-color: transparent;
}
a {
  font-weight: 500;
  text-decoration: none;
  color: var(--il-blue);
  border-color: var(--il-cloud-3)
}
a:hover, a:focus {
  background-color: #ececed;
  text-decoration: underline;
}

`;