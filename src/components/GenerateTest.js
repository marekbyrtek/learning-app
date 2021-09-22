import React from "react";
import { useParams } from "react-router";

const GenerateTest = () => {
    const { set } = useParams();

    return <h1>To jest kategoria {set}</h1>
}

export default GenerateTest;
