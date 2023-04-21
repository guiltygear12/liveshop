import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { Wrapper } from "./GlobalStyled";
import Footer from "./components/Footer";

function Root() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <SideMenu />
            <Footer />
        </>
    );
}

export default Root;
