import { css } from 'lit';


export default css`
.il-image-feature-with-overlay {
    position: relative;
}

.il-image-feature-with-overlay-image {
    z-index: 101;
}

.il-image-feature-with-overlay-content {
    border: 1px solid #707070;
    position: absolute;
    width: var(--il-image-feature-with-overlay-width);
    top: var(--il-image-feature-with-overlay-top);
    left: var(--il-image-feature-with-overlay-left);
    z-index: 106;
    padding: var(--il-image-feature-with-overlay-padding);
    background: var(--il-image-feature-with-overlay-background);
}

@media only screen and (max-width: 990px) {
    .il-image-feature-with-overlay {
        background: var(--il-image-feature-with-overlay-background-solid);
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
`;
