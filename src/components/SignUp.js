import React, { useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap";

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Zarejestruj się</h2>
                    <Form>
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
                        <Button variant="outline-primary" className="w-100" type="submit">
                            Zarejestruj się
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w=100 text-center mt-2">
                Masz już konto? Zaloguj się
            </div>
        </>
    )
}

export default SignUp;