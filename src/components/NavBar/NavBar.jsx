import React, { Component } from 'react'
import { Nav, Navbar, NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg='dark' expand="md"> 
        <Navbar.Brand>
          David H Smith IV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link eventKey={1} componentClass={Link} href="#/" to='/'> Home </Nav.Link>
            <Nav.Link eventKey={2} componentClass={Link} href="#/publications" to='/publications'> Publications </Nav.Link>
            <Nav.Link eventKey={3} componentClass={Link} href="#/blog" to='/blog' > Blog </Nav.Link>
            <Nav.Link eventKey={4} componentClass={Link} href="#/cv" to='/cv'> Curriculum Vitae </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

