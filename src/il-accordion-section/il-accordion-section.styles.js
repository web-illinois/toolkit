import { css } from 'lit';

export default css`
#section {
  margin-bottom: 20px;
  border: var(--il-accordion-border-full);
}

#section.expanded {
  margin-bottom: 10px;
}

#header-parent {
    color: var(--il-accordion-color);
    padding: 30px 24px;
    background: var(--il-accordion-background);
    border: var(--il-accordion-border);
    display: flex;
    column-gap: 20px;
  }

  #header-parent.highlight {
    color: var(--il-accordion-color-hover);
    background: var(--il-accordion-background-hover);
  }

#header {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

#panel {
  padding: var(--il-accordion-padding-panel); 
  display: none;
}

.expanded #panel {
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

#header-parent.highlight #icon {
    color: var(--il-accordion-color-hover);
  }


.expanded #icon {
  transform: var(--il-accordion-image-transform-expand);
}`;