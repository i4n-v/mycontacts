import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
