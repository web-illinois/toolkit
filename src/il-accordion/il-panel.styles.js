import { css } from 'lit';

export default css`
#header {
    color: var(--il-accordion-color);
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.875rem;
    padding: 30px 24px;
    background: var(--il-accordion-background);
    border: var(--il-accordion-border);
    display: flex;
    column-gap: 20px;
  }

  #header:hover {
    color: var(--il-accordion-color-hover);
    background: var(--il-accordion-background-hover);
  }

  #header:focus {
    color: var(--il-accordion-color-focus);
    background: var(--il-accordion-background-focus);
    border: var(--il-accordion-border-focus);
  }

#panel {
  margin-bottom: 20px;
  border: var(--il-accordion-border-full);
}

#panel.expanded {
  margin-bottom: 10px;
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
  display: flex;
  width: 20px;
  padding: 0;
  margin: 0;
  transform: var(--il-accordion-image-transform);
  color: var(--il-accordion-color);
}

#header:hover #icon {
    color: var(--il-accordion-color-hover);
  }

  #header:focus #icon {
    color: var(--il-accordion-color-focus);
  }


.expanded #icon {
  transform: var(--il-accordion-image-transform-expand);
}`;