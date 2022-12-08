import { LitElement, html, css } from 'lit';
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
    return html`
        <div class="footer">
            <div class="site-footer section">
                <div class="section-inner">
                    <slot name="identity"></slot>
                    <slot name="social"></slot>
                    <slot name="contact"></slot>
                    <slot></slot>
                </div>
            </div>
            <div class="campus-footer section">
                <div class="section-inner">
                    <div class="campus-wordmark">
                        ${wordmark}
                    </div>
                    <ul class="links">
                        ${campusLinks.map(l => html`<li><a href=${l.url}>${l.label}</a></li>`)}
                    </ul>
                </div>
            </div>
            <div class="links-section section">
                <div class="section-inner">
                    <slot name="links">
                        <nav class="il-footer-links" aria-label="Legal notices">
                            <ul>
                                <li><button data-il="cookies"></button></li>
                                <li><a data-il="privacy"></a></li>
                                <li><a data-il="copyright"></a></li>
                                <li><a data-il="accessibility"></a></li>
                                <li><a href="#">College Bylaws</a></li>
                                <li><a href="#">Login</a></li>
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
