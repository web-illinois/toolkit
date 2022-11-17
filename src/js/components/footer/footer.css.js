import {css} from 'lit';

export default css`

.footer {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: var(--il-font-sans);
  background-color: var(--il-blue);
  color: white;
}

.section {
  padding-left: var(--il-content-margin);
  padding-right: var(--il-content-margin);
}
.section-inner {
  max-width: var(--il-content-max-width);
  margin-left: auto;
  margin-right: auto;
}

.links {
  border-top: 5px solid var(--il-alma-mater);
}


.main {
  padding-top: 30px;
  padding-bottom: 19px;
}

.main .section-inner {
  box-sizing: border-box;
  display: grid;
  grid-gap: 0 120px;
}

@media (max-width: 991px) {
  .main .section-inner {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas: "info" "content";
  }
}
@media (min-width: 992px) {
  .main .section-inner {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "info content content";
  }
}
.info {
  grid-area: info;
}
.content {
  grid-area: content;
}
.campus-wordmark {
  width: 100%;
  max-width: 235px;
  height: 61px;
  margin-bottom: 60px;
}
.campus-wordmark a {
  display: block;
  text-decoration: none;
  padding: 5px;
}
.campus-wordmark a:focus, .campus-wordmark a:hover {
  outline: rgb(255, 255, 255) dotted 2px;
}
.campus-wordmark svg {
  display: block;
}  
.block-i__outline {
  fill: white;
}
.block-i__fill {
  fill: var(--il-orange);
}
.wordmark__text {
  fill: white;
}
.social {
  clear: left;
  margin-top: 25px;
}
.links .section-inner {
  padding-top: 10px;
  padding-bottom: 10px;
}


`;