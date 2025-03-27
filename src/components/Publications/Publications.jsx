import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card, Accordion } from 'react-bootstrap';
import "./Publications.css";
import Pubs from "./pubs.json";


export default function Publications() {
  useEffect(() => {
    document.title = "David H Smith IV | Publications";
  }, []);

    /* Reads through the list of current publications and renders them according to the template */

    const years = Pubs.map( (year, id) => {

     const publications = year.publications.map( (publication, id) => {

       return(
         <React.Fragment>
            <Card.Header>
              <Accordion.Button className="title-header" variant='link'>
                {publication.title}
              </Accordion.Button>
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
        <div className="p-5 mb-4 bg-light rounded-3">
          <Row>
            <div className="pub-header">
              Publications
            </div>
          </Row>

          {years}
        </div>
      </Container>
    );
}
