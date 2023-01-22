import {css} from 'lit';

export default css`

  .site-footer {
    padding: 40px 0;
    background-color: var(--il-gray-1);
    border-top: 5px solid var(--il-blue);
    color: var(--il-blue);
  }

  .site-footer__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .site-footer__bottom {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .campus-footer {
    padding: 40px 0;
    background-color: var(--il-blue);
    border-top: 5px solid var(--il-orange);
    color: white;
  }

  .campus-footer .links {
    margin: 30px 0 0;
    padding: 0;
    list-style: none;
    column-count: 3;
    column-gap: 30px;
  }

  .campus-footer .links li {
    margin: 0 0 .8em;
    padding: 0;
    list-style: none;
    font-size: 18px;
  }

  .campus-footer .links a {
    color: white;
    text-decoration: none;
  }

  .footer {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: var(--il-font-sans);
    background-color: var(--il-blue);
    color: white;
  }

  .section {
    padding-left: var(--il-content-margin);
    padding-right: var(--il-content-margin);
  }

  .section-inner {
    max-width: var(--il-content-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  .links-section {
    border-top: 5px solid var(--il-alma-mater);
  }


  .main {
    padding-top: 30px;
    padding-bottom: 19px;
  }

  .main .section-inner {
    box-sizing: border-box;
    display: grid;
    grid-gap: 0 120px;
  }

  @media (max-width: 991px) {
    .main .section-inner {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas: "info" "content";
    }
  }
  @media (min-width: 992px) {
    .main .section-inner {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "info content content";
    }
  }

  .info {
    grid-area: info;
  }

  .content {
    grid-area: content;
  }

  .campus-wordmark {
    width: 100%;
    max-width: 235px;
    height: 61px;
  }

  .campus-wordmark a {
    display: block;
    text-decoration: none;
    padding: 5px;
  }

  .campus-wordmark a:focus, .campus-wordmark a:hover {
    outline: rgb(255, 255, 255) dotted 2px;
  }

  .campus-wordmark svg {
    display: block;
  }

  .block-i__outline {
    fill: white;
  }

  .block-i__fill {
    fill: var(--il-orange);
  }

  .wordmark__text {
    fill: white;
  }

  .social {
    clear: left;
    margin-top: 25px;
  }

  .links .section-inner {
    padding-top: 10px;
    padding-bottom: 10px;
  }


  /* Just a copy of footer/links.scss.
      TODO: Find a DRY way to do this
   */

  .il-footer-links {
    margin-right: 80px;
  }

  .il-footer-links.il-footer-links-full {
    margin-right: auto;
  }

  .il-footer-links.il-cookie-settings::before,
  .il-footer-links a.optanon-show-settings.il-cookie-settings::before {
    position: absolute;
    top: 9px;
    left: 10px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    content: "\\2605";
    border: 1px solid var(--il-blue);
    border-radius: 50%;
    line-height: 16px;
    text-align: center;
    font-size: 12px;
    color: var(--il-orange);
  }

  .il-footer-links ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
    min-height: 60px;
    align-items: center;
    row-gap: 24px;
  }

  .il-footer-links li {
    margin: 0;
    list-style: none;
    font: 1rem var(--il-font-sans);
    padding: 0 35px 0 0;
    color: white;
  }

  .il-footer-links button {
    padding: 4px 10px;
    background: var(--il-alma-mater);
    border: solid 2px white;
    color: white;
    position: relative;
    display: inline-block;
    border-radius: 5px;
    font: 1rem var(--il-font-sans);
    cursor: pointer;
  }

  .il-footer-links button:hover,
  .il-footer-links button:focus {
    background: white;
    color: var(--il-alma-mater);
  }

  .il-footer-links a {
    display: block;
    padding: 5px;
    font: 1rem var(--il-font-sans);
    white-space: nowrap;
    color: white;
  }

  .il-footer-links a:hover,
  .il-footer-links a:focus {
    outline: 2px dotted white;
    color: white;
  }

  .il-footer-links a.optanon-show-settings.il-cookie-settings {
    padding: 0 10px 0 36px !important;
    background-color: var(--il-cloud-1) !important;
    color: var(--il-blue) !important;
    text-decoration: underline !important;
    background-image: none !important;
  }
}

@media (min-width: 767px) {
  .il-footer-links {
    margin-right: 100px;
  }
}

`;