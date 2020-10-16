import React, {useContext} from 'react';
import './components/Navbar.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AuthService from './Services/AuthService';
import {AuthContext} from './Context/AuthContext';

const Navigation = () => {
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return(
            <>
                <Nav.Link style={{position: 'absolute', right: 100}} href="/Login">Sign In</Nav.Link>
                <Nav.Link style={{position: 'absolute', right: 20}} href="/Register">Register</Nav.Link>
            </>
        )
    }
    
    const authenticatedNavBar = ()=>{
        return(
            <>
                <Nav.Link style={{position: 'absolute', right: 100}} href="/Profile">Profile</Nav.Link>
                <Button type="button" style={{backgroundColor: '#343a40', position: 'absolute', right: 20, border: 'none'}} 
                onClick={onClickLogoutHandler}>logout</Button>
            </>
        )
    }
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
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);