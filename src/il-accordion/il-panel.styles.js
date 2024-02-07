import { css } from 'lit';

export default css`
#header {
    color: var(--il-accordion-color);
    font-family: "Source Sans Pro";
    font-size: 1.375em;
    font-weight: 600;
    line-height: 1.875em;
    width: 100%;
    text-align: left;
    padding: 30px 24px;
    background: var(--il-accordion-background);
    border: var(--il-accordion-border);
  }

#content {
  padding: 15px 10px 20px 54px; 
  display: none;
}

.heading {
  margin: 0 0 20px 0;
}

.expanded .heading {
  margin: 0;
}

.expanded #content {
  display: block;
}

#icon {
  display: inline-block;
  width: 20px;
  transform: var(--il-accordion-image-transform);
  padding: 0;
  margin: 0 10px 0 0;
  color: var(--il-accordion-color);
  vertical-align: middle;
}

#icon::before {
  content: var(--il-accordion-image);
}

.expanded #icon {
  transform: var(--il-accordion-image-transform-expand);
}`;