import { css } from 'lit';

export default css`
  #container {
    display: var(--il-image-feature--display, flex);
    flex-direction: var(--il-image-feature--flex-direction, row);
    position: relative;
    overflow: hidden;
    background: var(--il-image-feature--background);
    min-height: var(--il-image-feature--min-height);
    margin: 0 auto;
    max-width: var(--il-image-feature--max-width);
  }

  #image {
    position: var(--il-image-feature--image--position);
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    display: var(--il-image-feature--image--display);
    align-items: center;
    justify-content: center;
    flex: 1 1 0px;
  }
  
  #image ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: center;
  }

  #main {
    box-sizing: border-box;
    position: relative;
    padding: 1em;
    flex-grow: var(--il-image-feature--main--flex-grow);
    flex-shrink: 1;
    flex-basis: 0px;
    max-width: var(--il-image-feature--main--max-width);
    margin: auto;
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
  }

  #content {
    padding: var(--il-image-feature--content--padding);
    position: relative;
    z-index: 100;
    opacity: .9;
    background: var(--il-image-feature--background);
    margin: var(--il-image-feature--content--margin, auto);
    width: var(--il-image-feature--content--width, auto);
  }

  @container (max-width: 767px) {
    #container {
      display: block;
      border: var(--il-image-feature--container--border, none);
    }
    #image ::slotted(img) {
      position: initial;
    }
    #content {
      padding: 20px 30px;
      margin: auto;
      width: auto;
    }
  }

  #container[compact] {
    display: block;
    border: var(--il-image-feature--container--border, none);
  }
  #container[compact] #image ::slotted(img) {
    position: initial;
  }
  #container[compact] #content {
    padding: 20px 30px;
    margin: auto;
    width: auto;
  }
`;
