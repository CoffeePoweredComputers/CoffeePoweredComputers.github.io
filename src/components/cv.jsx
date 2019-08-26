import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./cv.css";


export default class CV extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | CV";
  }

  render() {
    return (
      < Grid >
        <Jumbotron>

          <div className="cv">

            <div className="cv-header"><b>Education</b></div>


            <div className="cv-position"><b>Western Washington University</b></div>
            <div className="cv-year">2017-Present</div>
            <i>B.S. Computer Science</i>


            <div className="cv-position"><b>Skagit Valley College</b></div>
            <div className="cv-year">2015-2017</div>
            <i>A.S. Computer Science</i>
            <br />
            <i>A.S Physics/Engineering</i>


            <div className="cv-header"><b>Experience</b></div>

            <div className="cv-position"><b>Western Washington University</b></div>
            <i>Undergraduate Research Assistant</i>
            <ul>
              <li>Worked in a team environment, both locally and remotely, to design and implement a web scraper and PDF processor for data collection purposes.</li>
              <li>Performed Social Network Analysis (SNA) on student interactions within the Piazza Q&A site.</li>
              <li>Analyzed the effects of formative feedback systems, specifically one developed using Travis-CI, Git, GitHub, Gradel, and GitHub Classroom, and its effects on student performance and behavioral patterns.</li>
            </ul>

            <div className="cv-position"><b>Western Washington University</b></div>
            <i>ACM Peer Mentor</i>
            <ul>
              <li>Volunteered to tutor computer science pre-majors on the subject including discrete math, language theory, computer systems, data structures, algorithms, as well as fundamentals or programming.</li>
            </ul>

            <div className="cv-header"><b>Projects</b></div>
            <ul>
              <li>Currently involved in the development of a data visualization dashboard for high performance computing clusters (HPC) at Lawrence Livermore National Laboratory.</li>
            </ul>

            <div className="cv-header"><b>Publications</b></div>
            <ul>
              <li>D. H. Smith IV, Q. Hao, F. Jagodzinski,  V. Gupta, Y. Liu,  <a href="http://qhao.info/downloads/comped-2019.pdf"><b>Quantification of the Effects of Prior Knowledge in Entry-Level Programming Courses.</b></a> CompEd 2019</li>
              <li>Hao, Q., Wilson, J., Ottaway, C., Iriumi, N., Arakawa, K., Smith, D. (In Press). <a href="https://arxiv.org/abs/1906.08937"><b>Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments</b></a>. In Proceedings of 2019 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). Memphis, TN.</li>
              <li> Q. Hao, D. H. Smith IV, N. Iriumi, M. Tsikerdekis, A. J. Ko <a href="https://dl.acm.org/citation.cfm?id=3345328"><b>A Systematic Investigation of Replications in Computing Education Research</b></a> ACM Transactions on Computing Education (TOCE).</li>
            </ul>

            <div className="cv-header"><b>Academic Achievements</b></div>
            <ul>
              <li><i>Faithlife Corp. Scholarship</i> - One of eighteen students awarded a departmental scholarship for computer science at Western Washington Univeristy for $2000</li>
              <li><i>Departmental Scholarship</i> - Awarded a departmental scholarship for $1000.</li>
            </ul>
          </div>

        </Jumbotron >
      </Grid >
    );
  }
}