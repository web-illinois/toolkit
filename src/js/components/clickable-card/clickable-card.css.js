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
      --il-clickable-card-color-hover: var(--il-blue);
      --il-clickable-card-background-hover: white;
    }
    article.highlight {
      color: var(--il-clickable-card-color-hover);
      background: var(--il-clickable-card-background-hover);
      border-bottom: 3px solid var(--il-industrial-blue-1);
      cursor: pointer;
    }
    img {
        width: 100%;
    }
    article.highlight img {
      filter: var(--il-clickable-card-image-filter);
      transform: var(--il-clickable-card-image-transform);
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
    article a:focus {
      outline-style: none;
      box-shadow: none;
      border-color: transparent;
    }
    .il-invisible {
      position: absolute !important;
      left: -9999px !important;
      top: auto !important;
      display: block !important;
      text-align: left !important;
      text-indent: -9999em !important;
      width: 1px !important;
      height: 1px !important;
      overflow: hidden !important;
    }
`;
