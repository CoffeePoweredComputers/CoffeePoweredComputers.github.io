import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Card, Accordion} from 'react-bootstrap';
import "./Publications.css";
import Pubs from "./pubs.json";


export default class Publications extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Publications";
  }

  render() {

    /* Reads through the list of current publications and renders them according to the template */

    const years = Pubs.map( (year, id) => {

     const publications = year.publications.map( (publication, id) => {

       return(
         <React.Fragment>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} className="title-header" variant='link' eventKey={id}>
                {publication.title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={id}>
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <a href={publication.link} target="_blank"><Image src={publication.image_path} responsive thumbnail className="profile-pic" /></a>
                  </Col>
                  <Col className="text-left abstract">
                    <i> Abstract:  </i> {publication.abstract} 
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </React.Fragment>
          );
      });


      return(
        <React.Fragment>
          <Row>
            <div className="year-header"> {year.year} </div>
          </Row>
          <Accordion defaultActivityKey="0">
          {publications}
          </Accordion>
        </React.Fragment>
      )


    } );


    return (
      <Container fluid>
        <Jumbotron >

          <Row>
            <div className="pub-header">
              Publications
            </div>
          </Row>

          {years}

        </Jumbotron >
      </Container >
      );
}
}
