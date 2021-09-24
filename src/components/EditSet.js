import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DeleteButton from "./DeleteButton";
import AddWord from "./AddWord";

const EditSet = () => {
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
    })

    if (list === null || Object.keys(list).indexOf(set) === -1) {
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
            </>)
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
                        {<AddWord set={set} />}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default EditSet;
