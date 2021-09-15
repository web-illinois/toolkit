import {LitElement, html, css} from 'lit';

class VideoFeature extends LitElement {

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
    return css`
    .videofeature {
        display: block;
    }
    .videofeature .background {
        padding: 0;
        background: black;
    }
    .videofeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
    }
    .videofeature .content.gradient {
        color: white;
        background: linear-gradient(180deg, var(--il-industrial-blue) 0%, var(--il-blue) 100%);
    }
    .videofeature .content.orange {
        color: white;
        background: linear-gradient(180deg, var(--il-orange) 0%, var(--il-altgeld) 100%);
    }
    .videofeature .content.solid, .videofeature .background.solid  {
        color: white;
        background: var(--il-blue);
    }
    .videowrapper {
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0;
    }
    @media (min-width: 767px) {
        .videofeature {
            display: flex;
        }
        .videofeature .content {
            padding: 1.875rem;
        }
        .videowrapper {
            padding-bottom: 100%; 
        }
    }
    @media (min-width: 993px) {
        .videofeature .content {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .videofeature .content {
            padding: 3rem 6rem;
        }
        .videowrapper {
            padding-bottom: 56.25%; 
        }
    }
        `;
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
      let embedCode = url.split("/").pop();
      let urlLowerCase = url.toLowerCase();
      if (urlLowerCase.includes("youtube") || urlLowerCase.includes("youtu.be")) {
        const youTubeV = url.split("v=");
        if (youTubeV.length > 1) {
            embedCode = youTubeV[1];
        }
        else {
            embedCode = url.split("/").pop();
        }
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='https://www.youtube.com/embed/${embedCode}' frameborder='0' allowfullscreen></iframe>`;

      } else if (urlLowerCase.includes("mediaspace")) {
        let playerCode = '26883701';
        if (view == "vertical") {
            playerCode = '44666331';
        }
        return html`<iframe title='${title}' id='kaltura_player_${embedCode}' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='https://mediaspace.illinois.edu/embed/secure/iframe/entryId/${embedCode}/uiConfId/${playerCode}' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>`;

      } else if (urlLowerCase.includes("facebook")) {
        return html`<div class='fb-video' data-href='https://www.facebook.com/facebook/videos/${embedCode}/' data-allowfullscreen='true'></div>`;

      } else if (urlLowerCase.includes("vimeo")) {
        return html`<iframe title='${title}' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='https://player.vimeo.com/video/${embedCode}' frameborder='0' allowfullscreen></iframe>`;
      }
      return "";
    }

  renderVideo() {
      let aspectRatio = 'position: relative; padding-bottom: 56.25%; height: 0;';
      if (this.view == 'stretch') {
          aspectRatio = 'height: 100%; width: 100%;'
      }

      let iframe = this.getIframe(this.src, this.title, this.view);

      return html
      `<div style="width: 100%; align-self: center;"><div class='videowrapper'>${iframe}</div></div>`
    }

  render() {

    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-video-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
    }
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content' : this.background == 'orange' ? 'content orange' : 'content gradient';
    var backgroundClass = (this.background == 'solid' || this.background == 'blue') ? 'background solid' : this.background == 'white' ? 'background' : this.background == 'orange' ? 'background orange' : 'background gradient';
    var leftFlex = this.size == 'large' ? 2 : 1;
    var rightFlex = this.size == 'small' ? 2 : 1;
    if (this.align == 'right')
    {
        return html`
        <div class="videofeature">
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
            <div class=${backgroundClass}" style="flex: ${leftFlex}; display: flex;">${this.renderVideo()}</div>
        </div>
        `;
    }
    return html`
        <div class="videofeature">
            <div class="${backgroundClass}" style="flex: ${leftFlex}; display: flex;">${this.renderVideo()}</div>
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-video-feature', VideoFeature);
