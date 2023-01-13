import { css } from 'lit';

export default css`
.full {
    display: grid;
    grid-template-columns: 500px 1fr;
    background: var(--il-button-background-color, var(--il-blue));
    color: var(--il-button-foreground-color, white);
    padding: 85px 0;
}

.title {
    margin-left: 150px;
    grid-column: 1 / span 2;
    padding-bottom: 40px;
}

.headings {
    margin-left: 150px;
}

.headings button {
    width: 100%;
    display: block;
    padding: 30px 0px 30px 20px;
    background: var(--il-button-background-color, var(--il-blue));
    border: none;
    color: var(--il-button-foreground-color, white);
    font-size: 1.1875rem;
    font-weight: 700;
    text-align: left;
    border-bottom: thin solid #3CB4E5;
}

.headings button:focus, .headings button:hover, .headings button[aria-expanded="true"] {
    background: var(--il-focused-button-background-color);
    color: var(--il-focused-button-foreground-color);
} 

.headings ul, .headings ul li  {
    list-style: none;
    padding: 0;
    margin: 0;
}
`;