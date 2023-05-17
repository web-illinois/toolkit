import {css} from 'lit';

export default css`
    p.il-statistic {
      text-align: center;
      padding: var(--il-statistic-padding);
      background: var(--il-background-color);
      margin: var(--il-statistic-margin);
      color: var(--il-statistic-text-color);
      width: var(--il-statistic-width);
    }
    p.il-statistic span.text {
      font-size: var(--il-statistic-font-size);
      line-height: var(--il-statistic-line-height);
    }
    p.il-statistic span.text.intro {
      padding-bottom: var(--il-statistic-intro-padding-bottom);
      display: inline-block;
    }
    p.il-statistic span.stat {
      display: block;
      font-weight: 700;
      margin: var(--il-statistic-heading-margin);
      color: var(--il-statistic-heading-color);
      padding: var(--il-statistic-stat-padding);
      font-size: var(--il-statistic-stat-font-size);
      line-height: var(--il-statistic-stat-line-height);
    }
    p.il-statistic span.stat em {
      font-style: normal;
    }
    p.il-statistic span.source {
      display: block;
      margin: var(--il-statistic-source-margin);
      font-size: var(--il-statistic-source-font-size);
      line-height: var(--il-statistic-source-line-height);
      font-style: italic;
    }`;