import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css"

export default class NavBar extends Component {
	render() {
		return (

			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<div class="navbar-brand-style navbar-content"></div>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} componentClass={Link} href="/" to='/'> Home </NavItem>
						<NavItem eventKey={3} componentClass={Link} href="/publications" to='/publications'> Publications </NavItem>
						<NavItem eventKey={2} componentClass={Link} href="/blog" to='/blog'> Blog </NavItem>
						<NavItem eventKey={3} componentClass={Link} href="/cv" to='/cv'> Curriculum Vitae </NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar >
		);
	}
}

