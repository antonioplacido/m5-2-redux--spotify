import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
div,
span{
    margin:0;
    padding:0;
    border:0;
    vertical-align: baseline;
}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
