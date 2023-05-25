import { LitElement, html } from 'lit';
import '../il-nav-indicator/il-nav-indicator.component';
import styles from './il-accordion-panel.styles';

class AccordionPanel extends LitElement {

  static get properties() {
    return {
      _expanded: { state: true, type: Boolean, default: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._expanded = false;
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(evt) {
    this.dispatchEvent(new CustomEvent('toggle'));
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

  render() {
    const state = this.expanded ? 'expanded' : 'collapsed';
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <div id="panel" class=${state}>
        <div id="header" role="button" aria-expanded=${ariaExpanded} aria-controls="content" @click=${this.handleHeaderClick}>
            <div id="indicator" aria-hidden="true">
                <il-nav-indicator></il-nav-indicator>
            </div>
            <div id="label">
                <slot name="header"></slot>
            </div>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('il-accordion-panel', AccordionPanel);