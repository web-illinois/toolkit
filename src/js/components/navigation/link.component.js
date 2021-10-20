import { LitElement, html } from 'lit';
import NavigationItem from './item.component';
import itemStyles from './item.css';
import styles from './link.css';

class NavigationLink extends NavigationItem {
  static get properties() {
    const props = NavigationItem.properties;
    props.href = { type: String, attribute: true };
    props.label = { type: String, attribute: true };
    return props;
  }

  static get styles() {
    return itemStyles + styles;
  }

  constructor() {
    super();
  }

  getLink() {
    return this.querySelector('a');
  }

  render() {
    const view = this.compact ? 'compact' : 'full';
    return html`<li class=${view}>
  <slot>
    <a href=${this.href}>${this.label}</a>
  </slot>
</li>`
  }
}

customElements.define('il-nav-link', NavigationLink);
