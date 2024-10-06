import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import "./research.css";

export default class Research extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Research";
  }

  render() {

    return (

      <Container fluid>
        <Jumbotron>

          <div class="section"> Research </div>

          <p>
            <b>I develop interactive and engaging tools that support novice
            programmers.</b> My goal as a researcher working at the
            intersection of Computing Education Research (CER) and
            Human-Computer Interaction (HCI) to draw on theories of
            learning to create effective and scaleable approaches for
            educating the next generation of computing professionals.

          </p>

          <div class="subsection"> Parsons Problems </div>

          <div class="subsubsection"> Distractors in Parsons Problems </div>
          <div class="subsubsection"> Use of Distractors in Formative Assessments </div>
          <div class="subsubsection"> Use of Distractors in Summative Assessments </div>

          <div class="subsubsection"> Ongoing Projects </div>

          <div class="subsection"> Infusing Generative AI into Introductory Programming Courses </div> 

          <div class="subsubsection"> Collaborative Work </div>
          <div class="subsubsection"> Explain in Plain Language Questions </div>

          <div class="subsubsection"> Ongoing Projects </div>

        </Jumbotron >
      </Container >
      );
  }
}
