import React from 'react';
import { Container } from "react-bootstrap";
import CategoriesButtons from './CategoriesButtons';
import AddSet from './AddSet';

const Sets = () => {
    return (
        <Container className="d-flex align-items-center flex-column">
            <CategoriesButtons link="sets" />
            <AddSet />
        </Container>
    )
}

export default Sets;
