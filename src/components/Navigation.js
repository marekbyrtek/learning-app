import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from './User';

const Navigation = () => {
    return (
        <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Learning app</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/sets">Twoje zestawy</Nav.Link>
                        <Nav.Link as={Link} to="/test">Test</Nav.Link>
                        <Nav.Link as={Link} to="/learning">Nauka</Nav.Link>
                    </Nav>
                    <User />
                </Container>
            </Navbar>
    )
}

export default Navigation;
