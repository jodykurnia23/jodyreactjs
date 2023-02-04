import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import "./index.css"

export default class Header extends React.Component {
    render() {
        return(
            <Container className='jumbotron mt-3 bg-light col-lg-12 col-sm-12 col-md-12'>
                <div class="container-fluid mt-1 py-5 text-center">
                <h1 class="display-3 mt-5 fw-bold">Jody Kurnia Putra</h1>
                <p class="fs-4 fst-italic mt-3">Fullstack Web Developer</p>
                <button class="btn-success btn-sm shadow-sm border border-dark mt-3 text-white px-3 py-2">Likedin Profile</button>
                </div>
            </Container>
        )
    }
}