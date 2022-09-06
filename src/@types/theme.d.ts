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

  export function createTheme(options: ThemeOptions): Theme;
}
