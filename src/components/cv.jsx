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
      <Grid>
        <Jumbotron>

          <div className="cv">

            <div className="cv-header"><b>Education</b></div>


            <div className="cv-position"><b>Western Washington University</b></div>
            <div className="cv-year">2017-2019</div>
            <i>Bachelors of Science - Computer Science</i>


            <div className="cv-position"><b>Skagit Valley College</b></div>
            <div className="cv-year">2015-2017</div>
            <i>Associates of Science - Computer Science</i>
            <br />
            <i>Associates of Science - Physics/Engineering</i>

            <div className="cv-header"><b>Experience</b></div>

            <div className="cv-position"><b>Western Washington University</b></div>
            <i>Undergraduate Research Assistant</i>
            <ul>
              <li>Worked in a team environment, both locally and remotely, to design and implement a web scraper and PDF processor for data collection purposes.</li>
              <li>Performed Social Network Analysis (SNA) on student interactions within the Piazza Q&A site in an effort to quantify the impacts of instructor-student interactions.</li>
              <li>Analyzed the effects of formative feedback systems, specifically one developed using Travis-CI, Git, GitHub, Gradle, and GitHub Classroom, and its effects on student performance and behavior.</li>
              <li>Worked on a meta review project that sought to investigate the state of performance prediction research in STEM</li>
              <li>Adapted data collection scripts for a system aimed at the early detection of academically at-risk students.</li>
              <li>Analyzed the impact of factors such as prior experience, validated test results, and self-efficacy on students' abilities to succeed in introductory computer science courses.</li>
            </ul>

            <div className="cv-position"><b>Western Washington University</b></div>
            <i>ACM Peer Mentor</i>
            <ul>
              <li>Volunteered to tutor computer science pre-majors on the subject including discrete math, language theory, computer systems, data structures, algorithms, as well as fundamentals or programming.</li>
            </ul>

            <div className="cv-header"><b>Projects</b></div>

              <div className="cv-position"><b>High Performance Computing Time-Series Visualization Dashboard</b></div>
                <i>Clients - Dr. Tanzima Islam, Lawrence Livermore National Laboratory, Western Washington University</i>
            <ul>
              <li>Involved in the development of a data visualization dashboard, implemented using Technology: Python, SQLlite, Typescript, Vue, ThreeJS, D3, for high performance computing clusters for Lawrence Livermore National Laboratory.</li>
              <li>Adapted and designed visualizations for the representation of large quantities of time series data.</li>
              <li>Designed and implemented the backend data processing pipeline</li>
            </ul>

            <div className="cv-header"><b>Publications</b></div>
            <ul>
              <li>D. H. Smith IV, Q. Hao, F. Jagodzinski,  V. Gupta, Y. Liu,  <a href="http://qhao.info/downloads/comped-2019.pdf"><b>Quantification of the Effects of Prior Knowledge in Entry-Level Programming Courses.</b></a> CompEd 2019</li>
              <li>Hao, Q., Wilson, J., Ottaway, C., Iriumi, N., Arakawa, K., Smith, D. (In Press). <a href="https://arxiv.org/abs/1906.08937"><b>Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments</b></a>. In Proceedings of 2019 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). Memphis, TN.</li>
              <li> Q. Hao, D. H. Smith IV, N. Iriumi, M. Tsikerdekis, Amy. J. Ko <a href="https://dl.acm.org/citation.cfm?id=3345328"><b>A Systematic Investigation of Replications in Computing Education Research</b></a> ACM Transactions on Computing Education (TOCE).</li>
            </ul>

            <div className="cv-header"><b>Academic Achievements</b></div>
            <ul>
              <li><i><b>Faithlife Corp. Scholarship</b></i> - One of eighteen students awarded a departmental scholarship for computer science at Western Washington University for $2000</li>
              <li><i><b>Departmental Scholarship</b></i> - One of a select number of students to be awarded a $1000 dollar scholarship for academic merit within the computer science major.</li>
            </ul>
          </div>

        </Jumbotron >
      </Grid >
    );
  }
}
