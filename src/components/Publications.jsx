import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./Publications.css";


export default class Publications extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Publications";
  }

  render() {
    return (
      < Grid >
        <Jumbotron>

          <Row>
            <h2>
              Publications
            </h2>
          </Row>

          <Row>
            <Col xs={6} sm={3}>
              <a href="https://dl.acm.org/citation.cfm?id=3309503&preflayout=tabs" target="_blank"><Image src="assets/comped.png" responsive thumbnail className="profile-pic" /></a>
            </Col>
            <Col className="text-left">
              <p>
                <b><i>Quantifying the Effects of Prior Knowledge in Entry-Level Programming Courses: </i></b> Computer literacy and programming are being taught increasingly at the K-12 level with more students than ever matriculating in college with prior programming experience. Accurately assessing student programming skills acquired in high school can inform college faculty about the range of competencies in introductory programming courses. The tool predominantly-used for assessing past CS knowledge and skills is a survey, which lacks quantitative rigor. This study aims to (1) quantify the effects of prior knowledge in entry-level programming courses and (2) compare the different measurement approaches of student prior knowledge in programming, including surveys and aptitude tests. The results of this study reveal that a discrepancy exists between the results of surveys and aptitude tests. Consistent with prior survey studies, our survey results showed that the effects of student prior programming knowledge faded gradually during the course period. In contrast, the aptitude test results indicated that the effects of student prior knowledge did not weaken over time. The accuracy of both measurements and implications for instructors were further discussed.
              </p>
              <p>
                <small>
                  Smith, D., Hao, Q., Jagodzinski, F., Liu, Y., Gupta, V. (2019). <i>Quantifying the Effects of Prior Knowledge in Entry-Level Programming Courses.</i> In Proceedings of the ACM Conference on Global Computing Education (CompEd '19). ACM, New York, NY, USA, 30-36.
                </small>
              </p>
              <p>

              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={6} sm={3}>
              <a href="" target="_blank"><Image src="assets/meta.png" responsive thumbnail className="profile-pic" /></a>
            </Col>
            <Col className="text-left">
              <p>
                <b><i>A Systematic Investigation of Replications in Computing Education Research: </i></b> As the societal demands for application and knowledge in computer science increase, computer science student enrollment keeps growing rapidly around the world. By continuously improving the efficacy of computing education and providing guidelines for learning and teaching practice, computing education research plays a vital role in addressing both educational and societal challenges that emerge from the growth of computer science students. Given the significant role of computing education research, it is important to ensure the reliability of studies in this field. The extent to which studies can be replicated in a field is one of the most important standards for reliability. Different fields have paid an increasing attention to the replication rates of their studies, but the replication rate of computing education was never systematically studied. To fill this gap, this study investigated the replication rate of computing education between 2009 and 2018. We examined 2,269 published studies from three major conferences and two major journals in computing education, and found that the overall replication rate of computing education was 2.38%. This study demonstrated the needs for more replication studies in computing education and discussed how to encourage replication studies through research initiatives and policy making.
              </p>
              <p>
                <small>
                  Q. Hao, H. H. Smith IV, N. Iriumi, M. Tsikerdekis, A. J. Ko <b>A Systematic Investigation of Replications in Computing Education Research</b> ACM Transactions on computing Education (TOCE). (Accepted, Pending Publication)
                </small>
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={6} sm={3}>
              <a href="https://arxiv.org/abs/1906.08937" target="_blank"><Image src="assets/feedback.png" responsive thumbnail className="profile-pic" /></a>
            </Col>
            <Col className="text-left">
              <p>
                <b><i>Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments: </i></b>  This study investigated the essential of meaningful automated feedback for programming assignments. Three different types of feedback were tested, including (a) What's wrong - what test cases were testing and which failed, (b) Gap - comparisons between expected and actual outputs, and (c) Hint - hints on how to fix problems if test cases failed. 46 students taking a CS2 participated in this study. They were divided into three groups, and the feedback configurations for each group were different: (1) Group One - What's wrong, (2) Group Two - What's wrong + Gap, (3) Group Three - What's wrong + Gap + Hint. This study found that simply knowing what failed did not help students sufficiently, and might stimulate system gaming behavior. Hints were not found to be impactful on student performance or their usage of automated feedback. Based on the findings, this study provides practical guidance on the design of automated feedback.
              </p>
              <p>
                <small>
                  Hao, Q., Wilson, J., Ottaway, C., Iriumi, N., Arakawa, K., Smith, D. (In Press). <i> Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments.</i> In Proceedings of 2019 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). Memphis, TN.
                </small>
              </p>
            </Col>
          </Row>

        </Jumbotron >
      </Grid >
    );
  }
}