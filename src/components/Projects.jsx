import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import "./Home.css";

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default class Projects extends Component{
	render() {
		return(
			<Container>
			<Jumbotron>
				
				<Row>
					<h2>Projects</h2>
					<p>Below are my current ongoing projects. All these, and more, can be accessed at my personal GitHub <a href="https://github.com/CoffeePoweredComputers"  target="_blank">here</a>. Project's individual GitHub pages can be accessed by clicking each projects icon.</p>
				</Row>

				<Row>
				<h3>
					This Website
				</h3>
					<Col sm={6} md={3} >

						<a href="https://github.com/CoffeePoweredComputers/hamiltonfour.github.io"  target="_blank"><Image src="assets/react-bootstrap.png" responsive thumbnail className="profile-pic"/></a> 

					</Col>
					<Col md={15}>
						<p>
							This website is an ongoing project of mine being implemented in <a href="https://react-bootstrap.github.io/" target="_blank">react-boostrap</a>. This platform provides a more cohesive coupling of the React framework with the well established front end framework Bootstrap. Currently this environment only supports Bootstrap v3 with Boostrap v4 support currently under development. This website is currently implemented using a single page the contents of which is controled via navbar buttons conecting to a React router. This is done to enable easy hosting on GitHub pages.
						</p>
					</Col>
				</Row>

				<Row>
				<h3>
					Project Euler
				</h3>
					<Col sm={6} md={3} >

						<a href="https://github.com/CoffeePoweredComputers/ProjectEuler"  target="_blank"><Image src="assets/eulers_number.jpg" responsive thumbnail className="profile-pic"/></a> 

					</Col>
					<Col sm={15} md={15} >
						<p>
							I am in the process of working my way through the various problems presented on "Project Euler". All solutions can be found on my github and those that are particuarly interesting come with documentation on their solutions.
						</p>
					</Col>	
				</Row>
				
				<Row>
				<h3>
					Project Dwemer
				</h3>
					<Col sm={6} md={3} >

						<a href="https://github.com/CoffeePoweredComputers/ProjectDwemer"  target="_blank"><Image src="assets/dwemer.jpg" responsive thumbnail className="profile-pic"/></a> 

					</Col>
					<Col sm={15} md={15} >
						<p>
							This project is an homage to one of the greatest games ever produced "The Elder Scrolls III: Morrowind". The project is a custom keyboard build using 3D printed and laser cut components for the main chassis, Cherry MX Blue switches, and a Teensy 2.0 microcontroller. The project is given the name Dwemer as they were the most technologically advanced civilization in the Elder Scrolls universe prior to their disappearance given their ability to breath life into machines. 						
						</p>
					</Col>	
				</Row>

				<Row>
				<h3>
					General Practice Questions
				</h3>
					<Col sm={6} md={3} >

						<a href="https://github.com/CoffeePoweredComputers/GeneralCodingProblems"  target="_blank"><Image src="assets/coding_guy.png" responsive thumbnail className="profile-pic"/></a> 

					</Col>
					<Col sm={15} md={15} >
						<p>
							This is my personal and evergrowing colletion of coding challenges I have completed. They are collectivly taken from GeeksForGeeks, L33tCode, as well as various YouTuve and MITOpenCourseware videos I have watched. Though they are by enlarge interview questions they still represent interesting brainteasers and interesting solutions to common problems that are nice to have in your back pocket.
						</p>
					</Col>	
				</Row>


			</Jumbotron>
		</Container>
		);
	}
}