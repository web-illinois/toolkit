import {LitElement, css, html} from 'lit';

export class NavigationSection extends LitElement {

  static properties = {
    expanded: { attribute: false }
  }

  static styles = css`
  .items {
    display: none;
  }
  button[aria-expanded="true"] + .items {
    display: block;
  }`

  constructor() {
    super();
    this.expanded = false;
  }

  handleToggleClick() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  render() {
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <div>
        <slot name="link"></slot>
        <button class="toggle" @click="${this.handleToggleClick}" aria-controls="items" aria-expanded="${ariaExpanded}">
          <slot name="label">Toggle</slot>
        </button>
        <div id="items" class="items">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('il-nav-section', NavigationSection);
