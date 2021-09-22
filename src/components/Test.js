import React from 'react';
import { Container } from 'react-bootstrap';
import CategoriesButtons from './CategoriesButtons';

const Test = () => {
    return (
        <Container className="d-flex align-items-center flex-column">
            <h1>Jesteś zalogowany</h1>
            <h2>Test</h2>
            <CategoriesButtons link="test" />
        </Container>
    )
}

export default Test;
