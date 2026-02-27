import styled, { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 10px;
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
  }

  body, figure {
    margin: 0;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {
    display: block;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  a:focus {
    outline: thin dotted;
  }

  a:active, a:hover {
    outline: 0;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }

  button, input {
    line-height: normal;
  }

  button, html input[type=button], /* 1 */
  input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled], input[disabled] {
    cursor: default;
  }

  input[type=checkbox], input[type=radio] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type=search] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button, .button {
    border: 2px solid ${({ theme }) => theme.colors.lightgray};
    background: none;
    flex-basis: 48%;
    display: inline-block;
    line-height: 2;
    text-decoration: none;
    padding: 5px;
    text-align: center;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.2s;
    box-sizing: border-box;

    &:hover, &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
      outline: 0;
    }
  }
  
  img {
    max-width: 100%;
    border: 0;
  }
`;

export const App = styled.div`

`;
