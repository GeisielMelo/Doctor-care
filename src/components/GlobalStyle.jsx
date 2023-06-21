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
  padding: 0 20px;
  margin: 0 auto;
}

// Custom scroll bar
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #DDDDDD;
}

::-webkit-scrollbar-thumb {
    background-color: #00856f;
    border-radius: 4px;
}

`;

export default GlobalStyle;
