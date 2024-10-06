import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import "./Home.css";

export default class Home extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Home";
  }

  render() {

    return (
      <Container fluid>
        <Jumbotron>
          <Row>

            <Col className="how-grid text-center" xs={17} sm={4} >

              <Image src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=hpe-z9YAAAAJ&citpid=3" roundedCircle/>
              <h3 className="profile-photo-subtitle"> </h3>

              <div>
                <div className="sub"> Computer Science Education Researcher </div>
                <div className="sub"> Linux & Coffee Enthusiast </div>

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
              <Col>
                <div class="block">
                  <b>Bio: </b>I am a fifth year PhD student at the University
                  of Illinois Urbana-Champaign (UIUC) in the <a href="https://siebelschool.illinois.edu/" ><u>Siebel School of
                  Computing and Data Science</u></a>. My research area is Computers and
                  Education where I am advised by <a href="https://zilles.cs.illinois.edu/" ><u>Craig Zilles</u></a>. I completed
                  Bachelor's of Science in Computer Science at Western Washington
                  University where I was advised by <a href="https://qhao.info/" ><u>Qiang Hao</u></a>. 
                </div>
                <div class="block block-scroller">
                  <b>News: </b>
                  <ul class="news-list">
                    <li class="news-li news-li-border" date-data="10/02/2024"> 
                      Our paper "Exploring Student Reactions to LLM-Generated Feedback on Explain in Plain English Problems" was accepted to ACM SIGCSE 2025!
                    </li>
                    <li class="news-li news-li-border" date-data="10/01/2024 - 10/02/2024">
                      I visited the University of Toronto St. George and University of Toronto Mississauga to give a talk on "Explain in Plain Language Questions". Many thanks to the faculty, particularly Daniel Zingaro, for hosting me!
                    </li>
                    <li class="news-li news-li-border" date-data="10/01/2024"> 
                      Our paper "Explain in Plain Language Question with Indic Languages: Drawbacks, Affordances, and Opportunities"
                      was accepted to COMPUTE 2025 and is now avaliable on arXiv: <a href="https://arxiv.org/abs/2409.20297"> arxiv.org/abs/2409.20297 </a>.
                    </li>
                  </ul>
                </div>
              </Col>

            </Col>
            <Col className='bio bio-alignment'>
              <p>
                <b>I develop interactive and engaging tools that support novice
                programmers.</b> My goal as a researcher working at the
                intersection of <a
                href="https://faculty.washington.edu/ajko/cer"><u>Computing
                Education Research (CER)</u></a> and Human-Computer Interaction
                (HCI) to draw on theories of learning to create effective and
                scaleable approaches for educating the next generation of
                computing professionals. My three current areas of work 
                include:
                <div className="research-areas">
                  <Row className="mb-4 block align-items-center">
                    <Col xs={2}>
                      <Image src="assets/parsons2.png" alt="Scaffolding Learning" thumbnail />
                    </Col>
                    <Col xs={9}>
                      <h5>Scaffolding Learning to Write Code with Parsons Problems</h5>
                      <p>
                        I investigate the design of Parsons Problems for teaching and exams in introductory Python. 
                        I have been involved in supporting the <a href="https://prairielearn.readthedocs.io/en/latest/elements/#pl-order-blocks-element"><u>order-blocks</u></a> element on the <a href="https://us.prairielearn.com/"><u>PrairieLearn</u></a> assessment platform and involved in development of the Parsons Problems element on <a href="https://www.codespec.org/"><u>CodeSpec</u></a>.
                      </p>
                    </Col>
                  </Row>

                  <Row className="mb-4 block align-items-center">
                    <Col xs={2}>
                      <Image src="assets/eipllogo.png" alt="Human-GenAI Collaborative Coding" thumbnail />
                    </Col>
                    <Col xs={9}>
                      <h5>Instructing Novice Programmers in Human-GenAI Collaborative Coding</h5>
                      <p>
                        I investigate the intersection of prompting generative AI and Explain in Plain English questions and how that intersection can be used to support introductory programming students in developing code comprehension skills. I introduced <a href="https://arxiv.org/pdf/2311.14903.pdf"><u>"Code Generation Based Grading"</u></a> for EiPE questions which were recently used in an introductory programming course at UC San Diego which places a heavy emphasis on effectively coding with the use of Generative AI.
                      </p>
                    </Col>
                  </Row>

                  <Row className="mb-4 block align-items-center">
                    <Col xs={2}>
                      <Image src="assets/cbtf.png" alt="Computer Based Testing" thumbnail />
                    </Col>
                    <Col xs={9}>
                      <h5>Scaling Assessment through Computer Based Testing</h5>
                      <p>
                        I am broadly interested in supporting at scale computer-based testing as they support frequent and second chance testing, immediate feedback, and reduce burden on instructors and course staff. I have investigated second chance testing policies, fairness of randomized exams, and the impact of frequent exams on students' performance.
                      </p>
                    </Col>
                  </Row>
                </div>

                For more details on this work see my <a href="/#/cv"><u>CV</u></a> and my <a href="/#/research"><u>research</u></a> statement. For details on my teaching 
                and teaching philosophy see my <a href="/#/teaching"><u>teaching</u></a> page.
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      );

  }
}
