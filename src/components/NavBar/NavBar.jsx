import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-3" as="nav" role="navigation" aria-label="Main navigation">
      <Container>
        <Navbar.Brand as={Link} to="/">
          David H Smith IV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" aria-current={isActive("/") ? "page" : undefined}>Home</Nav.Link>
            <Nav.Link as={Link} to="/research" aria-current={isActive("/research") ? "page" : undefined}>Research</Nav.Link>
            <Nav.Link as={Link} to="/lab" aria-current={isActive("/lab") ? "page" : undefined}>Lab</Nav.Link>
            <Nav.Link as={Link} to="/teaching" aria-current={isActive("/teaching") ? "page" : undefined}>Teaching</Nav.Link>
            <Nav.Link as={Link} to="/blog" aria-current={isActive("/blog") ? "page" : undefined}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/cv" aria-current={isActive("/cv") ? "page" : undefined}>CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

