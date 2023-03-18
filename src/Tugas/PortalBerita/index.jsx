import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import NavbarBerita from "./NavbarBerita";



export default class PortalBerita extends React.Component{
    render(){
        return(
            <div>
                <NavbarBerita />
                <Content />
                <Footer />
            </div>
        )
    }
}