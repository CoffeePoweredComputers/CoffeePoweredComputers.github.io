import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component{
	render(){
		return(
			<Grid>
				<Jumbotron>
					<h2>Welcome!</h2>
					<Row>
						<p>This website contains the various projects, musings, and intrests of me, an undergraduate computer science student at Western Washington University. Grab a cup of coffee and enjoy your stay. </p>
					</Row>
					<Row>
						<Col sm={15} >
							<h3>Column soon to contain blog posts</h3>
						</Col>
						<Col>
							<h3>Column soon to contain blog posts</h3>
						</Col>
					</Row>
					
				</Jumbotron>
			</Grid>
		);
	}
}