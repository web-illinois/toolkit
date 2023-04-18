import { css } from 'lit';

export default css`
    li.image-gallery-item .image-gallery-image-frame {
        height: var(--il-image-gallery-height);
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        background: var(--il-image-gallery-background);
    }
    li.image-gallery-item .image-gallery-image-title {
        padding-top: .5rem;
        padding-left: .5rem;
    }
    li.image-gallery-item .image-gallery-image-description {
        padding-left: .5rem;
        padding-bottom: .5rem;
    }
    li.image-gallery-item a {
        color: var(--il-text-color);
        text-decoration: none;
    }
    li.image-gallery-item a:hover, li.image-gallery-item a:focus {
        color: var(--il-image-gallery-text-focus);
        outline: none;
    }
    li.image-gallery-item a:hover .image-gallery-image-title, li.image-gallery-item a:focus .image-gallery-image-title, 
    li.image-gallery-item a:hover .image-gallery-image-description, li.image-gallery-item a:focus .image-gallery-image-description {
        background: var(--il-image-gallery-background-focus);
    }
    li.image-gallery-item a:hover .image-gallery-image-frame, li.image-gallery-item a:focus .image-gallery-image-frame {
        background: var(--il-image-gallery-background-focus);
    }
    div.image-gallery-detail {
        display: grid;
        grid-template-columns: 160px auto 160px;
        grid-template-rows: auto 1fr 150px;
    }
    div.image-gallery-detail .image-gallery-detail-image {
        grid-column: 1 / span 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.image-gallery-detail .image-gallery-detail-navigation {
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
    div.image-gallery-detail .image-gallery-detail-text {
        display: flex;
        justify-content: center;
        align-items: end;
        padding-bottom: 5px;
        grid-column: 2;
    }
    div.image-gallery-detail .image-gallery-detail-back {
        align-items: center;
    }
    div.image-gallery-detail .image-gallery-detail-back svg {
        width: 15px;
        height: 15px;
        transform: rotate(90deg);
        padding-top: 6px;
        padding-left: 10px;
    }
    div.image-gallery-detail .image-gallery-detail-navigation a {
        height: 50px;
        width: 50px;
        padding: 0 20px;
    }
    div.image-gallery-detail .image-gallery-detail-navigation a:first-child {
        transform: rotate(90deg);
    }
    div.image-gallery-detail .image-gallery-detail-navigation a:last-child {
        transform: rotate(-90deg);
    }
    div.image-gallery-detail .image-gallery-detail-navigation a:focus, div.image-gallery-detail .image-gallery-detail-navigation a:hover {
        fill: var(--il-orange);
    }
`;