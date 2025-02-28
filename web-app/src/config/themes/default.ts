import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#F6F5FC',
    primary: {
      lighter: '#E0E3FF',
      light: '#6674F4',
      main: '#5061FC',
      dark: '#3346F0',
    },
    secondary: {
      lighter: '#FFFFFF',
      light: '#BCBCBC',
      main: '#222',
      dark: '',
    },
  },
  typography: {
    primary: "'Sora', sans-serif",
  },
  shadows: {
    main: '0px 4px 10px rgba(0, 0, 0, 0.04)',
  },
};

export default defaultTheme;
