import {LitElement, html, css} from 'lit';
import styles from './video-feature.css';
import VideoFeature from './video-feature';
import '../../css/styles.scss';

class VideoFeatureComponent extends LitElement {

  static get properties() {
    return {
        size: {type: String, attribute: true},
        background: {type: String, attribute: true},
        src: {type: String, attribute: true},
        align: {type: String, attribute: true},
        title: {type: String, attribute: true},
        view: {type: String, attribute: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.size = '';
    this.src = undefined;
    this.background = '';
    this.align = '';
    this.title = '';
    this.view = '';
  }

  getIframe(url, title, view) {
      let urlHelper = new VideoFeature.UrlItem(url, view);
      if (urlHelper.videoType == "youtube") {
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;

      } else if (urlHelper.videoType == "mediaspace") {
        return html`<iframe title='${title}' id='kaltura_player_${urlHelper.videoId}' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>`;

      } else if (urlHelper.videoType == "vimeo") {
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
      }
      return '';
    }

  renderVideo() {
      return html
      `<div style="width: 100%; align-self: center;"><div class='videowrapper'>${this.getIframe(this.src, this.title, this.view)}</div></div>`
    }

  render() {

    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-video-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
    }
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content' : this.background == 'orange' ? 'content orange' : this.background == 'gray' ? 'content white gray' :'content gradient';
    var backgroundClass = (this.background == 'solid' || this.background == 'blue') ? 'background solid' : this.background == 'white' ? 'background' : this.background == 'orange' ? 'background orange' : this.background == 'gray' ? 'background gray' : 'background gradient';

    return html`
        <div class="videofeature ${this.align} ${this.size}">
            <div class="${backgroundClass}">${this.renderVideo()}</div>
            <div class="${contentClass}">
                <slot></slot>
            </div>
        </div>`;
  }
}

customElements.define('il-video-feature', VideoFeatureComponent);
