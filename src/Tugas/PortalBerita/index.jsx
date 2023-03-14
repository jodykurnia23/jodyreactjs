import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Intro from "./Intro";
import NavbarBerita from "./NavbarBerita";



export default class PortalBerita extends React.Component{
    render(){
        return(
            <div>
                <NavbarBerita />
                <Intro />
                <Content />
                <Footer />
            </div>
        )
    }
}