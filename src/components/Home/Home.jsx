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
                I am a first year PhD student at the University of Illinois Urbana-Champaign in the Department of Computer Science. </b>
              My research focus lies at the intersection of data science and Human-Computer Interaction (HCI) specifically within the realm of Computing Education Research (CER).
              The core of my knowledge and interests in these subjects have been developed through my role as an undergraduate research assistant in which my time has been largely devoted to the analysis of student learning patterns, performance, and tool evaluation. 
              Going forward, it is my goal to extend and refine my current skills as well as continue investigating the intersection between HCI and CER through the development and evaluation of tools aimed towards usage in educational environments. 

            </Col>
          </Row>
        </Jumbotron>
      </Container>
      );

  }
}
