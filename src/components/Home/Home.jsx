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

            <p>
              <strong> I am a second year PhD student at the University of Illinois
              Urbana-Champaign in the Department of Computer Science. </strong>
              My current research focus in the development and administration of
              randomized, computer-based exams as well as introductory computer
              science education. 
            </p>

            <p>
                <b><i> Assessment: </i></b> To maintain exam security for large
                scale asynchronous assessments, many courses at UIUC use the
                PrairieLearn platform to develop and a deliver their exams.
                When a student begins an exam, an exam generator created by the
                instructor randomly selects questions from predefined pools and
                generates a unique exam form for that student. I am interested
                both in evaluating the fairness of these randomized exams in
                courses currently using the PrairieLearn platform at UIUC and
                in ways of integrating equating methods into the platform to
                ensure that students are graded in accordance with the
                difficulty of the exam form they receive.
            </p>

            <p>
                <b><i> Intro CS: </i></b> I am also interested in developing
                tools for teaching introductory Python. I am currently
                developing a tool that allows for the automatic generation of
                distractors for Parson's problems. The distractors it generates
                for each line of code in a given program are based on student
                made errors in expression and statement writing questions.  The
                purpose of this tool will be to: (1) evaluate which distractors
                students select the most and (2) develop best practices for the
                creation of distractors for Parson's problems in the context of
                introductory Python.
            </p>

            </Col>
          </Row>
        </Jumbotron>
      </Container>
      );

  }
}
