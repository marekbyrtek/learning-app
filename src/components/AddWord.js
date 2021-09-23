import React, { useRef, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";

const AddWord = (set, reload) => {
    const wordRef = useRef();
    const definitionRef = useRef();
    const commentRef = useRef();
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
            know: false
        };

        try {
            setError("");
            setLoading(true);
            push(ref(database, `users/${userId}/${Object.values(set)[0]}`), newWord);
        } catch {
            setError("Nie można dodać słówka");
        }
        setLoading(false);
        wordRef.current.value="";
        definitionRef.current.value="";
        commentRef.current.value="";
    }

    return (
        <tr>
            <td>{error && <Alert variant="danger">{error}</Alert>}</td>
            <td>{<Form.Control type="text" ref={wordRef} required />}</td>
            <td>{<Form.Control type="text" ref={definitionRef} required />}</td>
            <td>{<Form.Control type="text" ref={commentRef} required />}</td>
            <td>{<Button variant="success" type="submit" disabled={loading} onClick={handleSubmit}>Dodaj</Button>}</td>
        </tr>
    )
}

export default AddWord;
