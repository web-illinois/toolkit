import {css} from 'lit';

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
.content {
  position: relative;
  box-sizing: border-box;
  color: white;
  padding: 18px 18px 36px;
}
@media (min-width: 576px) {
  .background {
      height: 315px;
  }
  .content {
      padding: 36px 36px 72px;
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
  .content {
      min-height: 417px;
      z-index: 100;
      padding: 60px 80px 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
  .hero[data-align-x="left"] .content {
      align-items: flex-start;
      text-align: left;
  }
  .hero[data-align-x="right"] .content {
      align-items: flex-end;
      text-align: right;
  }
  .hero[data-align-y="top"] .content {
      justify-content: flex-start;
  }
  .hero[data-align-y="bottom"] .content {
      justify-content: flex-end;
  }
}

`;