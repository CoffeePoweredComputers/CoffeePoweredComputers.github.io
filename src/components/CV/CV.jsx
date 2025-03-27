import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./CV.css";
import CVData from './CV.json';

export default function CV() {
    useEffect(() => {
        document.title = "David H Smith IV | CV";
    }, []);

    const markMe = (str) => {
        let authors = "";
        if (str.includes("and")) {
            authors = str.split("and");
        } else {
            authors = str.split(",");
        }
        let marked = "";
        for (let i = 0; i < authors.length; i++) {
            let author = authors[i].trim();
            if (author.startsWith("David")) {
                marked += "<u>David H. Smith IV" + (author.includes("*") ? "*" : "") + "</u>, ";
            } else {
                marked += author + ", ";
            }
        }
        return marked.substring(0, marked.length - 2);
    };

    /* Creates a list of all my educational attributes */
    const education = CVData.education.map((fields, id) => {
        return( 
            <React.Fragment key={id}>
                <div className="cv-position"><b>{fields.school}</b></div>
                <div className="cv-year">{fields.years}</div>
                {fields.degrees.map((degree, idx) => { 
                    return <React.Fragment key={idx}> <i> {degree} </i> <br/> </React.Fragment>
                })}
                {fields.advisor !== "" ? (<i> <b> Advisor: </b> {fields.advisor}</i>) : (<div></div>) }
            </React.Fragment> 
        );
    });

    /* Creates a list of all my experiences */
    const experience = CVData.experience.map((experience, id) => {
        return(
            <React.Fragment key={id}>
                <div className="cv-position"><b>{experience.employer}</b></div>
                <div className="cv-year">{experience.duration}</div>
                <i>{experience.position}</i>
                <ul>
                    {experience.accomplishments.map((accomplishment, idx) => { 
                        return <li key={idx}> {accomplishment} </li> 
                    })}
                </ul>
            </React.Fragment>
        );
    });

    /* Creates a list of all my projects */
    const projects = CVData.projects.map((project, id) => {
        return(
            <React.Fragment key={id}>
                <div className="cv-position"><b>{project.title}</b></div>
                <i>{project.client}</i>
                <Row>
                    <Col sm={5}>
                        <Image src={project.image_path} alt={project.title} thumbnail rounded />
                    </Col>
                    <Col sm={7}>
                        <ul>
                            {project.work.map((w, idx) => { 
                                return <li key={idx}> {w} </li> 
                            })}
                        </ul>
                    </Col>
                </Row>
                <br/>
            </React.Fragment>
        );
    });

    const publications = CVData.publications.map((pub, id) => {
        return(
            <React.Fragment key={id}>
                <li>
                    <i><span dangerouslySetInnerHTML={{__html: markMe(pub.authors)}}></span></i>&nbsp;-&nbsp;
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <b>{pub.title}</b>
                    </a>&nbsp;-&nbsp;{pub.venue}
                </li>
            </React.Fragment>
        );
    });

    const workshops = CVData.workshops.map((work, id) => {
        return(
            <React.Fragment key={id}>
                <li>
                    <i><span dangerouslySetInnerHTML={{__html: markMe(work.authors)}}></span></i>&nbsp;-&nbsp;
                    <a href={work.slides} target="_blank" rel="noopener noreferrer">
                        <b>{work.title}</b>
                    </a> 
                    ,&nbsp;{work.venue}
                </li>
            </React.Fragment>
        );
    });

    const invitedTalk = CVData.talks.map((pub, id) => {
        return(
            <React.Fragment key={id}>
                <li>
                    <b>{pub.title}</b>
                    ,&nbsp;{pub.venue}
                </li>
            </React.Fragment>
        );
    });

    const merits = CVData.merits.map((merit, id) => {
        return(
            <React.Fragment key={id}>
                <li>
                    <i><b>{merit.title}</b></i> - {merit.description}
                </li>
            </React.Fragment>
        );
    });

    const courseWebsites = CVData.course_websites.map((course, id) => {
        return(
            <React.Fragment key={id}>
                <li>
                    <i><b>{course.name}</b></i> - <a href={course.link} target="_blank" rel="noopener noreferrer"> {course.link} </a>
                </li>
            </React.Fragment>
        );
    });

    return (
        <Container>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="cv" id="cv">
                    <div className="cv-header"><b>Education</b></div>
                    {education}

                    <div className="cv-header"><b>Experience</b></div>
                    {experience}

                    <div className="cv-header"><b>Projects</b></div>
                    {projects}

                    <div className="cv-header"><b>Publications</b></div>
                    <ol className="cv-publist">
                        {publications}
                    </ol>
                    <span> <i> Note: the * indicates equal contribution. 🥈 indicates best paper nomination and 🏆 indicates best paper award. </i> </span>

                    <div className="cv-header"><b>Posters, Workshops, and Long Abstracts</b></div>
                    <ul className="cv-publist">
                        {workshops}
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
            </div>
        </Container>
    );
}
