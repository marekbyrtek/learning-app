import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const TestButton = () => {
    const [words, setWords] = useState(null);

    const handleCheck = () => {
        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);
        
        get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setWords(snapshot.val());
              console.log(words);
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }

    return (
        <>
            <Button variant="danger" onClick={handleCheck} className="mt-3">Pobierz dane</Button>
        </>
            )
}

export default TestButton;
