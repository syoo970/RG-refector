import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    rg: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4AD395",
    },
    rg: {
      main: "#4AD395",
    },
  },
});
