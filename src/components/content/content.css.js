import {css} from 'lit';

export default css`
  #content {
    font: 400 1em/1em var(--il-font-sans);
  }
  #container {
    container-type: inline-size;
  }
  @container (min-width: 700px) {
    #content {
      font-size: 2em;
    }
  }
`