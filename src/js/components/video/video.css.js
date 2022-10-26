import { css } from 'lit';

export default css`
.videowrapper-width {
    width: var(--il-video-max-width);
    margin: var(--il-video-margin);
}
.videowrapper-full {
    width: 100%; 
    align-self: center;
}
.videowrapper {
    position: relative; 
    padding-bottom: var(--il-video-padding-bottom); 
    height: 0;
}
`;
