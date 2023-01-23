import { LitElement, html } from 'lit';
import styles from './introduction.css';
import Debugger from '../../debug';

class IntroductionComponent extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }


  render() {
    return html`<div class="heading"><slot name="heading"></slot></div><div class="introduction"><slot></slot></div>`;
    }
}

customElements.define('il-introduction', IntroductionComponent);
