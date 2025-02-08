import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');

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
