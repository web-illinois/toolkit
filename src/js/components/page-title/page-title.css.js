import { css } from 'lit';

export default css`
.page-title {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 var(--il-content-margin);
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.inner {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 12.5rem;
  max-width: var(--il-content-max-width);
  margin: 0 auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.text {
  box-sizing: border-box;
  position: relative;
  z-index: 101;
  color: white;
  text-align: left;
  font: 2.5em var(--il-source-sans);
  padding: 16px 14px 20px;
}
.text::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--il-blue);
  opacity: .85;
}
`;