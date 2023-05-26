import {css} from 'lit';

export default css`
  :host {
    font: 400 normal 1em/1em var(--il-font-sans);
  }
  .container {
    box-sizing: border-box;
    max-width: 1200px;
    padding: 30px;
    margin: 0 auto;
  }
  #site {
    border-top: 6px solid var(--il-blue);
    background: white;
    color: var(--il-blue)
  }
  #site .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  .info {
    grid-column: 1;
  }
  .content {
    grid-column: 2 / span 2;
  }
  
  #campus {
    border-top: 6px solid var(--il-orange);
    padding: 1em;
    background-color: var(--il-blue);
    color: white;
  }
  #campus .links ul {
    all: initial;
    display: block;
    margin: 2em 0 0;
    padding: 0;
    list-style: none;
    column-count: 3;
    column-gap: 30px;
  }
  #campus .links li {
    display: block;
    list-style: none;
    margin: 0;
    padding: .5em 0;
  }
  #campus .links a {
    display: inline-block;
    color: white;
    font: 400 normal 1em/1em var(--il-font-sans);
    cursor: pointer;
    text-decoration: none;
  }
  #campus .links a:focus, #campus .links a:hover {
    text-decoration: underline;
  }
  
  #required {
    border-top: 5px solid var(--il-alma-mater);
    background-color: var(--il-blue);
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