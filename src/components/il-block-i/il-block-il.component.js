import { LitElement, html, css } from 'lit';

class Wordmark extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #block-i {
        display: block;
        width: 100%;
        max-width: 235px;
      }
    .outline {
      fill: var(--il-blue);
    }
    .fill {
      fill: var(--il-orange);
    }`
  }

  render() {
    return html`
      <div id="block-1">
        <a href="https://illinois.edu/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 79">
            <title>Block I logo</title>
            <path class="outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1z" />
            <path class="fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z" />
          </svg>
        </a>
      </div>`
  }
}

customElements.define('il-block-i', Wordmark);
