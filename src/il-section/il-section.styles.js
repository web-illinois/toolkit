import {css} from "lit";

export default css`
:host {
  display: block;
  position: relative;
  overflow: hidden;
  margin-left: var(--il-page-offset-left, auto);
  margin-right: var(--il-page-offset-right, auto);
  padding-left: var(--il-page-padding-left);
  padding-right: var(--il-page-padding-right);
  padding-top: var(--il-section-padding-top);
  padding-bottom: var(--il-section-padding-bottom);
}
`