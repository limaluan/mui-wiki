import { createTheme } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

export const DarkTheme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#fff',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: '#fff',
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: '#fff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
  },
});
