import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Card, Accordion} from 'react-bootstrap';
import "./ReadingList.css";
import papers from "./papers.json";


export default class ReadingList extends Component {

    componentDidMount() {
        document.title = "David H Smith IV | Publications";
    }

    render() {

        /* Reads through the list of current publications and renders them according to the template */

        const topics  = papers.map( (topic, id) => {

            const papers = topic.papers.map( (paper, id) => { 
                return(
                    <li>{paper}</li>
                    );
            })

            const books = topic.books.map( (book, id) => {
                return(
                    <li>{book}</li>
                    );
            })

            return(
                <React.Fragment>
                    <Accordion defaultActivityKey="0">
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} className="title-header" variant='link' eventKey={id}>
                                {topic.title}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={id}>
                            <Card.Body>
                                <Row>
                                    <div className="year-header"> Books </div>
                                </Row>
                                <ul>
                                    {papers}
                                </ul>
                                <Row>
                                    <div className="year-header"> Papers </div>
                                </Row>
                                <ul>
                                    {books}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </React.Fragment>
                );


    } );


        return (
            <Container fluid>
                <Jumbotron >
                    {topics}
                </Jumbotron >
            </Container >
            );
}
}
