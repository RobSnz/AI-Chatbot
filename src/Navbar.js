import React from 'react';
import './components/Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Westbourne</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Selection">Selection</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link style={{position: 'absolute', right: 180}} href="/Profile">Profile</Nav.Link>
                    <Nav.Link style={{position: 'absolute', right: 100}} href="/SignIn">Sign In</Nav.Link>
                    <Nav.Link style={{position: 'absolute', right: 20}} href="/Register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);