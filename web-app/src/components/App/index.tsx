import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/global';
import defaultTheme from '@/styles/themes/default';
import { Container } from './styles';
import { Header } from '@/components';
import { ToastContainer } from '@/components/Toast';
import { BrowserRouter } from 'react-router';
import Routes from '@/Routes';

function App() {
  console.log("App");

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
