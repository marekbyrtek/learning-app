import React from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { useHistory} from 'react-router-dom';

const Learning = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();

        logout();
        history.push("/login");
    }

    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Learning app</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/sets">Twoje zestawy</Nav.Link>
                        <Nav.Link href="/test">Test</Nav.Link>
                        <Nav.Link href="/learning">Nauka</Nav.Link>
                    </Nav>
                    <p>Email: {currentUser.email}</p>
                    <Button variant="outline-light" onClick={handleLogout}>Wyloguj się</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Learning;
