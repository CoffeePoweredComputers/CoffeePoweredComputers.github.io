import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./Home.css";

export default class Projects extends Component {

	componentDidMount() {
		document.title = "David H Smith IV | Projects";
	}

	render() {
		return (
			<Grid>
				<Jumbotron>
					<Row>
						<h2>Projects</h2>
					</Row>
					<Row>

						<p>Below are my current ongoing projects. All these, and more, can be accessed at my personal GitHub <a href="https://github.com/CoffeePoweredComputers" target="_blank">here</a>. Project's individual GitHub pages can be accessed by clicking each projects icon.</p>
					</Row>

					<Row>
						<h3>
							This Website
						</h3>
						<Col sm={6} md={3} >

							<a href="https://github.com/CoffeePoweredComputers/" target="_blank"><Image src="assets/react-bootstrap.png" responsive thumbnail className="profile-pic" /></a>

						</Col>
						<Col className="text-left" md={15}>
							<p>
								This website is an ongoing project of mine being primarily implemented using <a href="https://react-bootstrap.github.io/" target="_blank">react-boostrap</a>. Currently this package only supports Bootstrap v3 with Boostrap v4 support currently under development.
							</p>
						</Col>
					</Row>

					<Row>
						<h3>
							Project Dwemer
				</h3>
						<Col sm={6} md={3} >

							<a href="https://github.com/CoffeePoweredComputers/ProjectDwemer" target="_blank"><Image src="assets/dwemer.jpg" responsive thumbnail className="profile-pic" /></a>

						</Col>
						<Col className="text-left" sm={15} md={15} >
							<p>
								The project is a custom keyboard build using 3D printed and laser cut components for the main chassis, Cherry MX Blue switches, and a Teensy 2.0 microcontroller.
						</p>
						</Col>
					</Row>

					<Row>
						<h3>
							Project Euler
				</h3>
						<Col sm={6} md={3} >

							<a href="https://github.com/CoffeePoweredComputers/ProjectEuler" target="_blank"><Image src="assets/eulers_number.jpg" responsive thumbnail className="profile-pic" /></a>

						</Col>
						<Col className="text-left" sm={15} md={15} >
							<p>
								I am in the process of working my way through the various problems presented on "Project Euler". All solutions can be found on my github and those that are particuarly interesting come with documentation on their solutions.
						</p>
						</Col>
					</Row>

				</Jumbotron>
			</Grid>
		);
	}
}