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
          <img class="cv-img" src="assets/cv.png" rounded />
        </Jumbotron>
      </Grid >
    );
  }
}