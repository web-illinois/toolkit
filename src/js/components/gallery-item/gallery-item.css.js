import { css } from 'lit';

export default css`
    li.gallery-item .gallery-image-frame {
        height: var(--il-gallery-height);
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        background: var(--il-gallery-background);
    }
    li.gallery-item .gallery-image-title {
        padding-top: .5rem;
        padding-left: .5rem;
    }
    li.gallery-item .gallery-image-description {
        padding-left: .5rem;
        padding-bottom: .5rem;
    }
    li.gallery-item a {
        color: var(--il-text-color);
        text-decoration: none;
    }
    li.gallery-item a:hover, li.gallery-item a:focus {
        color: var(--il-gallery-text-focus);
        outline: none;
    }
    li.gallery-item a:hover .gallery-image-title, li.gallery-item a:focus .gallery-image-title, 
    li.gallery-item a:hover .gallery-image-description, li.gallery-item a:focus .gallery-image-description {
        background: var(--il-gallery-background-focus);
    }
    li.gallery-item a:hover .gallery-image-frame, li.gallery-item a:focus .gallery-image-frame {
        background: var(--il-gallery-background-focus);
    }
`;