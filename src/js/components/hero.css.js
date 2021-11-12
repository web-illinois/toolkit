import { css } from 'lit';

export default css`

.hero {
  position: relative;
  background-color: var(--il-blue);
  color: white;
}
.hero.orange {
  background-color: var(--il-orange);
}
.background {
  position: relative;
  width: 100%;
  height: 223px;
  overflow: hidden;
}
.hero.with-duotone .background {
  background-color: var(--il-orange);
}
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.background-image img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  object-fit: cover;
  object-position: center;
}
.hero.with-duotone .background-image img {
  filter: brightness(125%) contrast(125%) grayscale(100%);
  mix-blend-mode: multiply;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.duotone--light.overlay {
  display: none;
  z-index: 201;
  background-color: var(--il-orange);
  mix-blend-mode: darken;
}
.duotone--dark.overlay {
  z-index: 202;
  background-color: var(--il-blue);
  mix-blend-mode: lighten;
}
.fingerprint.overlay {
  z-index: 300;
  stroke: #FEFEFE;
  opacity: .149;
}
.fingerprint.overlay svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%:
  object-fit: cover;
}
.content-container--level-1 {
  padding-left: var(--il-content-margin);
  padding-right: var(--il-content-margin);
  position: relative;
  z-index: 100;
}
.content-container--level-2 {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: var(--il-content-max-width);
  margin: 0 auto;
}
.content-container--level-3 {
  padding: 18px 0 36px;
}
@media (min-width: 576px) {
  .background {
    height: 315px;
  }
  .content {
    padding: 36px 0 72px;
  }
}
@media (min-width: 767px) {
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .content-container--level-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 66%;
    min-height: 417px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 0 80px;
  }
  .hero[data-align-x="left"] .content-container--level-3 {
    margin-left: 0;
    align-items: flex-start;
    text-align: left;
  }
  .hero[data-align-x="right"] .content-container--level-3 {
    margin-right: 0;
    align-items: flex-end;
    text-align: right;
  }
  .hero[data-align-y="top"] .content-container--level-3 {
    justify-content: flex-start;
  }
  .hero[data-align-y="bottom"] .content-container--level-3 {
    justify-content: flex-end;
  }
}

`;