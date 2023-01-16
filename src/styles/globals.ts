import { createGlobalStyle, keyframes } from 'styled-components'

const topDownAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: scaleX(-1) translate(45vmin, -30vmin);
    opacity: 0;
  }
  75% {
    transform: translate(80vw, 70vh) scaleX(-1) rotate(30deg);
    opacity: 0;
  }
  100% {
    transform: translate(55vw, 60vh) scaleX(-1) rotate(30deg);
    opacity: 1;
  }
`

const downTopAnimation = keyframes`
  0% {
    transform: translate(55vw, 60vh) scaleX(-1) rotate(30deg);
  }
  50% {
    transform: translate(70vw, 67vh) scaleX(-1);
  }
  80% {
    transform: translate(45vmin, -30vmin) scaleX(-1);
  }

  95% {
    transform: translate(0, 0) scaleX(-1);
  }

  100% {
    transform: translate(0, 0);
  }
`

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    cursor: default;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #000000;
    background: #fbf9fb;
    min-height: 100vh;
    position: relative;
  }
  ol,
  ul {
    list-style: none;
  }
  p {
    line-height: initial;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
     background-color: #DD5B6C !important;
  }

  .top-down-animation {
    animation-name: ${topDownAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  .down-top-animation {
    animation-name: ${downTopAnimation};
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
  }

`
