import React from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { useHistory, Link} from 'react-router-dom';

const Dashboard = () => {
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
                    <Navbar.Brand as={Link} to="/">Learning app</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/sets">Twoje zestawy</Nav.Link>
                        <Nav.Link as={Link} to="/test">Test</Nav.Link>
                        <Nav.Link as={Link} to="/learning">Nauka</Nav.Link>
                    </Nav>
                    <p>Email: {currentUser.email}</p>
                    <Button variant="outline-light" onClick={handleLogout}>Wyloguj się</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Dashboard;
