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

#content {
  position: relative;
}

#content::before {
  position: absolute;
  content: var(--il-quote--mark-content-before);
  font-style: normal;
  color: var(--il-quote--mark-color);
  font: var(--il-quote--mark-font);
  top: var(--il-quote--mark-top);
  left: var(--il-quote--mark-left);
}

#content::after {
  position: absolute;
  content: var(--il-quote--mark-content-after);
  font-style: normal;
  bottom: 0px;
  color: var(--il-quote--mark-color);
  font: var(--il-quote--mark-font);
  right: var(--il-quote--mark-left);
}`;