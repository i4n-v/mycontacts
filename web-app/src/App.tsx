import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/styles/global";
import defaultTheme from "./config/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello Wor</h1>
    </ThemeProvider>
  );
}

export default App;
