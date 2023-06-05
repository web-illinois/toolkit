import {LitElement, html, css} from 'lit';
import './il-contact.css';

class Contact extends LitElement {

  constructor() {
    super();
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleContentLoaded() {
    this.updateLinkedElements();
  }

  makeEmailUrl(str) {
    return 'mailto:' + str.trim();
  }

  makePhoneUrl(str) {
    const numbers = str.replace(/\D/g, '').replace(/^1/, '');
    if (numbers.length !== 10) throw new Error("unrecognized phone format");
    return 'tel:+1' + numbers;
  }

  updateLinkedElements() {
    this.updatePhoneLink(this.querySelector('a[slot="voice"], *[slot="voice"] a'));
    this.updatePhoneLink(this.querySelector('a[slot="fax"], *[slot="fax"] a'));
    this.updateEmailLink(this.querySelector('a[slot="email"], *[slot="email"] a'));
  }

  updateEmailLink(link) {
    try {
      if (link && !link.hasAttribute('href')) {
        link.setAttribute('href', this.makeEmailUrl(link.innerText));
      }
    }
    catch (err) {
      console.error(err.message);
    }
  }

  updatePhoneLink(link) {
    try {
      if (link && !link.hasAttribute('href')) {
        link.setAttribute('href', this.makePhoneUrl(link.innerText));
      }
    }
    catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return html`
      <div id="contact">
          <div id="structured">
              <div id="location">
                  <slot name="address"></slot>
              </div>
              <div id="phone">
                  <slot name="voice"></slot>
                  <slot name="fax"></slot>
              </div>
              <div id="web">
                  <slot name="email"></slot>
              </div>
          </div>
          <div id="additional">
              <slot></slot>
          </div>          
      </div>
    `;
  }
}

customElements.define('il-contact', Contact);
