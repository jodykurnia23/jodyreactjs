import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <Card bg="primary" className="text-center text-light p-2">
                &copy; 2021 Jody, Inc. All rights reserved.
                </Card>
            </div>
        )
    }
}