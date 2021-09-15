import { css } from 'lit';

export default css`
    .videofeature {
        display: block;
    }
    .videofeature .background {
        padding: 0;
        background: black;
    }
    .videofeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
    }
    .videofeature .content.gradient {
        color: white;
        background: linear-gradient(180deg, var(--il-industrial-blue) 0%, var(--il-blue) 100%);
    }
    .videofeature .content.orange {
        color: white;
        background: linear-gradient(180deg, var(--il-orange) 0%, var(--il-altgeld) 100%);
    }
    .videofeature .content.solid, .videofeature .background.solid  {
        color: white;
        background: var(--il-blue);
    }
    .videowrapper {
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0;
    }
    @media (min-width: 900px) {
        .videofeature {
            display: flex;
        }
        .videofeature .content {
            padding: 1.875rem;
        }
        .videowrapper {
            padding-bottom: 100%; 
        }
    }
    @media (min-width: 993px) {
        .videofeature .content {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .videofeature .content {
            padding: 3rem 6rem;
        }
        .videowrapper {
            padding-bottom: 56.25%; 
        }
    }
`;
