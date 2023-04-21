import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Root";
import { GlobalStyle } from "./GlobalStyled";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyle />
                <RouterProvider router={router} />
            </RecoilRoot>
        </QueryClientProvider>
    </ThemeProvider>
);
