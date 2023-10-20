import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
			<div>
        <Navbar bg="dark" data-bs-theme="dark" className='navy'>
					<div className="nav-title">
						<Navbar.Brand href="#" >WORLD MOVIE</Navbar.Brand>
					</div>
					<div className='options'>
						<Nav className="me-auto">
							<Nav>
								<Link to="/">Home</Link>
							</Nav>
							<Nav>
								<Link to="/Actors">Actors</Link>
							</Nav>
							<Nav>
								<Link to="/User">User</Link>
							</Nav>
						</Nav>
					</div>
      	</Navbar>
				<Outlet></Outlet>
			</div>
    );
}

export default NavBar;
