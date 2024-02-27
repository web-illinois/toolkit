import {LitElement, html} from "lit";
import styles from './il-footer.styles';
import "./il-footer.css";

export class FooterComponent extends LitElement {
  static properties = {
    campusLinks: { attribute: false }
  }

  static styles = styles;

  constructor() {
    super();
    this.campusLinks = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadCampusLinks();
  }

  async loadCampusLinks() {
    const resp = await fetch('https://cdn.brand.illinois.edu/footer-links.json');
    this.campusLinks = await resp.json();
  }

  renderCampusLinks() {
    const links = this.campusLinks.map(link => {
      return html`<li><a href="${link.href}">${link.label}</a></li>`
    })
    return html`<ul>${links}</ul>`;
  }

  renderCampusLogo() {
    return html`
      <div class="logo">
        <a href="https://illinois.edu/">
          <svg viewBox="0 0 151 25" xmlns="http://www.w3.org/2000/svg">
            <g class="block-i">
              <path class="outline" d="M17.924 6.7322V0H0V6.7322H3.98632V18.2678H0V25H17.924V18.2678H13.9377V6.7322H17.924ZM13.9377 19.2322H16.9251V24.0356H0.998982V19.2322H3.98632C4.53384 19.2322 4.98531 18.8056 4.98531 18.2678V6.7322C4.98531 6.20364 4.54345 5.7678 3.98632 5.7678H0.998982V0.964392H16.9347V5.7678H13.9473C13.3998 5.7678 12.9483 6.19436 12.9483 6.7322V18.2678C12.9483 18.7964 13.3902 19.2322 13.9473 19.2322"/>
              <path class="fill" d="M13.9378 5.76777H16.9251V0.964355H0.999023V5.76777H3.98636C4.53388 5.76777 4.98535 6.19433 4.98535 6.73216V18.2678C4.98535 18.7963 4.54349 19.2322 3.98636 19.2322H0.999023V24.0356H16.9347V19.2322H13.9474C13.3999 19.2322 12.9484 18.8056 12.9484 18.2678V6.73216C12.9484 6.2036 13.3902 5.76777 13.9474 5.76777"/>
            </g>
            <g class="illinois">
              <path d="M31.8618 21.6338V3.37524H36.021V21.6338H31.8618Z"/>
              <path d="M40.9678 21.6338V3.37524H45.127V17.9802H54.5597V21.6338H40.9678Z"/>
              <path d="M57.605 21.6338V3.37524H61.7642V17.9802H71.1969V21.6338H57.605Z"/>
              <path d="M74.3379 21.6338V3.37524H78.4971V21.6338H74.3379Z"/>
              <path d="M96.709 21.6338L87.5453 10.024V21.6338H83.4341V3.37524H87.2667L96.1327 14.6141V3.37524H100.244V21.6338H96.6994H96.709Z"/>
              <path d="M114.211 21.9399C108.371 21.9399 104.183 17.7392 104.183 12.5463V12.4907C104.183 7.29781 108.428 3.05078 114.259 3.05078C120.089 3.05078 124.287 7.25145 124.287 12.4443V12.5C124.287 17.6928 120.041 21.9399 114.211 21.9399ZM119.936 12.5C119.936 9.36569 117.554 6.75998 114.211 6.75998C110.868 6.75998 108.534 9.31933 108.534 12.4443V12.5C108.534 15.6342 110.916 18.24 114.259 18.24C117.602 18.24 119.936 15.6806 119.936 12.5556V12.5Z"/>
              <path d="M128.312 21.6338V3.37524H132.471V21.6338H128.312Z"/>
              <path d="M144.065 21.8935C141.202 21.8935 138.311 20.9291 136.044 18.9725L138.503 16.1257C140.203 17.4796 141.99 18.342 144.151 18.342C145.851 18.342 146.879 17.6929 146.879 16.6172V16.5616C146.879 15.5415 146.235 15.0222 143.066 14.2433C139.252 13.3067 136.793 12.2867 136.793 8.66097V8.60533C136.793 5.29487 139.55 3.10645 143.411 3.10645C146.168 3.10645 148.522 3.94102 150.433 5.42469L148.272 8.44769C146.6 7.32566 144.948 6.64873 143.354 6.64873C141.759 6.64873 140.924 7.35348 140.924 8.24369V8.29932C140.924 9.49554 141.73 9.89428 145.006 10.701C148.839 11.6654 151 13.0007 151 16.1814V16.237C151 19.8628 148.137 21.8935 144.055 21.8935H144.065Z"/>
            </g>
          </svg>
        </a>
      </div>`
  }

  renderCampusFooter() {
    return html`
      <div class="campus section">
        ${this.renderCampusLogo()}
        ${this.renderCampusLinks()}
      </div>`;
  }

  renderLegalFooter() {
    return html`
      <div class="legal section">
        <div class="cookies-button-and-links">
          <slot name="cookies-button"></slot>
          <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy</a></li>
          <a href="https://illinois.edu/resources/website/copyright.html">Copyright</a></li>
          <a href=https://illinois.edu/resources/website/accessibility.html">Accessibility</a></li>
        </div>
      </div>`;
  }

  renderSiteFooter() {
    return html`
      <div class="site section">
        <div class="site-name">
          <slot name="site-name"></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        <div class="address-and-primary-unit">
          <div class="address">
            <slot name="address"></slot>
          </div>
          <div class="primary-unit">
            <slot name="primary-unit"></slot>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>`;
  }

  render() {
    return html`
      <div class="footer">
        ${this.renderSiteFooter()}
        ${this.renderCampusFooter()}
        ${this.renderLegalFooter()}
      </div>
    `
  }
}

customElements.define('il-footer', FooterComponent);