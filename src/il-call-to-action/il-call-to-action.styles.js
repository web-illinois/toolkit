import {css} from "lit";

export default css`
  :host {
    display: block;
  }
  .call-to-action {
    position: relative;
  }
  .call {
    position: relative;
    padding-left: 9.5rem;
    padding-top: 1rem;
  }
  .icons {
    position: absolute;
    left: 0;
    top: 0;
    width: 8rem;
    height: 8rem;
  }
  .icon {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .white.icon {
    display: var(--il-call-to-action-icon-white-display, none);
  }
  .blue.icon {
    display: var(--il-call-to-action-icon-blue-display, none);
  }
  .orange.icon {
    display: var(--il-call-to-action-icon-orange-display, none);
  }
`