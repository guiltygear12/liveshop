import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Root";
import { GlobalStyle } from "./GlobalStyled";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot, useRecoilValue } from "recoil";
import { DarkModeState } from "./atom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <GlobalStyle />
            <RouterProvider router={router} />
        </RecoilRoot>
    </QueryClientProvider>
);
