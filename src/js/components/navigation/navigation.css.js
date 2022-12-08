import {css} from 'lit';

export default css`
  .container {
    position: relative;
    max-width: var(--il-content-max-width);
    margin: 0 auto;
  }
  ::slotted(ul) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  /* Navbar */

  nav.full {
    background-color: var(--il-cloud-1);
    padding-top: .375rem;
    font-size: 1rem;
  }
  nav.full .container {
    display: flex;
    flex-direction: row;
  }
  nav.full ::slotted(ul) {
    margin-top: -.375rem;
    padding-top: .375rem;
    display: flex;
    flex-direction: row;
  }

  /* Accordion */
  
  nav.compact .container {
    flex-direction: column;
  }
  nav.compact ::slotted(ul) {
    flex-direction: column;
  }

`;