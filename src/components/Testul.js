import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Button } from 'react-bootstrap';

const Testul = () => {
    const [list, setList] = useState(null);
    const [counter, setCounter] = useState(1);
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        const database = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);
        console.log(dbRef)
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                console.log("dupa", snapshot.val())
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    // const obj = snapshot.val();
                    // const arr = [];
                    // for (let el in obj) {
                    //     arr.push(obj[el]);
                    // }
                    // setList(arr);
                    setCategories(snapshot.val());
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        // console.log(list);
    }, [counter])

    const handleClick = id => e => {
        console.log(id)
    }

    console.log(list);
    // if (list !== null) {
    //     setCategories(Object.keys(list));
    // }

    if (categories === null) {
        return (
            <Button onClick={() => setCounter((prev) => prev + 1)} className="mt-3">Klik</Button>
            // <ul>
            //     {list.map((el, i) => {
            //         return <li key={i}>{el}</li>
            //     })}
            // </ul>
        )
    } else {
        return (
            <>
            <Button onClick={() => setCounter((prev) => prev + 1)} className="mt-3">Klik 2</Button>
            <ul>
                {Object.keys(categories).map((el, i) => {
                    return <li key={i}>
                        <h2>{el}</h2>
                        {Object.entries(categories[el]).map(([key, value]) => (
                            <p onClick={handleClick(key)}>{value.word}</p>
                        ))}
                    </li>
                })}
            </ul>
            </>
            
        )
    }
}

export default Testul;
