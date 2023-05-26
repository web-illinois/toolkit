import { LitElement, html, css } from 'lit';
import styles from './il-footer.styles';
import '../il-wordmark/il-wordmark.component';
import "./il-footer.css";

class Footer extends LitElement {

  static get properties() {
    return {
      _oneTrust: { type: Boolean, state: true }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._oneTrust = true;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    this._oneTrust = this.isOneTrustPresent();
  }

  handleContentLoaded(evt) {
    this._oneTrust = this.isOneTrustPresent();
  }

  isOneTrustPresent() {
    const isStubVariableDefined = typeof OneTrustStub !== 'undefined';
    const isConsentDialogFound = document.getElementById('onetrust-consent-sdk') !== null;
    return isStubVariableDefined || isConsentDialogFound;
  }

  render() {
    return html`
      <div id="footer">
        <section id="site">
          <div class="info">
            <div class="site">
              <slot name="contact"></slot>
            </div>
            <div class="social">
              <slot name="social"></slot>
            </div>
            <div class="parent">
              <slot name="parent"></slot>
            </div>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </section>
        <section id="campus">
          <il-wordmark></il-wordmark>
        </section>
        <section id="required">
          <div class="container">
            <slot name="onetrust"></slot>
            <div class="links">
              <ul>
                <li><a href="https://illinois.edu/resources/website/copyright.html">Copyright</a></li>
                <li><a href="https://illinois.edu/resources/website/accessibility.html">Accessibility</a></li>
                <li>
                  <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy Statement and Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('il-footer', Footer);
