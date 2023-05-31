import {LitElement, html, css} from 'lit';
import styles from './il-video-feature.styles';
import VideoFeature from './video-feature';
import '../../css/base.css';

class VideoFeatureComponent extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="video-feature">
        <div id="video">
          <slot name="video"></slot>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>`;
  }
}

customElements.define('il-video-feature', VideoFeatureComponent);
