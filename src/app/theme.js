import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Set your primary color
    },
    secondary: {
      main: '#6C757D', // Set your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set your preferred font family
  },
});

export default theme;

