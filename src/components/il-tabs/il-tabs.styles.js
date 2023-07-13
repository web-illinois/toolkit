import { css } from 'lit';

export default css `
    #container {
        display: var(--il-tabs--display);
        background: var(--il-tabs--background);
        column-gap: 60px;
        margin: 0 auto;
        max-width: var(--il-tabs--max-width);
        padding: 60px 30px 75px;
    }
    #tablist {
        border-bottom: var(--il-tabs--tablist--border-width) solid var(--il-tabs--button--border-color);
    }

    #tabpanels {
        width: 100%;
        margin-top: var(--il-tabs--tabpanels--margin-top);
    }

    @container (max-width: 767px) {
        #container {
            --il-tabs--tablist--border-width: 0;
            --il-tabs--display: block;
            --il-tabs--tabpanels--margin-top: 30px;
            padding: 60px 20px 75px;
        }
     }
    
      #container.compact {
        --il-tabs--tablist--border-width: 0;
        --il-tabs--display: block;
        --il-tabs--tabpanels--margin-top: 30px;
        padding: 60px 20px 75px;
    }
`;