import {LitElement, css, html} from 'lit';
import {baseStyles} from './il-nav-section.styles';
import styles from './il-nav-section.styles';

export class NavigationSection extends LitElement {

  static properties = {
    expanded: { attribute: false }
  }

  static styles = [baseStyles, styles];

  constructor() {
    super();
    this.nav = undefined;
    this.expanded = false;
    document.addEventListener('DOMContentLoaded', this.handleDomContentLoaded.bind(this));
  }

  handleDomContentLoaded() {
    this.dispatchNavigationConnectEvent();
  }

  handleToggleClick() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  dispatchNavigationConnectEvent() {
    this.dispatchEvent(new CustomEvent('il-nav-section', { bubbles: true }))
  }

  getLevel() {
    let section = this, level = 0;
    do {
      level++;
      section = section.parentNode.closest('il-nav-section, il-nav-section-with-link');
    } while (section);
    return level;
  }

  renderChevron() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`
  }

  renderHeader() {
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <button class="header" @click="${this.handleToggleClick}" aria-controls="items" aria-expanded="${ariaExpanded}">
          <span class="label">
            <slot name="label">Toggle</slot>
          </span>
        <span class="indicator" aria-hidden="true">
            ${this.renderChevron()}
          </span>
      </button>`
  }

  renderItems() {
    return html`
      <div id="items" class="items">
        <slot></slot>
      </div>`
  }

  render() {
    const expandedClass = this.expanded ? 'expanded' : 'collapsed';
    return html`
      <div class="section ${expandedClass}">
        ${this.renderHeader()}
        ${this.renderItems()}
      </div>
    `;
  }
}

customElements.define('il-nav-section', NavigationSection);