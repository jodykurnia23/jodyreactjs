import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e10ef662f34d416eb904dde5c92902c3'
export default class Content extends React.Component{
       constructor(props) {
            super(props);
            this.state = {
                news: [],
                cards: "",
                response: ''
            };
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
            <Container className="news-container">
                    {this.state.news.map(news=>
                        <Row>
                            <Col className="mb-5" xs={6} md={4}>
                                <Card>
                                <Card.Img variant="top" src={news.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        )}
                </Container>
        )
    }
}