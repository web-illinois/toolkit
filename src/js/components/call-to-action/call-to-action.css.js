import {css} from 'lit';

export default css`

.il-calltoaction {
  display: flex;
  align-items: start;
  padding: 3.75rem 0 4.688rem 0;
  margin: var(--il-call-to-action-margin);
  color: var(--il-text-color);
  background: var(--il-background-color);
  width: var(--il-call-to-action-width);
}
.il-calltoaction .il-calltoaction-body {
  padding-left: 50px;
  flex-basis: 845px;
  flex-grow: 0;
  flex-shrink: 1;
}
.il-calltoaction .il-calltoaction-icon {
  min-width: 96px;
  margin-top: 1.875rem;
}
.il-calltoaction .il-calltoaction-padding {
  flex: 1 1 auto;
}
.il-calltoaction .il-calltoaction-body.center {
  text-align: center;
}
@media only screen and (max-width: 792px) {
  .il-calltoaction {
    display: block;
    padding: 1.875rem;
  }
  .il-calltoaction .il-calltoaction-body, .il-calltoaction .il-calltoaction-icon {
    padding-left: 0;
  }
}

`;