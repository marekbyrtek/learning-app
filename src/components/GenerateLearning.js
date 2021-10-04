import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Container } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

const GenerateLearning = () => {
    const { set } = useParams();
    const [list, setList] = useState(null);

    useEffect(() => {
        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setList(snapshot.val());
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [])

    if (list === null) {
        return null;
    } else {
        return (
            <Container className="d-flex align-items-center justify-content-center" style={{flexDirection: "column"}}>
                {Object.entries(list[set]).map(([key, value]) => {
                    return (
                    <Card className="learning-card" style={{ width: "30rem" }} key={key}>
                        <h1>{value.word}</h1>
                        <h2>{value.definition}</h2>
                        <div className="learning-card-buttons">
                            <Button>Poprzedni</Button>
                            <Button>Następny</Button>
                        </div>
                    </Card>
                    )
                })}
            </Container>
        )
    }   
}

export default GenerateLearning;
