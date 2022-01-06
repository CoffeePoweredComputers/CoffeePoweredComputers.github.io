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

              <b> I am a second PhD student at the University of Illinois
              Urbana-Champaign in the Department of Computer Science. </b> My
              current research focus in the development and administration of
              randomized exams as well as introductory computer science
              education. 

              To meet the demands of enrollment,  an online assessment platform
              developed at UIUC called "PrairieLearn" is commonly used to
              administer exams and students are tested asynchronously through
              the Computer-Based Testing Facility located in the Engineering
              Library. To help maintain exam security, PrairieLearn enables
              instructors to build their exam forms with pools of questions.
              When a student begins an exam, the platform then randomly selects
              one or more questions from each of these pools to generate an
              exam form. Currently, instructors attempt the fairness of
              randomly created forms by ensuring that the items in each pool
              are roughly equivalent in terms of their difficulty. I am
              interested both in evaluating the fairness of these randomized
              exams in courses currently using the platform at UIUC and in ways
              of integrating equating methods into the platform to ensure that
              students are graded in accordance with the difficulty of the exam
              form they receive.

              I am also interested in developing tools for teaching introductory
              Python. I am currently developing a tool that allows for the automatic
              generation of distractors for Parson's problems. The distractors it 
              generates for each line of code in a given program are based on
              student made errors in expression and statement writing questions.
              The purpose of this tool will be to: (1) evaluate which distractors
              students select the most and (2) develop best practices for the 
              creation of distractors for Parson's problems in the context of 
              introductory Python.

            </Col>
          </Row>
        </Jumbotron>
      </Container>
      );

  }
}
