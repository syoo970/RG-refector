import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import reset from "@/styles/reset";
import reportWebVitals from "./reportWebVitals";
import { theme } from "@/styles/theme";
import App from "@/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      notifyOnChangeProps: "all",
    },
  },
});
// axios default settings
axios.defaults.baseURL = "https://rg-server.p-e.kr:443/api/v1";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ThemeProvider theme={theme}>
              <Global styles={reset} />
              <App />
            </ThemeProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
