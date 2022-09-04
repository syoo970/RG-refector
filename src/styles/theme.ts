import { createTheme } from "@mui/material/styles";

interface CustomColors {
  rg: true;
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides extends CustomColors {}
  interface IconButtonPropsColorOverrides extends CustomColors {}
  interface ChipPropsColorOverrides extends CustomColors {}
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
