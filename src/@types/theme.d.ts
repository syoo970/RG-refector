/* eslint-disable @typescript-eslint/no-unused-vars */
declare module "@mui/material/styles" {
  interface Palette {
    rg: Palette["primary"];
  }
  interface PaletteOptions {
    rg: PaletteOptions["palette"];
  }

  interface TypographyVariants {
    error: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
  }

  interface responsiveOptions {
    breakpoints?: Array<string>;
    disableAlign?: boolean;
    factor?: number;
    variants?: Array<string>;
  }

  export function createTheme(options: ThemeOptions): Theme;
  export const responsiveFontSizes = (
    theme: Theme,
    options?: responsiveOptions
  ) => theme;
}
