import {html, css, LitElement} from 'lit';
import styles from './il-panel.styles';

export class Panel extends LitElement {
  static get properties() {
    return {
        _expanded: { type: Boolean, default: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._expanded = this.hasAttribute('data-il-state') && this.getAttribute('data-il-state') == 'expanded';
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(evt) {
    if (this.expanded) {
        this.collapse();
        this.dispatchEvent(new CustomEvent('collapse', {bubbles: true, composed: true}));
      } else {
        this.expand();
        this.dispatchEvent(new CustomEvent('expand', {bubbles: true, composed: true}));
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

  createButton() {
    const originalHeaderTag = this.querySelector('h2[slot="header"], h3[slot="header"], h4[slot="header"], h5[slot="header"], h6[slot="header"]');
    const button = document.createElement('button');
    button.id = 'header';
    button.setAttribute('aria-expanded', this.expanded);
    button.setAttribute('aria-controls', 'content');
    button.onclick = this.handleHeaderClick;
    if (originalHeaderTag == null) {
      console.log('il-panel: no heading tag in the header slot');
      button.innerHTML = "Details"
      return button;
    }
    const headerTag = document.createElement(originalHeaderTag.tagName);
    headerTag.classList.add('heading');
    button.innerHTML = `<span id="icon" aria-hidden="true"></span>` + originalHeaderTag.innerHTML;
    headerTag.append(button);
    return headerTag;
  }

  render() {
    const headerTag = this.createButton();
    const classInfo = this.expanded ? 'expanded' : '';
    return html`
      <div id="panel" class=${classInfo}>
        ${headerTag}
        <div role="region" aria-labelledby="header" id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('il-panel', Panel);