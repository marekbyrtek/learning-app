import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { useHistory} from 'react-router-dom';

const User = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();

        logout();
        history.push("/login");
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        history.push("/login")
    }

    if (currentUser) {
        return (
            <div className="d-flex align-items-center">
                <p className="user-mail">Email: {currentUser.email}</p>
                <Button variant="outline-light" onClick={handleLogout}>Wyloguj się</Button>
            </div>
        )
    } else {
        return <Button variant="outline-light" onClick={handleLogIn}>Zaloguj się</Button>
    }
}

export default User;
