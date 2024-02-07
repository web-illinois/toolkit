import {html, css, LitElement} from 'lit';

export class Panel extends LitElement {
  static get properties() {
    return {
        _expanded: { type: Boolean, default: false }
    };
  }

  constructor() {
    super();
    this._expanded = this.hasAttribute('data-il-state') && this.getAttribute('data-il-state') == 'expanded';
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(evt) {
    if (this.expanded) {
        this.collapse();
    } else {
        this.expand();
    }
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
    button.innerHTML = originalHeaderTag.innerHTML;
    headerTag.append(button);
    return headerTag;
  }

  render() {
    const headerTag = this.createButton();
    const visibility = this.expanded ? '' : 'display: none;';
    return html`
      <div id="panel">
        ${headerTag}
        <div id="content" style=${visibility}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('il-panel', Panel);