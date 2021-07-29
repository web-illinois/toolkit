import {css} from 'lit-element';

export default css`

:host {
  display: block;
  position: relative;
}
.wordmark {
  --block-i-alignment: center; 
  --unit-border: 1px solid var(--il-blue);
  --unit-padding: 20px;
  position: relative;
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-areas: "campus unit";
  grid-gap: 20px;
}

.campus {
  grid-area: campus;
  align-self: var(--block-i-alignment);
}
.campus a {
  position: relative;
  height: 43px;
  width: 30px;
  display: block;
  text-decoration: none;
}
.campus a:focus, .campus a:hover  {
  outline: none;
  outline-color: none;
}

.campus a:focus .block-i__outline, .campus a:hover .block-i__outline {
  fill: var(--il-orange);
}
.campus a:focus .block-i__fill, .campus a:hover .block-i__fill {
  fill: var(--il-blue);
}

.unit {
  grid-area: unit;
  justify-self: start;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  border-left: var(--unit-border);
  padding-left: var(--unit-padding);
}

.block-i {
  display: block;
}
.block-i__outline {
  fill: var(--il-blue);
}
.block-i__fill {
  fill: var(--il-orange);
}

@supports (contain: inline-size) {
  .wordmark {
    contain: layout inline-size;
  }
  @container (min-width: 400px) {
    .wordmark {
      --block-i-alignment: flex-start; 
      --unit-border: none;
      --unit-padding: 0;
    }
  }
}

@supports not (contain: inline-size) {
  .wordmark.compact {
    --block-i-alignment: flex-start; 
    --unit-border: none;
    --unit-padding: 0;
  }
}


`
/*

.wordmark.wide {
  min-height: 43px;
  padding-left: 50px;
  margin-bottom: 10px;
}
.wordmark.tall .block-i {
  top: 10px;
  margin-top: 0;
}
.wordmark ::slotted(*) {
  font-size: 16px;
}
.wordmark ::slotted(*:last-child) {
  font-size: 32px;
}

@media (min-width: 768px) {
.wordmark.wide, .wordmark.narrow {
  padding-left: 70px;
  min-height: 43px;
}
.wordmark.wide::after, .wordmark.narrow::after {
  background-color: var(--il-blue);
  content: "";
  height: 100%;
  left: 50px;
  position: absolute;
  top: 0;
  width: 1px;
}
*/