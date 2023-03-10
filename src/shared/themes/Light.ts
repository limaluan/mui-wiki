import { createTheme } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: "#fff",
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: "#fff",
    },
    background: {
      default: "#f7f6f3", 
      paper: "#fff",
    }
  },
});
