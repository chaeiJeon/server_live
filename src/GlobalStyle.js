import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "NotoSansKRMedium", "Arial", sans-serif;
  }
`;

export default GlobalStyle;
