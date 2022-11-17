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
        padding: 0;
        position: relative;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        min-height: 310px;
        color: transparent;
        display: flex;
        flex-grow: var(--il-image-feature-flex-grow-image);
        flex-shrink: 1;
        flex-basis: 0;
    }
    .imagefeature .content {
        text-align: left;
        color: var(--il-image-feature-color);
        background: var(--il-image-feature-background);
        flex-grow: var(--il-image-feature-flex-grow-content);
        flex-shrink: 1;
        flex-basis: 0;
        height: 100%;
    }
    .imagefeature .content .content-inner {
        padding: 1.875rem 1.25rem;
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
        color: var(--il-image-feature-color);
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
            border: var(--il-image-feature-with-overlay-border);
        }
        .il-image-feature-with-overlay-outer {
            border-top: var(--il-image-feature-with-overlay-border);
        }
        .il-image-feature-with-overlay-inner {
            margin: 0;
            padding: 0 30px;
        }
        .il-image-feature-with-overlay-content {
            position: initial;
            width: initial;
            z-index: initial;
            padding: 30px 0;
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
        }
        .imagefeature .content .content-inner {
            padding: 1.875rem;
        }
    }
    @media (min-width: 993px) {
        .imagefeature .content .content-inner {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .imagefeature .content .content-inner {
            padding: 3rem 6rem;
        }
    }
`;
