import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
        render() {
                return (
                        <Navbar default collapseOnSelect>
                                <Navbar.Collapse>
                                        <Nav pullRight>
                                                <Nav.Item eventKey={1} componentClass={Link} href="/" to='/'> Home </Nav.Item>
                                                <Nav.Item eventKey={2} componentClass={Link}  href="/projects" to='/projects'> Projects </Nav.Item>
                                                <Nav.Item eventKey={3} componentClass={Link}  href="/about" to='/about'> About </Nav.Item>
                                        </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                )
        }
}