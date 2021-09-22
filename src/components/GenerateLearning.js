import React from "react";
import { useParams } from "react-router";

const GenerateLearning = () => {
    const { set } = useParams();
    
    return <h1>Nauka {set}</h1>
}

export default GenerateLearning;
