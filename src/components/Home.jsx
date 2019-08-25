import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import "./Home.css";

export default class Home extends Component {

	componentDidMount() {
		document.title = "David H Smith IV | Home";
	}

	render() {
		return (
			<Grid>
				<Jumbotron>
					<Row>
						<Col className="how-grid text-center" xs={14} sm={5} >
							<Image src="assets/prof.png" circle />
							<h3>
								David H Smith IV
							</h3>
							<p>
								<div className="sub"> Student at Western Washington University</div>
								<div className="sub"> CS Education Researcher</div>
								<div className="sub"> Linux & Coffee Enthusiast</div>
								<SocialIcon url="https://www.linkedin.com/in/david-smith-1b9499102/" style={{ height: 25, width: 25 }} bgColor='#000000' fgColor='#c0c0c0' />
								<SocialIcon url="https://github.com/CoffeePoweredComputers" style={{ height: 25, width: 25 }} bgColor='#000000' fgColor='#c0c0c0' />
							</p>

						</Col>
						<Col>
							<h3>Biography</h3>
						</Col>
						<Col className="text-left">

							<p> I am currently a student at Western Washington University completing my undergraduate degree in Computer Science. My primary area of research is in Computer Science education, an interdisciplinary field that involves knowledge of data mining, data visualization, pedagogies, educational psychology, and statistical analysis. </p>

							<p> My research has been primarily focused on factors related to student performance in CS1 and CS2 classes.  These include investigating social networks that form in online Q&A communities, formative feedback systems,  instructor-peer interactions, and the effectiveness of metrics evaluating student performance potential. In addition to this, I have also been involved in projects seeking to evaluate the overall state of Computing Education Research (CER) as it exists within the context of major conferences and journals. </p>

							<p> Outside of academics my hobbies include exploring the Pacific Northwest through hiking, swimming, camping, backpacking, and coffee. </p>
						</Col>
					</Row>
				</Jumbotron>
			</Grid>
		);
	}
}
