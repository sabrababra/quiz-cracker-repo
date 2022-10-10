import React from 'react';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Quiz Hut</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/statics">Statics</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;