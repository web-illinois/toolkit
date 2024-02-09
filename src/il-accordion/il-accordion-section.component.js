import {html, css, LitElement} from 'lit';
import styles from './il-accordion-section.styles';

export class AccordionSection extends LitElement {
  static get properties() {
    return {
        _expanded: { type: Boolean, attribute: false, default: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._expanded = this.hasAttribute('data-il-state') && this.getAttribute('data-il-state') == 'expanded';
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleWindowKeypress = this.handleWindowKeypress.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.leaveFocus = this.leaveFocus.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleWindowKeypress);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleWindowKeypress);
  }

  triggerToggle() {
    this.dispatchEvent(new CustomEvent(this.expanded ? 'collapse' : 'expand', {bubbles: true, composed: true}));
  }

  handleHeaderClick(evt) {
    this.triggerToggle();
  }

  setFocus(e) {
    this.shadowRoot.querySelector('#header-parent').classList.add('highlight');
  }

  leaveFocus(e) {
    this.shadowRoot.querySelector('#header-parent').classList.remove('highlight');
  }

  handleWindowKeypress(evt) {
    if (evt.target == this && (evt.code == "Space" || evt.code == "Enter")) {
      this.triggerToggle();
    }
  }

  get expanded() {
    return this._expanded;
  }

  collapse() {
    this._expanded = false;
  }

  expand() {
    this._expanded = true;
  }

  renderChevron() {
    return html`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='currentColor' stroke='currentColor' ><path d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/></svg>`;
  }

  render() {
    const ariaExpanded = this.expanded ? "true" : "false";
    const classInfo = this.expanded ? 'expanded' : '';
    return html`
      <div id="panel" class=${classInfo}>
        <div id="header-parent" @click="${this.handleHeaderClick}" @mouseover="${this.setFocus}" @mouseout="${this.leaveFocus}">
          <span id="icon" aria-hidden="true">
            ${this.renderChevron()}
          </span>
          <div id="header-text"><slot name="header"></slot></div>
          <button id="header" aria-expanded="${ariaExpanded}" aria-labelledby="header-text" aria-controls="content" @click="${this.handleHeaderClick}" @focus="${this.setFocus}" @blur="${this.leaveFocus}" ></button>
        </div>
        <div role="region" aria-labelledby="header-text" id="content">
          <slot name="panel"></slot>
        </div>
      </div>`;
  }
}

customElements.define('il-accordion-section', AccordionSection);