import { css } from 'lit';

export default css`
    .videofeature {
        display: block;
    }
    .videofeature.right {
        --il-image-feature-flex-direction: row-reverse;
    }
    .videofeature.large {
        --il-image-feature-flex-grow-image: 2;
    }
    .videofeature.small {
        --il-image-feature-flex-grow-content: 2;
    }
    .videofeature .background {
        padding: 0;
        background: black;
    }
    .videofeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
        color: var(--il-imagefeature-color);
        background: var(--il-imagefeature-background);
    }
    .videofeature .content.orange {
        color: white;
        background: var(--il-gradient-orange);
    }
    .videofeature .content.solid, .videofeature .background.solid  {
        color: white;
        background: var(--il-blue);
    }
    .videofeature .content.gray, .videofeature .background.gray  {
        background: var(--il-gray-1);
    }
    .videofeature .background {
        display: flex;
        flex-grow: var(--il-image-feature-flex-grow-image);
        flex-shrink: 1;
        flex-basis: 0;
    }
    .videofeature .content {
        flex-grow: var(--il-image-feature-flex-grow-content);
        flex-shrink: 1;
        flex-basis: 0;
    }

    .videowrapper {
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0;
    }
    @media (min-width: 900px) {
        .videofeature {
            display: flex;
            flex-direction: var(--il-image-feature-flex-direction);
        }
        .videofeature .content {
            padding: 1.875rem;
        }
        .videowrapper {
            padding-bottom: 100%; 
        }
    }
    @media (min-width: 993px) {
        .videofeature .content {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .videofeature .content {
            padding: 3rem 6rem;
        }
        .videowrapper {
            padding-bottom: 56.25%; 
        }
    }
`;
