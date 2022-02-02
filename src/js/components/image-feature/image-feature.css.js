import { css } from 'lit';


export default css`
    .imagefeature {
        display: block;
    }
    .imagefeature.right {
        --il-image-feature-flex-direction: row-reverse;
    }
    .imagefeature.large {
        --il-image-feature-flex-grow-image: 2;
    }
    .imagefeature.small {
        --il-image-feature-flex-grow-content: 2;
    }
    .imagefeature.portrait {
        --il-image-feature-flex-grow-content: 4;
        --il-image-feature-min-height: 10vw;
    }
    .imagefeature .background {
        padding: 1.875rem 1.25rem;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        min-height: 250px;
        color: transparent;
    }
    .imagefeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
        color: var(--il-imagefeature-color);
        background: var(--il-imagefeature-background);
    }
    .imagefeature .content.orange {
        color: white;
        background: var(--il-gradient-orange);
    }
    .imagefeature .content.white {
        background: white;
        --color-primary: white;
        --color-secondary: var(--il-blue);
    }
    .imagefeature .content.solid {
        color: white;
        background: var(--il-blue);
    }
    .imagefeature .background {
        display: flex;
        flex-grow: var(--il-image-feature-flex-grow-image);
        flex-shrink: 1;
        flex-basis: 0;
    }
    .imagefeature .content {
        flex-grow: var(--il-image-feature-flex-grow-content);
        flex-shrink: 1;
        flex-basis: 0;
    }
    .il-image-feature-with-overlay {
        position: relative;
    }
    
    .il-image-feature-with-overlay-inner {
        padding-top: 75px;
        padding-bottom: 105px;
        max-width: var(--il-content-max-width);
        margin: auto;
        display: flex;
        justify-content: var(--il-image-feature-with-overlay-align);
    }
    
    .il-image-feature-with-overlay-content {
        width: var(--il-image-feature-with-overlay-width);
        padding: var(--il-image-feature-with-overlay-padding);
        background: var(--il-image-feature-with-overlay-background);
    }
    
    @media only screen and (max-width: 1270px) {
        .il-image-feature-with-overlay-inner {
            margin: 0 70px;
        }
    }
    
    @media only screen and (max-width: 990px) {
        .il-image-feature-with-overlay {
            background: var(--il-image-feature-with-overlay-background-solid);
        }
        .il-image-feature-with-overlay-outer {
            border: var(--il-image-feature-with-overlay-border);
        }
        .il-image-feature-with-overlay-inner {
            margin: 0;
            padding: 0 30px;
        }
        .il-image-feature-with-overlay-content {
            position: initial;
            width: initial;
            z-index: initial;
            padding-top: 2rem;
            background: var(--il-image-feature-with-overlay-background-solid);
            border: none;
        }
    }
   
    @media (min-width: 767px) {
        .imagefeature {
            display: flex;
            flex-direction: var(--il-image-feature-flex-direction);
            min-height: var(--il-image-feature-min-height);
        }
        .imagefeature .background {
            min-height: initial;
            padding: 3rem 4rem;
        }
        .imagefeature .content {
            padding: 1.875rem;
        }
    }
    @media (min-width: 993px) {
        .imagefeature .content {
            padding: 3rem 2.2vw;
        }
        .imagefeature .background {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .imagefeature .content {
            padding: 3rem 6rem;
        }
        .imagefeature .background {
            padding: 3rem 6rem;
        }
    }
`;
