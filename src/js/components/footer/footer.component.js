import {LitElement, html, css} from 'lit';
import styles from './footer.css';
import wordmark from './wordmark.html';
import campusLinks from './campus-links.json';

class Footer extends LitElement {
  static get styles() {
    return styles;
  }

  renderWordmark() {
    return wordmark;
  }

  render() {
    const year = new Date().getFullYear();
    return html`
      <div class="footer">
        <div class="site-footer section">
          <div class="section-inner">
            <div class="site-footer__top">
              <div class="site-footer__top-left">
                <slot name="identity"></slot>
                <slot name="social"></slot>
              </div>
              <div class="site-footer__top-right">
                <slot name="buttons"></slot>
              </div>
            </div>
            <div class="site-footer__bottom">
              <div class="site-footer__bottom-left">
                <slot name="contact"></slot>
                <slot name="parent"></slot>
              </div>
              <div class="site-footer__bottom-right">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="campus-footer section">
          <div class="section-inner">
            <div class="campus-wordmark">
              ${wordmark}
            </div>
            <ul class="links">
              ${campusLinks.map(l => html`
                <li><a href=${l.url}>${l.label}</a></li>`)}
            </ul>
          </div>
        </div>
        <div class="links-section section">
          <div class="section-inner">
            <slot name="links">
              <nav class="il-footer-links" aria-label="Legal notices">
                <ul>
                  <li>
                    <button data-il="cookies" id="ot-sdk-btn" class="ot-sdk-show-settings">About Cookies</button>
                  </li>
                  <li><a data-il="privacy" href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy Policy</a></li>
                  <li><a data-il="copyright" href="https://illinois.edu/resources/website/copyright.html">Copyright &#169; ${year}</a></li>
                  <li><a data-il="accessibility" href="https://illinois.edu/resources/website/accessibility.html">Accessibility</a></li>
                </ul>
              </nav>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('il-footer', Footer);
