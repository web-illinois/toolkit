import { css } from 'lit';

export default css`
ul.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill,var(--il-image-gallery-width));
    grid-column-gap: 60px;
    grid-row-gap: 40px;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0;
}
`;