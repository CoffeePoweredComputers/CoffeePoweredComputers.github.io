import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import "./Home.css";

export default class Home extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Home";
  }

  render() {

    return (
      <Container>
        <Jumbotron>
          <Row>

            <Col className="how-grid text-center" xs={14} sm={5} >

              <Image src="assets/prof.png" roundedCircle/>
              <h3 className="profile-photo-subtitle"> </h3>

              <div>
                <div className="sub"> Computer Science Education Researcher</div>
                <div className="sub"> Linux & Coffee Enthusiast</div>

                <SocialIcon url="https://www.linkedin.com/in/david-smith-1b9499102/" 
                style={{ height: 25, width: 25, margin: 2 }} 
                bgColor='#000000' 
                fgColor='#c0c0c0' />

                <SocialIcon url="https://github.com/CoffeePoweredComputers" 
                style={{ height: 25, width: 25, margin: 2 }} 
                bgColor='#000000' 
                fgColor='#c0c0c0' />

                <SocialIcon url="https://twitter.com/DavidHSmithIV" 
                style={{ height: 25, width: 25, margin: 2 }} 
                bgColor='#000000' 
                fgColor='#c0c0c0' />

                <SocialIcon url="https://medium.com/@davidhsmith4" 
                style={{ height: 25, width: 25, margin: 2 }} 
                bgColor='#000000' 
                fgColor='#c0c0c0' />
              </div>

            </Col>
            <Col className='bio bio-alignment'>

              <b>
                  I am a second PhD student at the University of Illinois Urbana-Champaign in the Department of Computer Science. </b>
              My current research focus in the development and administration of randomized exams as well as introductory computer science education. 

            </Col>
          </Row>
        </Jumbotron>
      </Container>
      );

  }
}
