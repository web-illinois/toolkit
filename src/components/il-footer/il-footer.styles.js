import {css} from 'lit';

export default css`
  #required {
    border-top: 5px solid var(--il-alma-mater);
    background-color: var(--il-blue);
    padding: 1em;
  }
  #required .container {
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    align-items: center;
  }
  #required ::slotted(button#ot-sdk-btn) {
    all: initial;
    color: rgba(255, 255, 255, .25);
    font-family: var(--il-font-sans);
    cursor: not-allowed;
  }
  
  #required .links ul {
    all: initial;
    display: flex;
    flex-direction: row;
    gap: 2em;
  }
  #required .links li {
    all: initial;
    display: block;
  }
  #required .links a {
    display: block;
    color: white;
    text-decoration: none;
    font: 400 1em/1em var(--il-font-sans);
  }
  #required .links a:focus, #required .links a:hover {
    text-decoration: underline;
  }
`;

const old = css`
.footer {
  border-top: 1px solid white;
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
il-wordmark {
  margin-bottom: 60px;
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