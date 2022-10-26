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
    this.aspectratio = '';
    this.src = undefined;
    this.title = '';
  }

  getIframe(url, title, view) {
      let urlHelper = new Video.UrlItem(url, view);
      if (urlHelper.videoType == "youtube") {
        return html`<iframe title='${title} (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
      } else if (urlHelper.videoType == "mediaspace") {
        return html`<iframe title='${title} (video)' id='kaltura_player_${urlHelper.videoId}' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>`;
      } else if (urlHelper.videoType == "vimeo") {
        return html`<iframe title='${title} (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
      }
      return '';
    }

  render() {
    var getAspectRatio = getComputedStyle(this).getPropertyValue('--il-video-aspect-ratio');
    if (getAspectRatio == 'vertical') {
      this.style.setProperty('--il-video-padding-bottom', '177.78%');
    } else if (getAspectRatio == 'tv') {
      this.style.setProperty('--il-video-padding-bottom', '75%');
    } else if (getAspectRatio.endsWith('%')) {
      this.style.setProperty('--il-video-padding-bottom', this.aspectratio);
    } else if (getAspectRatio.includes('/')) {
      var items = getAspectRatio.split('/');
      this.style.setProperty('--il-video-padding-bottom', (parseInt(items[1].replace("'", "")))/(parseInt(items[0].replace("'", ""))) * 100 + '%');
    } else {
      this.style.setProperty('--il-video-padding-bottom', '56.25%');
    }
    return html`
        <div class="videowrapper-width" style=""><div class="videowrapper-full"><div class='videowrapper'>${this.getIframe(this.src, this.title, this.view)}</div></div></div>`;
  }
}

customElements.define('il-video', VideoComponent);
