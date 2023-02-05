import React from 'react';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class NavbarJody extends React.Component {
    render() {
        return (
                <Navbar className='Bg-color layout'>
                    <Container>
                        <Navbar.Brand href="#welcome">Jody Kurnia Putra</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        )
    }
}