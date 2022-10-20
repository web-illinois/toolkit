import { css } from 'lit';

export default css`
    .videowrapper {
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0;
    }
    @media (min-width: 900px) {
        .videowrapper {
            padding-bottom: 100%; 
        }
    }
    @media (min-width: 1450px) {
        .videowrapper {
            padding-bottom: 56.25%; 
        }
    }
`;
