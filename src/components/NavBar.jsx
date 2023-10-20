import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='navy'>
					<div className="nav-title">
						<Navbar.Brand href="#" >WORLD MOVIE</Navbar.Brand>
					</div>
					<div className='options'>
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
					</div>
      </Navbar>
    );
}

export default NavBar;
