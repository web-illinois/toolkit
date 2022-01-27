import { css } from 'lit';


export default css`
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
    .il-image-feature-with-overlay-inner {
        margin: 0;
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
