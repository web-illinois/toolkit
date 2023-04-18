import { css } from 'lit';

export default css`
    div.gallery-detail {
        display: grid;
        grid-template-columns: 160px auto 160px;
        grid-template-rows: auto 1fr 150px;
    }
    div.gallery-detail .gallery-detail-image {
        grid-column: 1 / span 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.gallery-detail .gallery-detail-navigation {
        grid-column: 1 / span 3;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--il-blue);
        color: white;
        margin-top: 20px;
        border-top: solid 4px var(--il-orange);
        fill: white;
    }
    div.gallery-detail .gallery-detail-text {
        display: flex;
        justify-content: center;
        align-items: end;
        padding-bottom: 5px;
        grid-column: 2;
    }
    div.gallery-detail .gallery-detail-back {
        align-items: center;
    }
    div.gallery-detail .gallery-detail-back svg {
        width: 15px;
        height: 15px;
        transform: rotate(90deg);
        padding-top: 6px;
        padding-left: 10px;
    }
    div.gallery-detail .gallery-detail-navigation a {
        height: 50px;
        width: 50px;
        padding: 0 20px;
    }
    div.gallery-detail .gallery-detail-navigation a:first-child {
        transform: rotate(90deg);
    }
    div.gallery-detail .gallery-detail-navigation a:last-child {
        transform: rotate(-90deg);
    }
    div.gallery-detail .gallery-detail-navigation a:focus, div.gallery-detail .gallery-detail-navigation a:hover {
        fill: var(--il-orange);
    }
`;