import {LitElement, html, css} from 'lit-element';

class ImageFeature extends LitElement {

  static get properties() {
    return {
        size: {type: String, attribute: true},
        background: {type: String, attribute: true},
        src: {type: String, attribute: true},
        alt: {type: String, attribute: true},
        align: {type: String, attribute: true}
    };
  }

  static get styles() {
    return css`
    .imagefeature {
        display: block;
    }
    .imagefeature .background {
        padding: 1.875rem 1.25rem;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        min-height: 250px;
        color: transparent;
    }
    .imagefeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
    }
    .imagefeature .content.gradient {
        color: white;
        background: linear-gradient(180deg, var(--il-industrial-blue) 0%, var(--il-blue) 100%);
    }
    .imagefeature .content.orange {
        color: white;
        background: linear-gradient(180deg, var(--il-orange) 0%, var(--il-altgeld) 100%);
    }
    .imagefeature .content.solid {
        color: white;
        background: var(--il-blue);
    }
    @media (min-width: 767px) {
        .imagefeature {
            display: flex;
        }
        .imagefeature.noheight {
            min-height: 10vw;
        }
        .imagefeature .background {
            min-height: initial;
            padding: 3rem 4rem;
        }
        .imagefeature .content {
            padding: 1.875rem;
        }
    }
    @media (min-width: 993px) {
        .imagefeature .content {
            padding: 3rem 2.2vw;
        }
        .imagefeature .background {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .imagefeature .content {
            padding: 3rem 6rem;
        }
        .imagefeature .background {
            padding: 3rem 6rem;
        }
    }
        `;
  }

  constructor() {
    super();
    this.size = '';
    this.src = undefined;
    this.alt = '';
    this.background = '';
    this.align = '';
  }


  render() {

    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
    }
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content' : this.background == 'orange' ? 'content orange' : 'content gradient';
    var heightOption = this.size == 'portrait' ? 'imagefeature noheight' : 'imagefeature';
    var leftFlex = this.size == 'large' ? 2 : 1;
    var rightFlex = this.size == 'small' ? 2 : this.size == 'portrait' ? 4 : 1;
    if (this.align == 'right')
    {
        return html`
        <div class="${heightOption}">
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
            <div class="background" role="presentation" style="background-image: url('${this.src}'); flex: ${leftFlex};">${this.alt}</div>
        </div>
        `;
    }
    return html`
        <div class="${heightOption}">
            <div class="background" role="presentation" style="background-image: url('${this.src}'); flex: ${leftFlex};">${this.alt}</div>
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-image-feature', ImageFeature);
