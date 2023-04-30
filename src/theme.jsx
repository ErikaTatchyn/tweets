const { createTheme } = require('@mui/material');

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: 375,
      md: 768,
      lg: 1440,
    },
  },
  palette: {
    primary: {
      main: '#471CA9',
    },
    secondary: {
      main: '#5CD3A8',
    },
    info: {
      main: '#EBD8FF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 20,
  },
});
