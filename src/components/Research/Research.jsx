import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image, Accordion, Badge } from 'react-bootstrap';
import "./Research.css";

export default function Research() {
  useEffect(() => {
    document.title = "David H Smith IV | Research";
  }, []);

  return (
    <Container fluid>
      <section className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <h1 className="sr-only">Research - David H Smith IV</h1>
            
            {/* Research Statement - Clean intro section */}
            <div className="research-intro mb-4">
              <h2 className="research-title">Research Vision</h2>
              <p style={{ fontSize: 'var(--font-size-md)', lineHeight: '1.6' }}>
                <strong>I develop and evaluate interactive and engaging tools that support novice programmers.</strong> My goal as a researcher working at the intersection of Computing Education Research (CER) and Human-Computer Interaction (HCI) is to draw on theories of learning to create effective and scalable approaches for educating the next generation of computing professionals.
              </p>
            </div>

            {/* Research Areas - Using same card pattern as Home page */}
            <h2 className="research-title mb-4">Research Areas</h2>
            
            {/* Parsons Problems */}
            <Card className="mb-4 research-card">
              <Card.Body>
                <Row className="align-items-start">
                  <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                    <Image src="assets/parsons2.png" alt="Parsons Problems" className="research-icon" />
                  </Col>
                  <Col xs={12} sm={9} md={9} lg={10}>
                    <h5 className="research-title">Scaffolding Code Writing with Parsons Problems</h5>
                    <p className="research-text">
                      My dissertation focused on the design and evaluation of Parsons Problems with distractors for teaching introductory Python. 
                      This work includes investigations on distractor blocks' psychometric properties and their impact on learning. 
                      I've developed novel approaches to automatically generate distractors and evaluated their effectiveness in both formative and summative contexts.
                    </p>
                    
                    <Accordion className="mt-3">
                      <Accordion.Item eventKey="parsons">
                        <Accordion.Header>Key Contributions & Publications</Accordion.Header>
                        <Accordion.Body>
                          <div className="mb-3">
                            <h6 className="fw-bold">Dissertation Contributions:</h6>
                            <ul className="small">
                              <li>Novel approach to automatically generate distractors for Parsons problems</li>
                              <li>Evidence that distractors are essential for improving learning outcomes in formative contexts</li>
                              <li>Framework for evaluating distractor effectiveness in assessments</li>
                            </ul>
                          </div>
                          
                          <h6 className="fw-bold">Selected Publications:</h6>
                          <ul className="publication-list">
                            <li className="mb-2">
                              <a href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671114" target="_blank" rel="noopener noreferrer">
                                Distractors Make You Pay Attention: Investigating the Learning Outcomes of Including Distractor Blocks
                              </a>
                              <Badge bg="primary" className="ms-2">ICER 2024</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="http://zilles.cs.illinois.edu/papers/smith_parsons_sigcse23.pdf" target="_blank" rel="noopener noreferrer">
                                Discovering, Autogenerating, and Evaluating Distractors for Python Parsons Problems in CS1
                              </a>
                              <Badge bg="primary" className="ms-2">SIGCSE 2023</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://zilles.cs.illinois.edu/papers/smith_parsons_grouped_COMPED_2023.pdf" target="_blank" rel="noopener noreferrer">
                                Comparing the Impacts of Visually Grouped and Jumbled Distractors on Parsons Problems
                              </a>
                              <Badge bg="primary" className="ms-2">CompEd 2023</Badge>
                            </li>
                          </ul>
                          
                          <div className="mt-3 p-3 bg-light rounded">
                            <strong>Tool Support:</strong> Contributing to the <a href="https://prairielearn.readthedocs.io/en/latest/elements/#pl-order-blocks-element" target="_blank" rel="noopener noreferrer">order-blocks</a> element on PrairieLearn and Parsons Problems on <a href="https://www.codespec.org/" target="_blank" rel="noopener noreferrer">CodeSpec</a>.
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* EiPL Questions */}
            <Card className="mb-4 research-card">
              <Card.Body>
                <Row className="align-items-start">
                  <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                    <Image src="assets/eipllogo.png" alt="EiPL Questions" className="research-icon" />
                  </Col>
                  <Col xs={12} sm={9} md={9} lg={10}>
                    <h5 className="research-title">Explain in Plain Language Questions: Enabling Code Comprehension at Scale</h5>
                    <p className="research-text">
                      I developed "Code Generation Based Grading" (CGBG), a novel auto-grader that transforms Explain in Plain English questions into 
                      Explain in Plain Language activities, enabling multilingual code comprehension assessment. This approach uses student responses to 
                      generate code via LLMs, then evaluates functional equivalence through test cases.
                    </p>
                    
                    <Accordion className="mt-3">
                      <Accordion.Item eventKey="eipl">
                        <Accordion.Header>Impact & Publications</Accordion.Header>
                        <Accordion.Body>
                          <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded">
                            <h6 className="fw-bold">🏆 Llama Impact Grant Recipient</h6>
                            <p className="mb-0 small">Awarded funding with Paul Denny to advance EiPL questions and Prompt problems research.</p>
                          </div>
                          
                          <div className="mb-3">
                            <h6 className="fw-bold">Deployment & Impact:</h6>
                            <ul className="small">
                              <li>Open-source Python package: <a href="https://github.com/CoffeePoweredComputers/eiplgrader" target="_blank" rel="noopener noreferrer"><code>eiplgrader</code></a></li>
                              <li>Deployed at: UIUC, UC San Diego, University of Auckland, Indian Institute of Science</li>
                              <li>Enables assessment in multiple languages including Indic languages</li>
                            </ul>
                          </div>
                          
                          <h6 className="fw-bold">Recent Publications:</h6>
                          <ul className="publication-list">
                            <li className="mb-2">
                              <a href="https://arxiv.org/pdf/2503.12207" target="_blank" rel="noopener noreferrer">
                                ReDefining Code Comprehension: Function Naming as a Mechanism for Evaluating Code Comprehension
                              </a>
                              <Badge bg="success" className="ms-2">ITiCSE 2025</Badge>
                              <Badge bg="warning" text="dark" className="ms-2">Best Paper Nominee</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://arxiv.org/pdf/2503.12216" target="_blank" rel="noopener noreferrer">
                                Counting the Trees in the Forest: Evaluating Prompt Segmentation for Classifying Code Comprehension
                              </a>
                              <Badge bg="success" className="ms-2">ITiCSE 2025</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://dl.acm.org/doi/abs/10.1145/3649217.3653582" target="_blank" rel="noopener noreferrer">
                                Code Generation Based Grading: Evaluating an Auto-grading Mechanism
                              </a>
                              <Badge bg="primary" className="ms-2">SIGCSE 2024</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://arxiv.org/pdf/2409.20297" target="_blank" rel="noopener noreferrer">
                                Explain in Plain Language Questions with Indic Languages
                              </a>
                              <Badge bg="primary" className="ms-2">COMPUTE 2024</Badge>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Computer-Based Testing */}
            <Card className="mb-4 research-card">
              <Card.Body>
                <Row className="align-items-start">
                  <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                    <Image src="assets/cbtf.png" alt="Computer Based Testing" className="research-icon" />
                  </Col>
                  <Col xs={12} sm={9} md={9} lg={10}>
                    <h5 className="research-title">Scaling Summative Assessment through Computer Based Testing</h5>
                    <p className="research-text">
                      I support at-scale computer-based testing for frequent assessment with immediate feedback. My research investigates 
                      second-chance testing policies, fairness of randomized exams, and impacts of frequent testing on student performance 
                      and behavior.
                    </p>
                    
                    <Accordion className="mt-3">
                      <Accordion.Item eventKey="cbt">
                        <Accordion.Header>Key Findings & Publications</Accordion.Header>
                        <Accordion.Body>
                          <h6 className="fw-bold">Research Contributions:</h6>
                          <ul className="small mb-3">
                            <li>Evidence for optimal second-chance testing policies in STEM courses</li>
                            <li>Framework for evaluating fairness in randomized exam pools</li>
                            <li>Analysis of testing frequency impact on programming performance</li>
                          </ul>
                          
                          <h6 className="fw-bold">Selected Publications:</h6>
                          <ul className="publication-list">
                            <li className="mb-2">
                              <a href="https://par.nsf.gov/servlets/purl/10434191" target="_blank" rel="noopener noreferrer">
                                Investigating the Effects of Testing Frequency on Programming Performance
                              </a>
                              <Badge bg="primary" className="ms-2">SIGCSE 2023</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://dl.acm.org/doi/pdf/10.1145/3478431.3499388" target="_blank" rel="noopener noreferrer">
                                Are We Fair? Quantifying Score Impacts of Computer Science Exams with Randomized Question Pools
                              </a>
                              <Badge bg="primary" className="ms-2">SIGCSE 2022</Badge>
                            </li>
                            <li className="mb-2">
                              <a href="https://par.nsf.gov/servlets/purl/10434207" target="_blank" rel="noopener noreferrer">
                                Determining the Best Policies for Second-Chance Tests for STEM Students
                              </a>
                              <Badge bg="info" className="ms-2">ASEE 2022</Badge>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Current Projects & Future Directions */}
            <div className="research-intro mt-5 mb-4">
              <h2 className="research-title">Current Projects</h2>
              <Row className="mt-3">
                <Col md={12} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <h6 className="fw-bold">Multi-Institution EiPL Study</h6>
                      <p className="small">Collaborating with universities globally to evaluate the effectiveness of EiPL questions across different educational contexts and languages.</p>
                      <Badge bg="success">Active</Badge>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </section>
    </Container>
  );
}