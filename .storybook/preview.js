import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import reset from "@/styles/reset";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={reset} />
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  ),
];
