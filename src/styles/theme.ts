import { createTheme } from "@mui/material/styles";

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    rg: true;
  }
  interface IconButtonPropsColorOverrides {
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
      contrastText: "#fff",
      dark: "#339368",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          p: {
            marginLeft: 0,
          },
        },
      },
    },
  },
});
