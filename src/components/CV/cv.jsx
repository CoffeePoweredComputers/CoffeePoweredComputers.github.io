import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import "./cv.css";
import CVData from './cv.json';


export default class CV extends Component {

    componentDidMount() {
        document.title = "David H Smith IV | CV";
    }

    render() {

        /* Creates a list of all my educational attributes */
        const education = CVData.education.map( (fields, id) => {
            return( 
                <React.Fragment>
                    <div className="cv-position"><b>{fields.school}</b></div>
                    <div className="cv-year">{fields.years}</div>
                    {fields.degrees.map( (degree, id) => { return <React.Fragment> <i> {degree} </i> <br/> </React.Fragment>})}
                    {fields.advisor !== "" ? (<i> <b> Advisor: </b> {fields.advisor}</i>) : (<div></div>) }
                </React.Fragment> 
            );
        });

        /* Creates a list of all my experiences */
        const experience = CVData.experience.map( (experience, id) => {
            return(
                <React.Fragment>
                    <div className="cv-position"><b>{experience.employer}</b></div>
                    <div className="cv-year">{experience.duration}</div>
                    <i>{experience.position}</i>
                    <ul>
                        { experience.accomplishments.map( (accomplishment, id) => { return <li> {accomplishment} </li> } )}
                    </ul>
                </React.Fragment>
                );
        });

        /* Creates a list of all my projects */
        const projects = CVData.projects.map( (project, id) => {
            return(
                <React.Fragment>

                    <div className="cv-position"><b>{project.title}</b></div>
                    <i>{project.client}</i>

                    <Row>

                        <Col sm={5}>
                            <Image src={project.image_path} thumbnail rounded />
                        </Col>

                        <Col sm={7}>
                            <ul>
                                { project.work.map( (w, id) => { return <li> {w} </li> }) }
                            </ul>
                        </Col>

                    </Row>
                </React.Fragment>
                );
        });

        const publications = CVData.publications.map ( (pub, id) => {
            return(
                <React.Fragment>
                    <li>
                        {pub.authors},&nbsp;
                        <a href={pub.link}>
                            <b>{pub.title}</b>
                        </a> 
                        ,&nbsp;{pub.venue}
                    </li>
                </React.Fragment>
                );
        });

        const merits = CVData.merits.map( (merit, id) => {
            return(
                <React.Fragment>
                    <li>
                        <i><b>{merit.title}</b></i> - {merit.description}
                    </li>
                </React.Fragment>
                );
        });

        const courseWebsites = CVData.course_websites.map( (course, id) => {
            return(
                <React.Fragment>
                    <li>
                        <i><b>{course.name}</b></i> - <a href={course.link}> {course.link} </a>
                    </li>
                </React.Fragment>
            )
        });

        return (

            <Container>
                <Jumbotron>

                    <div className="cv">

                        <div className="cv-header"><b>Education</b></div>
                        {education}

                        <div className="cv-header"><b>Experience</b></div>
                        {experience}


                        <div className="cv-header"><b>Projects</b></div>
                        {projects}


                        <div className="cv-header"><b>Publications</b></div>
                        <ul>
                            {publications}
                        </ul>

                        <div className="cv-header"><b>Course Websites</b></div>
                        <ul>
                            {courseWebsites}
                        </ul>

                        <div className="cv-header"><b>Academic Achievements</b></div>
                        <ul>
                            {merits}
                        </ul>
                    </div>

                </Jumbotron >
            </Container >
            );
    }
}
