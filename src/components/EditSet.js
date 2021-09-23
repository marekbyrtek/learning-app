import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Table } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DeleteButton from "./DeleteButton";
import AddWord from "./AddWord";

const EditSet = () => {
    const { set } = useParams();
    const [list, setList] = useState(null);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);
        console.log(dbRef)
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setList(snapshot.val());
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [counter])

    const handleSet = (e) => {
        e.preventDefault();
        setCounter(prev => prev + 1);
    }

    if (list === null) {
        return <h1>Wczytywanie danych</h1>
    } else if (Object.keys(list).indexOf(set) !== -1) {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Słowo</th>
                            <th>Definicja</th>
                            <th>Komentarz</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(list[set]).map(([key, value], i) => {
                            return (
                                <tr key={key}>
                                    <td>{i + 1}</td>
                                    <td>{value.word}</td>
                                    <td>{value.definition}</td>
                                    <td>{value.comment}</td>
                                    <td>{<DeleteButton />}</td>
                                </tr>
                            )
                        })}
                        {<AddWord set={set} reload={handleSet} />}
                    </tbody>
                </Table>
                <Button onClick={handleSet}>Odśwież</Button>
            </>
        )
    } else {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Słowo</th>
                            <th>Definicja</th>
                            <th>Komentarz</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {<AddWord set={set} />}
                    </tbody>
                </Table>
                <Button onClick={handleSet}>Odśwież</Button>
            </>
        )
    }
}

export default EditSet;
