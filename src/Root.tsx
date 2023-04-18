import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { Wrapper } from "./GlobalStyled";

function Root() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <SideMenu />
        </>
    );
}

export default Root;
