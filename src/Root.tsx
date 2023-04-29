import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import { useRecoilValue } from "recoil";
import { DarkModeState } from "./atom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

function Root() {
    const DarkMode = useRecoilValue(DarkModeState);
    return (
        <ThemeProvider theme={DarkMode ? darkTheme : lightTheme}>
            <Header />
            <Outlet></Outlet>
            <SideMenu />
            <Footer />
        </ThemeProvider>
    );
}

export default Root;
