import {LitElement, html, css} from 'lit';
import styles from './video.css';
import Video from './video';

class VideoComponent extends LitElement {

  static get properties() {
    return {
        src: {type: String, attribute: true},
        title: {type: String, attribute: true},
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.src = undefined;
    this.view = '';
    this.title = '';
  }

  getIframe(url, title, view) {
      let urlHelper = new Video.UrlItem(url, view);
      if (urlHelper.videoType == "youtube") {
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;

      } else if (urlHelper.videoType == "mediaspace") {
        return html`<iframe title='${title}' id='kaltura_player_${urlHelper.videoId}' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>`;

      } else if (urlHelper.videoType == "vimeo") {
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
      }
      return '';
    }

  render() {
    return html`
        <div style="width: 100%; align-self: center;"><div class='videowrapper'>${this.getIframe(this.src, this.title, this.view)}</div></div>`;
  }
}

customElements.define('il-video', VideoComponent);
