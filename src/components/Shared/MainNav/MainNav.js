import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './MainNav.css';
const MainNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle className="ml-3 mb-3 btn-toggler"
          style={{ backgroundColor: "#04f9a3", boxShadow: "#416345 0px 0px 31px 4px" }}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-4">
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/">Home</NavLink>
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/about">About</NavLink>
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/projects">Projects</NavLink>
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/blogs">Blogs</NavLink>
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/resume">Resume</NavLink>
            <NavLink style={{ fontSize: "0.8rem", textDecoration: "none", color: "#a5a5a5" }} className="text-uppercase main-nav px-4 py-1" activeClassName="main-nav-active" as={Link} exact to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;