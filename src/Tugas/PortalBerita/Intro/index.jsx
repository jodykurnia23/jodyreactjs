import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

export default class Intro extends React.Component{
    render(){
        const search = (q) => {
            console.log({q})
        }
        return(
            <Container>
                <Form className="d-flex mb-4" >
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 input-keyword"
                    aria-label="Search"
                    onChange={({target}) => search(target.value)}
                    />
                    <Button variant="outline-primary search_button">Search</Button>
                </Form>
            </Container>
        )
    }
}