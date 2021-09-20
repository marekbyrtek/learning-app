import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const CategoriesButtons = () => {
    const [list, setList] = useState(null);
    
    useEffect(() => {
        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);

        get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setList(Object.keys(snapshot.val()));
            } else {
            console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    if (list === null) {
        return <h1>Wczytuję dane</h1>
    } else {
        return (
            <>
                {list.map((el, i) => {
                    return <Button variant="outline-primary" key={i} as={Link} to={`/${el}`} className="mt-3 d-flex justify-content-center align-items-center" style={{width: "200px", minHeight: "50px"}}>{el}</Button>
                })}
            </>
        )
    }
}

export default CategoriesButtons;
