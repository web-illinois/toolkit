import { css } from 'lit';

export default css`

  #container {
    display: block;
    container-type: inline-size;
    position: relative;
    overflow: hidden;
    background: var(--il-image-feature--background);
  }

  #image {
    position: relative;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  
  #image ::slotted(img) {
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }

  #main {
    box-sizing: border-box;
    position: relative;
    padding: 1em;
  }
  
  #background {
    position: absolute;
    left: 0;
    top: 1.5em;
    z-index: 1;
    width: calc(100% - 1.5em);
    height: calc(100% - 3em);
    opacity: .9;
    pointer-events: none;
    background: var(--il-image-feature--content-background--background);
  }
  
  @container (min-width: 600px) {
    #image {
      position: absolute;
      left: 0;
      top: 0;
      width: var(--il-image-feature--image--width);
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    #image ::slotted(img) {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-position: center;
    }

    #main {
      box-sizing: border-box;
      position: relative;
      margin-left: 50%;
      min-height: 40cqw;
      padding: 3em;
    }
  }

  #content {
    position: relative;
    z-index: 100;
  }


  .imagefeature {
    display: block;
    margin: 0 auto;
    max-width: var(--il-image-feature-max-width);
  }

  .imagefeature.right {
    --il-image-feature-flex-direction: row-reverse;
  }

  .imagefeature.large {
    --il-image-feature-flex-grow-image: 2;
  }

  .imagefeature.small {
    --il-image-feature-flex-grow-content: 2;
  }

  .imagefeature.portrait {
    --il-image-feature-flex-grow-content: 4;
    --il-image-feature-min-height: 10vw;
  }

  .imagefeature .background {
    padding: 0;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 310px;
    color: transparent;
    display: flex;
    flex-grow: var(--il-image-feature-flex-grow-image);
    flex-shrink: 1;
    flex-basis: 0;
  }

  .imagefeature .content {
    text-align: left;
    color: var(--il-image-feature-color);
    flex-grow: var(--il-image-feature-flex-grow-content);
    flex-shrink: 1;
    flex-basis: 0;
    height: 100%;
  }

  .imagefeature .content .content-inner {
    padding: var(--il-image-feature-content-padding);
  }

  .il-image-feature-with-overlay {
    position: relative;
  }

  .il-image-feature-with-overlay-inner {
    padding-top: 75px;
    padding-bottom: 105px;
    max-width: var(--il-content-max-width);
    margin: auto;
    display: flex;
    justify-content: var(--il-image-feature-with-overlay-align);
    color: var(--il-image-feature-color);
  }

  .il-image-feature-with-overlay-content {
    width: var(--il-image-feature-with-overlay-width);
    padding: var(--il-image-feature-with-overlay-padding);
    background: var(--il-image-feature-with-overlay-background);
    margin: 0 70px;
  }

  @media only screen and (max-width: 990px) {
    .il-image-feature-with-overlay {
      background: var(--il-image-feature-with-overlay-background-solid);
      border: var(--il-image-feature-with-overlay-border);
    }

    .il-image-feature-with-overlay-outer {
      border-top: var(--il-image-feature-with-overlay-border);
    }

    .il-image-feature-with-overlay-inner {
      margin: 0;
      padding: 0 30px;
    }

    .il-image-feature-with-overlay-content {
      position: initial;
      width: initial;
      z-index: initial;
      padding: 30px 0;
      background: var(--il-image-feature-with-overlay-background-solid);
      border: none;
    }
  }

  @media (min-width: 767px) {
    .imagefeature {
      display: flex;
      flex-direction: var(--il-image-feature-flex-direction);
      min-height: var(--il-image-feature-min-height);
    }

    .imagefeature .background {
      min-height: initial;
    }
  }
`;
