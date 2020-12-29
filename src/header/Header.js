import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import { useAppContext } from '../lib/contextLib';


function Header( {location }) {

    const { isAuthenticated, userHasAuthenticated } = useAppContext();
    
    function handleLogout() {
        userHasAuthenticated(false);
    }

    return (

        <Navbar className="Navbar-principal" collapseOnSelect bg="light" expand="lg" fixed="top" variant="light">
            <Navbar.Brand className="brand" href="/home">Sígueme</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Inicio</Nav.Link>
                    <Nav.Link href="/about">¿Quienes somos?</Nav.Link>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    { isAuthenticated ? (
                        <Nav.Link href="/home" onClick={handleLogout}>Cerrar sesión</Nav.Link>
                    ) : (
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                    )
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;