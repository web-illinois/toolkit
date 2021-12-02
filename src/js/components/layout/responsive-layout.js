import { LitElement } from 'lit';

export default class ResponsiveLayout extends LitElement {

  static get modes() {
    return [];
  }

  static get properties() {
    return {
      mode: { type: String, attribute: true, reflect: true }
    };
  }

  constructor() {
    super();
    this._mode = undefined;
    this.updateMode = this.updateMode.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('DOMContentLoaded', this.updateMode);
    window.addEventListener('resize', this.updateMode);
    this.updateMode();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('DOMContentLoaded', this.updateMode);
    window.removeEventListener('resize', this.updateMode);
  }

  get mode() {
    return this._mode;
  }

  set mode(mode) {
    if (this._mode !== mode) {
      this._mode = mode;
      this.requestUpdate('mode', mode);
      this.updateComplete.then(this.dispatchModeChange);
    }
  }

  dispatchModeChange() {
    this.dispatchEvent(new CustomEvent('modeChange', { detail: this._mode }));
  }

  getModes() {
    return this.constructor.modes;
  }

  matchMode(mode) {
    return mode.match === undefined || mode.match === true || window.matchMedia(mode.match).matches;
  }

  updateMode() {
    const mode = this.getModes().find(this.matchMode);
    this.mode = mode.name;
  }
}