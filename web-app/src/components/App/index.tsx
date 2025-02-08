import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/config/styles/global";
import defaultTheme from "@/config/themes/default";
import { Container } from "./styles";
import { Header } from "@/components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
