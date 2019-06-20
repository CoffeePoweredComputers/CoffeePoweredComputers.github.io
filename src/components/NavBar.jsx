import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css"

export default class NavBar extends Component {
	render() {
		return (

			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<div class="title-bar">
						<div class="coffee-mug"></div>
						<div class="navbar-brand-style navbar-content">	</div>
					</div>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} componentClass={Link} href="/" to='/'> Home </NavItem>
						<NavItem eventKey={2} componentClass={Link} href="/projects" to='/projects'> Projects </NavItem>
						<NavItem eventKey={3} componentClass={Link} href="/about" to='/about'> About </NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
