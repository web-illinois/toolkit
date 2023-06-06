import { css } from 'lit';

export default css`
:host {
    display: block;
    background: var(--il-quote--background);
}

#quote {
  margin: 0 auto;
  max-width: var(--il-quote--max-width);
  padding: 50px 80px;
}

#content {
    color: var(--il-quote--color);
    font: var(--il-quote--font);
    text-align: center;
  }

#author {
  margin-top: 1.625rem;
  text-align: center;
  color: var(--il-quote--author-color);
  font: var(--il-quote--author-font);
}

#source {
  margin-top: 1.275rem;
  text-align: center;
  color: var(--il-quote--source-color);
  font: var(--il-quote--source-font);
}

.marks #content {
  position: relative;
}

.marks #content::before {
  position: absolute;
  content: "“";
  font-style: normal;
  color: var(--il-quote--mark-color);
  font: var(--il-quote--mark-font);
  top: var(--il-quote--mark-top);
  left: var(--il-quote--mark-left);
}

.marks #content::after {
  position: absolute;
  content: "”";
  font-style: normal;
  bottom: 0px;
  color: var(--il-quote--mark-color);
  font: var(--il-quote--mark-font);
  right: var(--il-quote--mark-left);
}`;
