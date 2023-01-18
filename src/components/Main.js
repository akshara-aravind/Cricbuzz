import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import SubNav from "./SubNav";
import { Home } from "./Home";
import { Outlet } from "react-router-dom";


export default function Main() {
    return (
        <div>
            <div className="CricbuzzMainPage">
                <Nav />
                <SubNav />
                <Outlet />
                <Home />
            </div>
            <Footer />
        </div>
    );
}
