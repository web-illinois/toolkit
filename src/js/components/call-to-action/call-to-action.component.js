import { LitElement, html, css } from 'lit';
import styles from './call-to-action.css';

class CallToAction extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    let alignmentClass = getComputedStyle(this).getPropertyValue('text-align').trim();
    
    return html`
        <div class="il-calltoaction ${alignmentClass}">
            <div class="il-calltoaction-padding"></div>
            <div class="il-calltoaction-icon ${alignmentClass}"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body ${alignmentClass}"><slot></slot></div>
            <div class="il-calltoaction-padding"></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
