import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./About.css";

export default class Home extends Component{
	render(){
		return(
			<Grid>
				<Jumbotron>
                <Row className="how-grid text-center">
					<Col xs={12} sm={4} >
						<Image src="assets/prof.png" circle />
						<h3>David H Smith IV</h3>                        
                        <p><div class="sub"> Student at Western Washington University. CS Education Researcher. Lover of Linux and Drinker of Coffee.</div></p>
					</Col>
                    <Col>
						<h3>Biography</h3>
						<p> I am currently a student at Western Washington University completeing my undergraduate degree in Computer Science. My primary area of research is in Computer Science education, an interdiciplinary field that involves knowledge of data mining, data visualization, educational pedagogies, educational psychology and statistical analysis.</p>
                        <p> Another issue that is of great importance to me is the democratization of information, technology, and computing in general. Open source and free software, specifically with regard to Linux distributions, are entirely responsible for providing a gateway to my current interest in computing. As such, I seek to follow in the footsteps of those who inspired me and likely countless others with regard to advancing both the quality and accessibility of various software solutions. A goal of mine is to contribute to the development of my favorite linux distribution, Arch Linux.</p>
                        <p> Outside of academics my hobbies include exploring the magnificant Pacific Northwest through hiking, swimming, camping, backpacking, calligraphy and, of course, consuming copious amounts of coffee in all its wonderful forms.</p>
					</Col>
				</Row>
                <Row>
                    <h3>Publications</h3>
                    <p2>Smith IV, D. H , Hao, Q. ,Jagodinzki F. , Gupta, V., Liu, Y. <i>"ACM Global Computing Education Conference 2019"</i></p2>

                </Row>
				</Jumbotron>
			</Grid>
		);
	}
}