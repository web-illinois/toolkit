import { css } from 'lit';

export default css`
.full {
    display: grid;
    grid-template-columns: 26.9% 60px 1fr;
    color: var(--il-panel-foreground-color);
    padding: 60px 0 75px 0;
    margin: 0 auto;
    max-width: 1310px;
}

.title {
    margin-left: 30px;
    grid-column: 1 / span 3;
    padding-bottom: 40px;
}

.headings {
    margin-left: 30px;
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
}

.headings button:focus, .headings button:hover {
    text-decoration: underline solid var(--il-panel-foreground-color);
}

.headings button span {
    display: none;
}

.headings button[aria-selected="true"] {
    background: var(--il-selected-panel-background-color);
    color: var(--il-selected-panel-foreground-color);
} 

.headings button[aria-selected="true"] span {
    float: right;
    width: 18px;
    height: 18px;
    display: inline-block;
    transform: rotate(-90deg);
    fill: var(--il-selected-panel-foreground-color);
    margin-top: 3px;
}

.headings ul, .headings ul li  {
    list-style: none;
    padding: 0;
    margin: 0;
}

.information {
    grid-column: 3;
    padding-right: 30px;
}


@media only screen and (max-width: 792px) {
    .full {
        display: block;
    }
    .headings {
        display: none;
    }
    .information {
        padding-left: 30px;
    }
}
`;