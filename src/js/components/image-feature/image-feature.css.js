import { css } from 'lit';


export default css`
    .imagefeature {
        display: block;
    }
    .imagefeature .background {
        padding: 1.875rem 1.25rem;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        min-height: 250px;
        color: transparent;
    }
    .imagefeature .content {
        padding: 1.875rem 1.25rem;
        text-align: left;
        color: var(--il-imagefeature-color);
        background: var(--il-imagefeature-background);
    }
    .imagefeature .content.orange {
        color: white;
        background: var(--il-gradient-orange);
    }
    .imagefeature .content.solid {
        color: white;
        background: var(--il-blue);
    }
    .imagefeature .background {
        display: flex;
        flex: var(--il-imagefeature-fleximage);
    }
    .imagefeature .content {
        flex: var(--il-imagefeature-flexcontent);
    }
    @media (min-width: 767px) {
        .imagefeature {
            display: flex;
            flex-direction: var(--il-imagefeature-flexdirection);
            min-height: var(--il-imagefeature-minheight);
        }
        .imagefeature .background {
            min-height: initial;
            padding: 3rem 4rem;
        }
        .imagefeature .content {
            padding: 1.875rem;
        }
    }
    @media (min-width: 993px) {
        .imagefeature .content {
            padding: 3rem 2.2vw;
        }
        .imagefeature .background {
            padding: 3rem 2.2vw;
        }
    }
    @media (min-width: 1450px) {
        .imagefeature .content {
            padding: 3rem 6rem;
        }
        .imagefeature .background {
            padding: 3rem 6rem;
        }
    }
`;
