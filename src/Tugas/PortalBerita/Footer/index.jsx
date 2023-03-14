import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export default class Footer extends React.Component{
    render(){
        return(
            <div className="mb-5">
                <Card bg="primary" className="text-center text-light">
                &copy; 2021 Jody, Inc. All rights reserved.
                </Card>
            </div>
        )
    }
}