import { css } from 'lit';

export default css`
.full {
    display: grid;
    grid-template-columns: 26.9% 60px 1fr;
    color: var(--il-panel-foreground-color);
    padding: 60px 0 75px 0;
    margin: 0 30px;
    max-width: 1310px;
}

.title {
    grid-column: 1 / span 3;
    padding-bottom: 40px;
}

.headings button {
    width: 100%;
    display: block;
    padding: 15px 20px;
    background: var(--il-panel-background-color);
    border: none;
    color: var(--il-panel-foreground-color);
    font-size: 1.1875rem;
    font-weight: 700;
    text-align: left;
    border-bottom: var(--il-panel-border);
    font-family: var(--il-font-sans);
}

.headings ul li:first-child button {
    border-top: var(--il-panel-border);
}

.headings button:focus, .headings button:hover {
    color: var(--il-focused-panel-foreground-color);
    background: var(--il-focused-panel-background-color);
}

.headings button[aria-expanded="true"] {
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
} 

.headings button[aria-expanded="true"]:focus, .headings button[aria-expanded="true"]:hover {
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
} 

.headings ul, .headings ul li  {
    list-style: none;
    padding: 0;
    margin: 0;
}

.information {
    grid-column: 3;
}

@media only screen and (max-width: 792px) {
    .full {
        display: block;
        margin: 0 20px;
    }
    .headings {
        display: none;
    }
}
`;