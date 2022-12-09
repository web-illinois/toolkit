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

  nav.bar {
    background-color: var(--il-cloud-1);
    padding-top: .375rem;
    font-size: 1rem;
  }
  nav.bar .container {
    display: flex;
    flex-direction: row;
  }
  nav.bar ::slotted(ul) {
    margin-top: -.375rem;
    padding-top: .375rem;
    display: flex;
    flex-direction: row;
  }

  /* Accordion */
  
  nav.column .container {
    flex-direction: column;
  }
  nav.column ::slotted(ul) {
    flex-direction: column;
  }

`;