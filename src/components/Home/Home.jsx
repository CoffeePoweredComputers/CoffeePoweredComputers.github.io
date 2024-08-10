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
            <Container>
                <Jumbotron>
                    <Row>

                        <Col className="how-grid text-center" xs={14} sm={5} >

                            <Image src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=hpe-z9YAAAAJ&citpid=3" roundedCircle/>
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
                                <strong> 
                                    I am a fifth year PhD student at the University of Illinois
                                Urbana-Champaign in the Department of Computer Science. </strong>
                            My Current research interests take on three main areas: 
                            <ul>
                                <li> 
                                    <b>Parsons Problems for Intro Python:</b> I investigate the design of Parsons Problems for teaching and exams in introductory Python. I have been involved in supporting the <a href="https://prairielearn.readthedocs.io/en/latest/elements/#pl-order-blocks-element"><u>order-blocks</u></a> element on the <a href="https://us.prairielearn.com/"><u>PrairieLearn</u></a> assessment platform and involved in development of the Parsons Problems element on <a href="https://www.codespec.org/"><u>CodeSpec</u></a>.
                                </li>
                                <br/>
                                <li> 
                                    <b>Generative AI in Intro CS:</b> I investigate the intersection of prompting generative AI and Explain in Plain English questions and how that intersection can be used to support introductory programming students in developing code comprehension skills. I introduced <a href="https://arxiv.org/pdf/2311.14903.pdf"><u>"Code Generation Based Grading"</u></a> for EiPE questions which were recently used in an introductory programming course at UC San Diego which places a heavy emphasis on effectively coding with the use of Generative AI.
                                </li>
                                <br/>
                                <li> 
                                    <b>Large Scale Computer Based Assessment: </b> I am broadly interested in supporting at scale computer based testing as they support frequent and second chance testing, immediate feedback, and reduce burden on instructors and course staff. I have investigated second chance testing policies, fairness of randomized exams, and the impact of frequent exams on students performance.
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
        );

    }
}
