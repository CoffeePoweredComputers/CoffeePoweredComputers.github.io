import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "David H Smith IV | Home";
  }, []);

  return (
    <Container fluid>
      <div className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          {/* Profile section - Full width on mobile, 4 columns on larger screens */}
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <div className="profile-container">
              <Image 
              src="https://icer2025.acm.org/getProfileImage/davidsmith1/4e127824-9ff7-451d-95ff-3dcd849abebc/small.jpg?1740526855000" 
              alt="David H Smith IV" 
              rounded
              className="profile-image mb-3"
            />

              <div className="profile-titles mb-3">
                <div className="sub">Assistant Professor</div>
                <div className="sub">Computing Education Researcher</div>
                <div className="sub">Linux & Coffee Enthusiast</div>
              </div>

              <div className="social-icons mb-3">
                <SocialIcon 
                url="https://www.linkedin.com/in/david-smith-1b9499102/" 
                style={{ height: 35, width: 35, margin: 5 }} 
                bgColor='#000000' 
                fgColor='#c0c0c0'
                rel="noopener noreferrer"
                target="_blank"
              />
                  <SocialIcon 
                  url="https://github.com/CoffeePoweredComputers" 
                  style={{ height: 35, width: 35, margin: 5 }} 
                  bgColor='#000000' 
                  fgColor='#c0c0c0'
                  rel="noopener noreferrer"
                  target="_blank"
                />
                    <SocialIcon 
                    url="https://twitter.com/DavidHSmithIV" 
                    style={{ height: 35, width: 35, margin: 5 }} 
                    bgColor='#000000' 
                    fgColor='#c0c0c0'
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                      <SocialIcon 
                      url="https://medium.com/@davidhsmith4" 
                      style={{ height: 35, width: 35, margin: 5 }} 
                      bgColor='#000000' 
                      fgColor='#c0c0c0'
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                      </div>

                      <Card className="mb-3 bio-card">
                        <Card.Body className="text-start">
                          <Card.Title className="border-bottom pb-2 fw-bold bio-title">Bio</Card.Title>
                          <Card.Text className="small-text">
                            I am an incomming Assistant Professor at Virginia Tech in the <a href="https://cs.vt.edu/" target="_blank" rel="noopener noreferrer">Department of Computer Science</a>. I will be completing my PhD at University of Illinois Urbana-Champaign in May of 2025 where I am a part of the <a href="https://siebelschool.illinois.edu/research/areas/computers-and-education" target="_blank" rel="noopener noreferrer">Computers and Education</a> research area and am advised by <a href="https://zilles.cs.illinois.edu/" target="_blank" rel="noopener noreferrer">Craig Zilles</a>. I completed Bachelor's of Science in Computer Science at Western Washington University where I was advised by <a href="https://qhao.info/" target="_blank" rel="noopener noreferrer">Qiang Hao</a>.
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      <Card className="news-card">
                        <Card.Body className="text-start">
                          <Card.Title className="border-bottom pb-2 fw-bold news-title">Latest News</Card.Title>
                          <ul className="news-list">
                            <li className="news-li news-li-border" date-data="05/21/2025">
                              In collaboration with Paul Denny from the University of Auckland, we have been awarded a Llama Impact Grant from Meta to support the development and evaluation of Explain in Plain English Questions!
                            </li>
                            <li className="news-li news-li-border" date-data="05/13/2025">
                              I am very excited to have accepted a tenure-track Assistant Professor position at Virginia Tech in the Department of Computer Science starting in Fall 2025!
                            </li>
                            <li className="news-li news-li-border" date-data="05/01/2025">
                              Two papers related to ongoing work on EiPL questions were accepted to ITiCSE 2025 the pre-print of which are no avaliable on arXiv:
                              <ul style={{marginTop: 0, marginBottom: 0}}>
                                <li><a href="https://arxiv.org/pdf/2503.12207">ReDefining Code Comprehension: Function Naming as a Mechanism for Evaluating Code Comprehension</a></li>
                                <li><a href="https://arxiv.org/pdf/2503.12216">Counting the Trees in the Forest: Evaluating Prompt Segmentation for Classifying Code Comprehension Level</a></li>
                              </ul>
                              Many thanks to my co-authors and collaborators on this ongoing work!
                            </li>
                            <li className="news-li news-li-border" date-data="10/02/2024"> 
                              Our paper "Exploring Student Reactions to LLM-Generated Feedback on Explain in Plain English Problems" was accepted to ACM SIGCSE 2025!
                            </li>
                            <li className="news-li news-li-border" date-data="10/01/2024 - 10/02/2024">
                              I visited the University of Toronto St. George and University of Toronto Mississauga to give a talk on "Explain in Plain Language Questions". 
                            </li>
                            <li className="news-li news-li-border" date-data="10/01/2024"> 
                              Our paper "Explain in Plain Language Question with Indic Languages" was accepted to COMPUTE 2025 and is now available on <a href="https://arxiv.org/abs/2409.20297" target="_blank" rel="noopener noreferrer">arXiv</a>.
                            </li>
                            <li className="news-li news-li-border" date-data="09/23/2024">
                              I am very excited to have been invited to Dagstuhl Seminar 25311 on "Generative AI is Programming Education"!
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>

                  {/* Main content */}
                  <Col xs={12} md={8} className="bio bio-alignment">
                    <div className="research-intro mb-4">
                      <h4> Research Vision </h4>
                      <p style={{ fontSize: 'var(--font-size-md)' }}>
                        <strong>I develop and evaluate interactive and engaging tools that support novice programmers.</strong> My goal as a researcher working at the intersection of <a href="https://faculty.washington.edu/ajko/cer" target="_blank" rel="noopener noreferrer">Computing Education Research (CER)</a> and Human-Computer Interaction (HCI) is to draw on theories of learning to create effective and scalable approaches for educating the next generation of computing professionals. My work has included a wide range of topics within CER, and my current areas of focus are as follows.
                      </p>

                      <div className="research-areas">
                        {/* Research Area 1 */}
                        <Card className="mb-4 research-card">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                                <Image src="assets/parsons2.png" alt="Scaffolding Learning" className="research-icon" />
                              </Col>
                              <Col xs={12} sm={9} md={9} lg={10}>
                                <h5 className="research-title">Scaffolding Code Writing with Parsons Problems</h5>
                                <p className="research-text">
                                  I investigate the design of Parsons Problems for teaching and exams in introductory Python. My work includes investigations on distractor blocks in problem <a href="https://zilles.cs.illinois.edu/papers/smith_parsons_grouped_COMPED_2023.pdf" target="_blank" rel="noopener noreferrer">psychometric properties</a> and their <a href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671114" target="_blank" rel="noopener noreferrer">impact on learning</a>. I've contributed to <a href="https://arxiv.org/pdf/2405.19460" target="_blank" rel="noopener noreferrer">micro-parsons problems</a> assessment and <a href="https://repository.falmouth.ac.uk/5216/1/ITiCSE_2023_WorkingGroup_Parsons_Report.pdf" target="_blank" rel="noopener noreferrer">multi-institutional studies</a> on Parsons Problems' impact on learning. I support the <a href="https://prairielearn.readthedocs.io/en/latest/elements/#pl-order-blocks-element" target="_blank" rel="noopener noreferrer">order-blocks</a> element on <a href="https://us.prairielearn.com/" target="_blank" rel="noopener noreferrer">PrairieLearn</a> and have contributed to the Parsons Problems question element on <a href="https://www.codespec.org/" target="_blank" rel="noopener noreferrer">CodeSpec</a>.
                                </p>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>

                        {/* Research Area 2 */}
                        <Card className="mb-4 research-card">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                                <Image src="assets/eipllogo.png" alt="Human-GenAI Collaborative Coding" className="research-icon" />
                              </Col>
                              <Col xs={12} sm={9} md={9} lg={10}>
                                <h5 className="research-title">Enabling Code Comprehension and Prompting Activities at Scale</h5>
                                <p className="research-text">
                                  My research focuses on tools to help students develop Human-GenAI collaborative
                                  coding skills. I introduced <a href="https://arxiv.org/pdf/2311.14903.pdf" target="_blank" rel="noopener noreferrer">"Code
                                  Generation Based Grading"</a> for Explain in Plain
                                  English (EiPE), which develops students' AI prompting and code comprehension skills.
                                  I maintain <a href="https://github.com/CoffeePoweredComputers/eiplgrader" target="_blank" rel="noopener noreferrer"><code>eiplgrader</code></a>,
                                  a Python package supporting this autograder. Recent work examines this approach in
                                  linguistically diverse contexts like <a href="https://arxiv.org/abs/2409.20297" target="_blank" rel="noopener noreferrer">India</a>.
                                </p>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>

                        {/* Research Area 3 */}
                        <Card className="mb-4 research-card">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                                <Image src="assets/cbtf.png" alt="Computer Based Testing" className="research-icon" />
                              </Col>
                              <Col xs={12} sm={9} md={9} lg={10}>
                                <h5 className="research-title">Scaling Summative Assessment through Computer Based Testing</h5>
                                <p className="research-text">
                                  I support at-scale computer-based testing for frequent assessment with immediate feedback.
                                  I've investigated <a href="https://par.nsf.gov/servlets/purl/10434207" target="_blank" rel="noopener noreferrer">second chance testing policies</a>, 
                                  <a href="https://dl.acm.org/doi/pdf/10.1145/3478431.3499388" target="_blank" rel="noopener noreferrer">fairness of randomized exams</a>, and 
                                  <a href="https://par.nsf.gov/servlets/purl/10434191" target="_blank" rel="noopener noreferrer">impacts of frequent exams</a> on student performance.
                                </p>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </div>

                      <div className="text-center text-md-start mt-4">
                        <p>
                          For more details, see my <a href="/#/cv">CV</a> and <a href="/#/research">research statement</a>. 
                          For information on my teaching approach, visit my <a href="/#/teaching">teaching page</a>.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            );
}
