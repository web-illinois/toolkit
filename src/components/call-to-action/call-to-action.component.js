import { LitElement, html, css } from 'lit';
import styles from './call-to-action.css';
import "./call-to-action.scss"

class CallToAction extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  clearIcon(e) {
    this.shadowRoot.querySelector('.il-calltoaction-icon').classList.remove('il-calltoaction-centered-no-icon');
    this.shadowRoot.querySelector('.il-calltoaction-body').classList.remove('il-calltoaction-centered-no-icon');
  }

  firstUpdated(){
    this.shadowRoot.querySelector('slot[name="icon"]').addEventListener('slotchange', (e) => this.clearIcon(e));
  }


  render() {
    let alignmentClass = getComputedStyle(this).getPropertyValue('text-align').trim();
    
    return html`
        <div class="il-calltoaction ${alignmentClass}">
            <div class="il-calltoaction-padding"></div>
            <div class="il-calltoaction-icon ${alignmentClass} il-calltoaction-centered-no-icon"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body ${alignmentClass} il-calltoaction-centered-no-icon"><slot></slot></div>
            <div class="il-calltoaction-padding"></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
