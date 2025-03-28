import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./Research.css";

export default function Research() {
  useEffect(() => {
    document.title = "David H Smith IV | Research";
  }, []);

  return (
    <Container fluid>
      <div className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="research-content px-3 px-md-4">
            <div className="research-intro mb-4">
              <h4 className="section-title">Research Statement</h4>
              <p className="research-text">
                <strong>I develop interactive and engaging tools that support novice
                programmers.</strong> My goal as a researcher working at the
                intersection of Computing Education Research (CER) and
                Human-Computer Interaction (HCI) is to draw on theories of
                learning to create effective and scalable approaches for
                educating the next generation of computing professionals.
              </p>
              <p className="research-text">
                A significant part of my work in this space has involved Parsons
                problems, a programming activity in which learners must correctly
                arrange code fragments to solve a problem. My most recent work aims
                to support novices in engaging with human-GenAI collaborative
                programming. The long-term vision for this research is to create
                tools and approaches that enable individuals from non-computing
                backgrounds to seamlessly integrate computing into their workflows
                through code generation by prompting — what could be characterized
                as natural language programming. My published and current work on
                these topics are detailed further in the following sections.
              </p>
            </div>

            <div className="research-areas mb-4">
              <h4 className="section-title">Research Areas</h4>
              
              {/* Research Area 1: Parsons Problems */}
              <div className="research-area">
                <Card className="mb-4 research-detail-card">
                  <Card.Body>
                    <h5 className="area-title">Parsons Problems</h5>
                    <p className="area-description">
                      A key challenge in computer science education is developing pedagogical
                      approaches that are both engaging to students and aid in the efficient
                      acquisition of programming skills. A promising approach that has been the focus
                      of my research is Parsons problems, an activity where students
                      arrange blocks of code to form a program that satisfies a given
                      specification. This problem type has shown benefits both in formative contexts,
                      where they improve learning efficiency while reducing cognitive load, and
                      summative assessments, where they have been shown to test skills similar to code
                      writing.
                    </p>
                    
                    {/* Distractors in Parsons Problems */}
                    <Card className="mb-4 sub-area-card">
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col xs={12} sm={4} md={3} className="text-center mb-3 mb-sm-0">
                            <Image src="assets/parsons_distractors.png" alt="Parsons Problem with Distractors" className="area-image" />
                            <div className="image-caption">
                              Example of a Parsons problem with distractors.
                            </div>
                          </Col>
                          <Col xs={12} sm={8} md={9}>
                            <h6 className="sub-area-title">Distractors in Parsons Problems</h6>
                            <p className="sub-area-text">
                              The focus of my work in this area has been on the use of
                              distractors in Parsons problems. Distractors are incorrect
                              blocks of code that are included in the set of possible blocks
                              presented to the student when solving a Parsons problem. I
                              developed a novel approach to create and
                              then automatically generate distractors for Parsons problems.
                              My work has evaluated the effectiveness of these distractors in
                              both summative and formative contexts, finding that, though
                              they are somewhat ineffective at improving the quality of exam
                              questions, <em>they are essential</em> for improving learning
                              outcomes for learners in formative contexts.
                            </p>
                            
                            <div className="research-publications">
                              <h6 className="research-publications-title">Key Publications:</h6>
                              <ul className="research-publications-list">
                                <li>
                                  <a href="http://zilles.cs.illinois.edu/papers/smith_parsons_sigcse23.pdf" target="_blank" rel="noopener noreferrer">
                                    Discovering, Autogenerating, and Evaluating Distractors for Python Parsons Problems in CS1
                                  </a>
                                  <span className="research-publications-venue">SIGCSE TS 2023</span>
                                </li>
                                <li>
                                  <a href="https://drive.google.com/file/d/1ZrqD_eS2A4_5QMDdl1GgC34wlu2qdw_1/view" target="_blank" rel="noopener noreferrer">
                                    Investigating the Role and Impact of Distractors on Parsons Problems in CS1 Assessments
                                  </a>
                                  <span className="research-publications-venue">ACM TOCE 2023</span>
                                </li>
                                <li>
                                  <a href="https://zilles.cs.illinois.edu/papers/smith_parsons_grouped_COMPED_2023.pdf" target="_blank" rel="noopener noreferrer">
                                    Comparing the Impacts of Visually Grouped and Jumbled Distractors on Parsons Problems in CS1 Assessments
                                  </a>
                                  <span className="research-publications-venue">CompEd 2023</span>
                                </li>
                                <li>
                                  <a href="https://dl.acm.org/doi/pdf/10.1145/3632620.3671114" target="_blank" rel="noopener noreferrer">
                                    Distractors Make You Pay Attention: Investigating the Learning Outcomes of Including Distractor Blocks in Parsons Problems
                                  </a>
                                  <span className="research-publications-venue">SIGCSE TS 2024</span>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>
              </div>
              
              {/* Research Area 2: Explain in Plain Language */}
              <div className="research-area">
                <Card className="mb-4 research-detail-card">
                  <Card.Body>
                    <h5 className="area-title">Transforming Explain in Plain English Questions into Explain in Plain Language Questions</h5>
                    
                    <Row className="align-items-center mb-4">
                      <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                        <Image src="assets/schematic.png" alt="CGBG Approach" className="area-image" />
                        <div className="image-caption">
                          Schematic of the Code Generation Based Grading (CGBG) approach.
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <p className="area-description">
                          <strong>I developed a novel auto-grader for EiPE activities</strong>, 
                          <a href="https://dl.acm.org/doi/abs/10.1145/3649217.3653582" target="_blank" rel="noopener noreferrer"> "Code
                          Generation Based Grading"</a> (CGBG) which addresses many of
                          the difficulties inherent in grading EiPE activities. In this
                          approach, the individual's response to an EiPE question is used to
                          generate code which is then evaluated against a set of test cases to
                          determine if the response was capable of generating code that is
                          functionally equivalent to the code being described.
                          Additionally, given the multilingual capabilities of modern LLMs, 
                          this approach <strong>transforms what were formerly EiPE activities into
                          Explain in Plain Language (EiPL) activities</strong>, enabling the use of
                          non-English prompts.
                        </p>
                      </Col>
                    </Row>
                    
                    <div className="research-publications">
                      <h6 className="research-publications-title">Key Publications:</h6>
                      <ul className="research-publications-list">
                        <li>
                          <a href="https://dl.acm.org/doi/abs/10.1145/3649217.3653582" target="_blank" rel="noopener noreferrer">
                            Code Generation Based Grading: Evaluating an Auto-grading Mechanism for "Explain-in-Plain-English" Questions
                          </a>
                          <span className="research-publication-venue">SIGCSE TS 2024</span>
                        </li>
                        <li>
                          <a href="https://dl.acm.org/doi/pdf/10.1145/3657604.3662039" target="_blank" rel="noopener noreferrer">
                            Prompting for Comprehension: Exploring the Intersection of Explain in Plain English Questions and Prompt Writing
                          </a>
                          <span className="research-publication-venue">ITiCSE 2024</span>
                        </li>
                        <li>
                          <a href="https://dl.acm.org/doi/pdf/10.1145/3649217.3653587" target="_blank" rel="noopener noreferrer">
                            Explaining code with a purpose: An integrated approach for developing code comprehension and prompting skills
                          </a>
                          <span className="research-publication-venue">SIGCSE TS 2024</span>
                        </li>
                        <li>
                          <a href="https://arxiv.org/pdf/2409.20297" target="_blank" rel="noopener noreferrer">
                            Explain in Plain Language Questions with Indic Languages: Drawbacks, Affordances, and Opportunities
                          </a>
                          <span className="research-publication-venue">COMPUTE 2024</span>
                        </li>
                        <li>
                          <a href="https://arxiv.org/abs/2410.03063" target="_blank" rel="noopener noreferrer">
                            Integrating Natural Language Prompting Tasks in Introductory Programming Courses
                          </a>
                          <span className="research-publication-venue">SIGCSE TS 2025</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="implementation-info mt-4">
                      <p className="implementation-text">
                        To support the continued adoption and evaluation of this approach,
                        <strong> this autograder has been released as an open-source Python
                        package</strong> <a
                        href="https://github.com/CoffeePoweredComputers/eiplgrader"
                        target="_blank" rel="noopener noreferrer">eiplgrader</a> which I am continuing to
                        actively develop and maintain. <strong>This system has been
                        deployed at multiple institutions,</strong> including University of
                        Illinois Urbana-Champaign, University of California - San Diego, the
                        University of Auckland, and an online course by the Indian Institute of
                        Science.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              
              {/* Research Area 3: Computer-Based Testing */}
              <div className="research-area">
                <Card className="mb-4 research-detail-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/cbtf.png" alt="Computer Based Testing" className="area-image" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="area-title">Scaling Summative Assessment through Computer Based Testing</h5>
                        <p className="area-description">
                          I support at-scale computer-based testing for frequent assessment with immediate feedback. 
                          My research in this area focuses on ways to improve the efficiency, fairness, and effectiveness 
                          of computer-based testing in large-scale CS courses. I've investigated second chance testing policies, 
                          fairness of randomized exams, and impacts of frequent exams on student performance.
                        </p>
                        
                        <div className="research-publications">
                          <h6 className="research-publications-title">Key Publications:</h6>
                          <ul className="research-publications-list">
                            <li>
                              <a href="https://par.nsf.gov/servlets/purl/10434207" target="_blank" rel="noopener noreferrer">
                                In Which We Investigate the Impact of Second Chance Testing in Large-scale Computer-based Testing
                              </a>
                              <span className="research-publication-venue">SIGCSE TS 2022</span>
                            </li>
                            <li>
                              <a href="https://dl.acm.org/doi/pdf/10.1145/3478431.3499388" target="_blank" rel="noopener noreferrer">
                                Investigating the Fairness and Efficacy of Randomized Exams in CS1: Enabling Frequent Testing at Scale
                              </a>
                              <span className="research-publication-venue">SIGCSE TS 2022</span>
                            </li>
                            <li>
                              <a href="https://par.nsf.gov/servlets/purl/10434191" target="_blank" rel="noopener noreferrer">
                                Measuring the Effects of Frequent Testing in a CS1 Course with the Digital SAT Model
                              </a>
                              <span className="research-publications-venue">SIGCSE TS 2022</span>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </div>
            
            <div className="current-projects mb-4">
              <h4 className="section-title">Current Projects</h4>
              
              <Row xs={1} md={2} className="g-4">
                {/* Current Project 1 */}
                <Col>
                  <Card className="project-card h-100">
                    <Card.Body>
                      <h5 className="project-title">Supporting Human-GenAI Collaborative Programming</h5>
                      <p className="project-text">
                        This project investigates pedagogical approaches for developing students' skills in 
                        human-GenAI collaborative programming. We are developing and evaluating activities 
                        that help students learn effective prompting strategies, including the ability to 
                        communicate intent clearly, analyze generated code critically, and iteratively refine prompts.
                      </p>
                      <span className="project-status">Ongoing - Meta Llama Impact Grant</span>
                    </Card.Body>
                  </Card>
                </Col>
                
                {/* Current Project 2 */}
                <Col>
                  <Card className="project-card h-100">
                    <Card.Body>
                      <h5 className="project-title">Evaluating Code Comprehension Assessment Methods</h5>
                      <p className="project-text">
                        This project compares different methods for assessing code comprehension, including 
                        explain-in-plain-language questions, function naming tasks, and code tracing. We are 
                        investigating the relationships between these different assessment approaches and 
                        their correlation with code writing performance.
                      </p>
                      <span className="project-status">Ongoing - Multiple publications in preparation</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            
            <div className="text-center text-md-start mt-4">
              <p className="conclusion-text">
                For a complete list of publications and more details about my research, 
                please refer to my <a href="/#/cv">CV</a> or visit my 
                <a href="https://scholar.google.com/citations?user=3eUc2OMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar profile</a>.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
