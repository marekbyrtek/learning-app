import React, { useState, useRef } from 'react';
import { Card, Form, Alert, Button } from "react-bootstrap";
import { getDatabase, ref, push } from "firebase/database"
import { getAuth } from "firebase/auth"

const Sets = () => {
    const wordRef = useRef();
    const definitionRef = useRef();
    const commentRef = useRef();
    const setRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const newWord = {
            word: wordRef.current.value,
            definition: definitionRef.current.value,
            comment: commentRef.current.value,
            set: setRef.current.value,
            know: false
        };

        try {
            setError("");
            setLoading(true);
            push(ref(database, `users/${userId}`), newWord);
        } catch {
            setError("Nie można się dodać zestawu");
        }
        setLoading(false);
        wordRef.current.value="";
        definitionRef.current.value="";
        commentRef.current.value="";
        setRef.current.value="";
    }

    return (
        <>
            <h1>Jesteś zalogowany</h1>
            <h2>Twoje zestawy</h2>
            <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dodaj nowe słowo</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="word">
                            <Form.Label>Słowo</Form.Label>
                            <Form.Control type="text" ref={wordRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="definition">
                            <Form.Label>Definicja</Form.Label>
                            <Form.Control type="text" ref={definitionRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="comment">
                            <Form.Label>Komentarz</Form.Label>
                            <Form.Control type="text" ref={commentRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="set">
                            <Form.Label>Zestaw</Form.Label>
                            <Form.Control type="text" ref={setRef} required />
                        </Form.Group>
                        <Button disabled={loading} variant="outline-primary" className="w-100" type="submit">
                            Dodaj słowo
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Sets;
