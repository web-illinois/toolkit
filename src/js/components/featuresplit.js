import {LitElement, html, css} from 'lit-element';

class FeatureSplit extends LitElement {

  static get properties() {
    return {
        picture: {type: String, attribute: true},
        background: {type: String, attribute: true},
        nogradient: {type: Boolean, attribute: true}
    };
  }

  static get styles() {
    return css`
    .featuresplit {
        display: block;
    }
    .featuresplit .background {
        padding: 1rem 2rem;
        min-height: 30vw;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
    }
    .featuresplit .content {
        padding: 1rem 2rem;
    }
    .featuresplit .content.gradient {
        color: white;
        background: linear-gradient(0deg, rgba(28,87,166,1) 0%, rgba(15,44,84,1) 100%);
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
    this.nogradient = false;
  }


  render() {
    var contentClass = this.nogradient ? 'content' : 'content gradient';
    var leftFlex = this.picture == 'large' ? 2 : 1;
    var rightFlex = this.picture == 'small' ? 2 : this.picture == 'portrait' ? 4 : 1;
    var heightOption = this.picture == 'portrait' ? 'featuresplit noheight' : 'featuresplit';
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
