import React from "react";
import JodyClass from "./tugasKomponen/JodyClass";
import JodyFunctional from "./tugasKomponen/JodyFunctional";
// import ClassComponent from "./pembahasan/ClassComponent";
// import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {
    render(){
        return(
            <div>
                {/* <ClassComponent nama= 'Jody'/>
                <FunctionalComponent /> */}
                <JodyClass nama= "Mentor" />
                <JodyFunctional />
            </div>
        )
    }
}