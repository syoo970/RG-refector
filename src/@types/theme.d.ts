declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
  interface Palette {
    rg: Palette["primary"];
  }
  interface PaletteOptions {
    rg: PaletteOptions["palette"];
  }

  export function createTheme(options: ThemeOptions): Theme;
}
