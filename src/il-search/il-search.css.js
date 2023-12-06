import {css} from 'lit';

export default css`
form {
  display: grid;
  height: 40px;
  grid-template-columns: auto 60px;
  grid-gap: 2px;
  border: 2px solid var(--il-cloud-3);
  background-color: var(--il-cloud-3);
  margin-left: 10px;
  border-radius: 5px;
}
form:focus-within {
  border-color: var(--il-industrial-blue);
}
label {
  display: none;
}
input {
  margin: 0;
  padding: 5px;
  border: 0;
  font: 16px/18px var(--il-font-sans);
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-appearance: none;
}
input:focus {
  outline: 0;
}
button {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: white;
  color: #606060;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
button:focus {
  outline: 0px solid var(--il-industrial-blue);
  box-shadow: 0 0 0 2px var(--il-industrial-blue);
  color: var(--il-industrial-blue);
}
button il-icon {
  font-size: 2em;
  color: inherit;
}
`;