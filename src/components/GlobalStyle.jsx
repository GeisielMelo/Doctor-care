import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    font-family: "DM Sans";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

section {
  padding: 0px 100px;

  @media (max-width: 992px) {
    padding: 0px 50px;
  };

  @media (max-width: 768px) {
    padding: 0;
  };
}

`;

export default GlobalStyle;
