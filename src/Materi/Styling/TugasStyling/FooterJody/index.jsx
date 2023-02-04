import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default class FooterJody extends React.Component {
    render(){
        return(
            <Container fluid className="mt-3 Bg-color mb-0">
                <footer>
                    <p className="text-black text-center footer">
                    &copy; 2021 Jody, Inc. All rights reserved.
                    </p>
                </footer>
            </Container>
        )
    }
}