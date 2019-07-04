import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import "./cv.css";


export default class CV extends Component {
  render() {
    return (
      < Grid >
        <Jumbotron>
          <Image src="assets/cv.png" rounded />
        </Jumbotron>
      </Grid >
    );
  }
}