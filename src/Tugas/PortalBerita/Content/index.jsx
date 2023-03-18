import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=e10ef662f34d416eb904dde5c92902c3'
const urls = 'https://newsapi.org/v2/everything?from=2023-03-10&apiKey=e10ef662f34d416eb904dde5c92902c3&language=id&q=';
export default class Content extends React.Component{
       constructor(props) {
            super(props);
            this.state = {
                news: [],
            };
        }

        search = () => {
            const inputKeyword = document.querySelector('.input-keyword');
            axios.get(urls + inputKeyword.value)
            .then(res=>{
                this.setState({
                    news: res.data.articles
                })
            })
          }

        componentDidMount(){
            axios.get(url)
            .then(res=>{
                this.setState({
                    news: res.data.articles
                })
            })
        }

        render(){
        return(
            <Container>
                 <Form className="d-flex mb-4" >
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 input-keyword"
                    aria-label="Search" />
                    <Button variant="outline-primary search_button" onClick={this.search}>Search</Button>
                </Form>
                <Row>
                    {this.state.news.map(news=>
                    <Col sm={4}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={news.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                    )}
                </Row>
                </Container>
        )
    }
}