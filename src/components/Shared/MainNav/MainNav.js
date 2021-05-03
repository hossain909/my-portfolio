import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-4" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="mr-4" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="mr-4" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link className="mr-4" as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link className="mr-4" as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;