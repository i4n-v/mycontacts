import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/config/styles/global';
import defaultTheme from '@/config/themes/default';
import { Container } from './styles';
import { Header } from '@/components';
import { BrowserRouter } from 'react-router';
import Routes from '@/Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
