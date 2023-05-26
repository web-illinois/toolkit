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
          <div class="container">
            <div class="identity">
              <slot name="identity"></slot>
            </div>
            <div class="info">
              <div class="contact">
                <slot name="contact"></slot>
              </div>
              <div class="social">
                <slot name="social"></slot>
              </div>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </section>
        <section id="campus">
          <div class="container">
            <il-wordmark></il-wordmark>
            <div class="links">
              <ul>
                <li><a href="https://illinois.edu/resources/website/accessibility.html">Accessibility at Illinois</a></li>
                <li><a href="https://illinois.edu/admissions/index.html">Admissions</a></li>
                <li><a href="https://illinois.edu/alumni/index.html">Alumni</a></li>
                <li><a href="https://illinois.edu/athletics/index.html">Athletics</a></li>
                <li><a href="https://bookstore.illinois.edu/">Bookstore</a></li>
                <li><a href="https://illinois.edu/resources/calendars.html">Calendars</a></li>
                <li><a href="https://directory.illinois.edu/search">Campus Directory</a></li>
                <li><a href="https://illinois.edu/map/view">Campus Map</a></li>
                <li><a href="https://diversity.illinois.edu/">Diversity, Equity &amp; Inclusion</a></li>
                <li><a href="https://illinois.edu/resources/emergency.html">Emergency</a></li>
                <li><a href="https://jobs.illinois.edu/">Employment</a></li>
                <li><a href="https://giving.illinois.edu/">Giving</a></li>
                <li><a href="http://wellness.illinois.edu/">Mental Health</a></li>
                <li><a href="https://news.illinois.edu/">News</a></li>
                <li><a href="https://chancellor.illinois.edu/">Office of the Chancellor</a></li>
                <li><a href="https://provost.illinois.edu/">Office of the Provost</a></li>
                <li><a href="https://illinois.edu/research/index.html">Research</a></li>
                <li><a href="https://odos.illinois.edu/community-of-care/student-assistance-center/">Student Assistance Center</a></li>
                <li><a href="https://www.uillinois.edu/">University of Illinois System</a></li>
              </ul>
            </div>
          </div>
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
