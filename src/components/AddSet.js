import React, { useRef } from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const AddSet = () => {
    const catRef = useRef();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/sets/${catRef.current.value}`);
    }

    return (
        <Popup trigger={<Button variant="success" className="mt-3 d-flex justify-content-center align-items-center" style={{width: "200px", minHeight: "50px"}}>Dodaj zestaw</Button>} modal>
            <InputGroup className="mb-3">
                <FormControl type="text" ref={catRef} required />
                <Button variant="outline-success" onClick={handleClick}>Dodaj</Button>
            </InputGroup>
        </Popup>
    )
}

export default AddSet;
