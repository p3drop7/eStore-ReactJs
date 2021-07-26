import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navMenu" >
            <Navbar.Brand as={Link} to="/" className="brand">Peter's Clothing Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <CartWidget />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/top">Tops</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/bottom">Bottoms</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/shoes">Shoes</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/accesory">Accesories</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar