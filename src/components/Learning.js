import React from 'react';
import { Container } from 'react-bootstrap';
import CategoriesButtons from './CategoriesButtons';

const Learning = () => {
    return (
        <Container className="d-flex align-items-center flex-column">
            <h1>Jesteś zalogowany</h1>
            <h2>Nauka</h2>
            <CategoriesButtons link="learning" />
        </Container>
    )
}

export default Learning;
