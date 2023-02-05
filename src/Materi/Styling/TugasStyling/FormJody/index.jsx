import React from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class FormJody extends React.Component {
    render() {
        return(
            <Container Fluid className="form mx-auto mb-3 p-3 p" id="contact">
                <h3 class="fs-1 fw-bold text-center p-5 display-3">Contact</h3>
                <Form className="fs-4 fw-bold p-5">
                    <Form.Group className="mb-3 col-sm-7 mx-auto" controlId="formBasicEmail">
                        <Form.Label className="text fs-5">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-sm-7 mx-auto" controlId="form-label">
                        <Form.Label for="exampleFormControlTextarea1" className="text fs-5">Massage</Form.Label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-auto col-sm-7 " controlId="formBasicCheckbox">
                        <Form.Check className="mb-3 text fs-5" type="checkbox" label="Dengan ini, saya menyatakan bahwa data yang diisi sudah benar" />
                        <Button className="btn-success btn-sm shadow-sm border border-dark text-white px-3 py-2" variant="primary" type="submit">
                             Send.
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}