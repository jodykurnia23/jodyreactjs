import React from "react";
import ContentJody from "./ContentJody";
import FooterJody from "./FooterJody";
import FormJody from "./FormJody";
import Header from "./Header";
import "./index.css"
import NavbarJody from "./NavbarJody";



export default class TugasStyling extends React.Component {

    render() {
        return (
            <div className="bg-image font">
               <NavbarJody />
               <Header />
               <ContentJody />
               <FormJody />
               <FooterJody />
            </div>
        )
    }
}