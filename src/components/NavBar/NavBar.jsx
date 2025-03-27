import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          David H Smith IV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/research">Research</Nav.Link>
            <Nav.Link as={Link} to="/teaching">Teaching</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/cv">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

