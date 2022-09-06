import { createTheme } from "@mui/material/styles";
import { customComponents } from "./customComponents";
import { customPalette } from "./customPalette";

interface CustomColors {
  rg: true;
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides extends CustomColors {}
  interface IconButtonPropsColorOverrides extends CustomColors {}
  interface ChipPropsColorOverrides extends CustomColors {}
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

export const theme = createTheme({
  ...customPalette,
  ...customComponents,
});
