import { createGlobalStyle } from 'styled-components';

import UbuntuRegular from '../../assets/fonts/UbuntuRegular.ttf';
import UbuntuBold from '../../assets/fonts/UbuntuBold.ttf';
import UbuntuMedium from '../../assets/fonts/UbuntuMedium.ttf';

export const DefaultStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: UbuntuRegular, sans-serif;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: #EEF5FF;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @font-face {
    font-family: 'UbuntuRegular';
    src: url(${UbuntuRegular}) format("truetype"),
  }

  @font-face {
    font-family: 'UbuntuMedium';
    src: url(${UbuntuMedium}) format("truetype"),
  }

 @font-face {
    font-family: 'UbuntuBold';
    src: url(${UbuntuBold}) format("truetype"),
  }
`;
