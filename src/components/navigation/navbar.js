import React from "react";
import {Link} from 'react-router-dom'
import { QuestionCircle, PersonCircle } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/logo2.png'
import '../stylesheets/landingNav.css'

function navbar() {
    return (
        
        <>    
        <Navbar expand="md" variant="dark" className="navigation-bar">
            <Navbar.Brand href="/" className="navigation-bar-logo">
                <img src={Logo} height="75px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link className="navtop-link">
                        <Link to="/dashboard">My Profile</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navtop-link">
                        <Link to="/marketplace">MarketPlace</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navtop-link">
                        <Link to="/">LogOut</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
        
    )
}

export default navbar
