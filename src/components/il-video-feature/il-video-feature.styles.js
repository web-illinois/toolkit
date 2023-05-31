import { css } from 'lit';

export default css`
    .video-feature {
        display: block;
    }
    .video-feature.right {
        --il-image-feature-flex-direction: row-reverse;
    }
    .video-feature.large {
        --il-image-feature-flex-grow-image: 2;
    }
    .video-feature.small {
        --il-image-feature-flex-grow-content: 2;
    }
    .video-feature .background {
        padding: 0;
        background: black;
    }
    .video-feature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
        color: var(--il-image-feature-color);
        background: var(--il-image-feature-background);
    }
    .video-feature .content.orange {
        color: white;
        background: var(--il-gradient-orange);
    }
    .video-feature .content.solid, .videofeature .background.solid  {
        color: white;
        background: var(--il-blue);
    }
    .video-feature .content.gray, .videofeature .background.gray  {
        background: var(--il-gray-1);
    }
    .video-feature .background {
        display: flex;
        flex-grow: var(--il-image-feature-flex-grow-image);
        flex-shrink: 1;
        flex-basis: 0;
    }
    .video-feature .content {
        flex-grow: var(--il-image-feature-flex-grow-content);
        flex-shrink: 1;
        flex-basis: 0;
    }

    .video-wrapper {
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
