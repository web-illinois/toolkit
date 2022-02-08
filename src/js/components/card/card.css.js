import { css } from 'lit';

export default css`
    article {
        display: block;
        border: 1px solid var(--il-gray-2);
        border-bottom: 3px solid var(--il-orange);
        margin: var(--il-clickable-card-margin);
        text-decoration: none;
        color: var(--il-text-color);
        background: var(--il-background-color);
    }
    article.blue {
      --il-text-color: white;
      --il-background-color: var(--il-blue);
    }
    img {
        width: 100%;
    }
    div.text {
      padding: 1.75rem 1.875rem 2.8rem 1.875rem;
    }
    div.text.nopicture {
      padding: 2.8rem 1.875rem;
    }
    article a {
      text-decoration: none;
    }
`;
