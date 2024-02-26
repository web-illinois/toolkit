import {html, LitElement} from "lit";
import {NavigationSection} from "../il-nav-section/il-nav-section";

export class NavigationSectionWithLink extends NavigationSection {
  renderHeader() {
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <div class="header-with-link">
        <div class="link" id="link">
          <slot name="link"></slot>
        </div>
        <button class="toggle" @click="${this.handleToggleClick}" aria-controls="items" aria-expanded="${ariaExpanded}" aria-labelledby="link">
          <span class="indicator" aria-hidden="true">
            ${this.renderChevron()}
          </span>
        </button>
      </div>`
  }
}

customElements.define('il-nav-section-with-link', NavigationSectionWithLink);