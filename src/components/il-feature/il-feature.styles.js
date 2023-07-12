import { css } from 'lit';

export default css`
  #container {
    display: var(--il-feature--display, flex);
    flex-direction: var(--il-feature--flex-direction, row);
    position: relative;
    overflow: hidden;
    background: var(--il-feature--background);
    min-height: var(--il-feature--min-height);
    margin: 0 auto;
    max-width: var(--il-feature--max-width);
  }

  #image {
    position: var(--il-feature--image--position);
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    display: var(--il-feature--image--display);
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
    flex-grow: var(--il-feature--main--flex-grow);
    flex-shrink: 1;
    flex-basis: 0px;
    max-width: var(--il-feature--main--max-width);
    margin: auto;
    background: var(--il-feature--background);
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
    padding: var(--il-feature--content--padding);
    position: relative;
    z-index: 100;
    opacity: .9;
    background: var(--il-feature--background);
    margin: var(--il-feature--content--margin, auto);
    width: var(--il-feature--content--width, auto);
  }

  @container (max-width: 1450px) {
    #content {
      padding: 20px 30px;
      margin: auto;
      width: auto;
    }
  }

  @container (max-width: 767px) {
    #container {
      display: block;
      border: var(--il-feature--container--border, none);
    }
    #image ::slotted(img) {
      position: initial;
    }
  }

  #container[data-compact] {
    display: block;
    border: var(--il-feature--container--border, none);
  }
  #container[data-compact] #image ::slotted(img) {
    position: initial;
  }
  #container[data-tablet] #content {
    padding: 20px 30px;
    margin: auto;
    width: auto;
  }
`;
