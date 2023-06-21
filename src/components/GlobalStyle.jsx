import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
  padding: 0px 100px;

  @media (max-width: 768px) {
    padding: 0;
  };
}

`;

export default GlobalStyle;
