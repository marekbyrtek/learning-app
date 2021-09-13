import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState (false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Hasła się nie zgadzają");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/login");
        } catch {
            setError("Nie można stworzyć konta");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Zarejestruj się</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="password-confirm">
                            <Form.Label>Potwierdź hasło</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} variant="outline-primary" className="w-100" type="submit">
                            Zarejestruj się
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w=100 text-center mt-2">
                Masz już konto? <Link to="/login">Zaloguj się</Link>
            </div>
        </>
    )
}

export default SignUp;