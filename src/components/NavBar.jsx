import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
			<div>
        <Navbar bg="dark" data-bs-theme="dark" className='navy'>
					<div className="nav-title">
						<Navbar.Brand href="#" className='title'><h1>WORLD MOVIE</h1></Navbar.Brand>
					</div>
					<div className='options'>
						<Nav className="me-auto">
							<Nav className='navbar-nav'>
								<Link className='nav-link' to="/">Home</Link>
							</Nav>
							<Nav className='navbar-nav'>
								<Link className='nav-link' to="/Actors">Actors</Link>
							</Nav>
							<Nav className='navbar-nav'>
								<Link className='nav-link' to="/User">User</Link>
							</Nav>
						</Nav>
					</div>
      	</Navbar>
				<Outlet></Outlet>
			</div>
    );
}

export default NavBar;
