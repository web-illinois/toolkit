import {LitElement, html, css} from 'lit';
import Video from './video';
import './il-video.css';

class VideoComponent extends LitElement {

  static get properties() {
    return {
      src: {type: String, attribute: true},
      title: {type: String, attribute: true},
    };
  }

  static get styles() {
    return css`
.videowrapper-width {
    width: var(--il-video-max-width);
    margin: var(--il-video-margin);
}
.videowrapper-full {
    width: 100%; 
    align-self: center;
}
.videowrapper {
    position: relative; 
    height: 0;
}
`;
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
      } else if (urlHelper.videoType == "blank") {
        return html`<div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: black; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;'>${title}</div>`;
      } else {
        return '';
      }
    }

  render() {
    let getAspectRatio = getComputedStyle(this).getPropertyValue('--il-video-aspect-ratio').trim();
    let padding = '56.25%';
    if (getAspectRatio == 'vertical') {
      padding = '177.78%';
    } else if (getAspectRatio == 'tv') {
      padding = '75%';
    } else if (getAspectRatio.endsWith('%')) {
      padding = getAspectRatio;
    } else if (getAspectRatio.includes('/')) {
      let items = getAspectRatio.split('/');
      padding = (parseInt(items[1].replace("'", "")))/(parseInt(items[0].replace("'", ""))) * 100 + '%';
    } 
    return html`
      <div class="videowrapper-width" style=""><div class="videowrapper-full"><div class='videowrapper' style='padding-bottom: ${padding}'>${this.getIframe(this.src, this.title, this.view)}</div></div></div>`;
  }
}

customElements.define('il-video', VideoComponent);
