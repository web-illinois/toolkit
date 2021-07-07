import {LitElement, html, css} from 'lit-element';

class FeatureSplit extends LitElement {

  static get properties() {
    return {
        picture: {type: String, attribute: true},
        background: {type: String, attribute: true},
        contentbackground: {type: String, attribute: true},
        align: {type: String, attribute: true}
    };
  }

  static get styles() {
    return css`
    .featuresplit {
        display: block;
    }
    .featuresplit .background {
        padding: 1.875rem 1.25rem;
        min-height: 30vw;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
    }
    .featuresplit .content {
        padding: 1.875rem 1.25rem;
    }
    .featuresplit .content.gradient {
        color: white;
        background: linear-gradient(180deg, var(--il-blue) 0%, var(--il-industrial-blue) 100%);
    }
    .featuresplit .content.solid {
        color: white;
        background: var(--il-blue);
    }
    @media (min-width: 767px) {
        .featuresplit {
            min-height: 30vw;
            display: flex;
        }
        .featuresplit.noheight {
            min-height: 10vw;
        }
        .featuresplit .background {
            min-height: initial;
            padding: 3rem 6rem;
        }
        .featuresplit .content {
            padding: 3rem 6rem;
        }
   
    }
        `;
  }

  constructor() {
    super();
    this.picture = '';
    this.background = undefined;
    this.contentbackground = '';
    this.align = '';
  }


  render() {
    var contentClass = this.contentbackground == 'solid' ? 'content solid' : this.contentbackground == 'white' ? 'content' : 'content gradient';
    var heightOption = this.picture == 'portrait' ? 'featuresplit noheight' : 'featuresplit';
    var leftFlex = this.picture == 'large' ? 2 : 1;
    var rightFlex = this.picture == 'small' ? 2 : this.picture == 'portrait' ? 4 : 1;
    if (this.align == 'right')
    {
        return html`
        <div class="${heightOption}">
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
            <div class="background" role="presentation" style="background-image: url('${this.background}'); flex: ${leftFlex};">
            </div>
        </div>
        `;
    }
    return html`
        <div class="${heightOption}">
            <div class="background" role="presentation" style="background-image: url('${this.background}'); flex: ${leftFlex};">
            </div>
            <div class="${contentClass}" style="flex: ${rightFlex};">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-featuresplit', FeatureSplit);
