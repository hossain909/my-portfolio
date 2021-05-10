import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNav.css';
const MainNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle className="btn-toggler" style={{ backgroundColor: "#04f9a3", boxShadow: "#416345 0px 0px 31px 4px" }} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="link pr-4 text-light" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="link pr-4 text-light" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="link pr-4 text-light" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link className="link pr-4 text-light" as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link className="link pr-4 text-light" as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link className="link text-light" as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;