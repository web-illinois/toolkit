import { css } from 'lit';

export default css`

.hero {
  position: relative;
  background-color: var(--il-hero-background-color);
  color: white;
}

/* DEPRECATED: alignment attribute */
.hero[data-align-x="left"] {
  --il-hero-margin-left: 0;
  --il-hero-margin-right: auto;
  --il-hero-align-items: flex-start;
  --il-hero-text-align: left;
}
.hero[data-align-x="right"] {
  --il-hero-margin-left: auto;
  --il-hero-margin-right: 0;
  --il-hero-align-items: flex-end;
  --il-hero-text-align: right;
}
.hero[data-align-y="top"] {
  --il-hero-justify-content: flex-start;
}
.hero[data-align-y="bottom"] {
  --il-hero-justify-content: flex-end;
}

/* DEPRECATED: color attribute */

.hero[data-color="orange"] {
  --il-hero-background-color: var(--il-orange);
}

.background {
  position: relative;
  width: 100%;
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


img {
  display: block;
  position: relative;
  width: 100%;
  height: 223px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 576px) {
  .background img {
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
  .background img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 101;
  }
  .content-container--level-3 {
    display: flex;
    flex-direction: column;
    justify-content: var(--il-hero-justify-content);
    align-items: var(--il-hero-align-items);
    text-align: var(--il-hero-text-align);
    width: 66%;
    min-height: 417px;
    margin-left: var(--il-hero-margin-left);
    margin-right: var(--il-hero-margin-right);
    padding: 60px 0 80px;
  }
}

`;