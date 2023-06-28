import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App(){
    return(
        <div>
            <h1>Hello</h1>
            <button className="btn btn-danger">This is a button!</button>
            <Container>
                I'm inside a React Bootstrap container right now!!!
                <Button className="btn-warning">
                    I'm in a React Bootstrap button!
                </Button>
            </Container>
            <Container>
                <Row className="mb-4">
                    <Col>Column 1</Col>
                    <Col>Column 2</Col>
                    <Col>Column 3</Col>
                </Row>
                <Row className="mb-4">
                    <Col>Column 1</Col>
                    <Col>Column 2</Col>
                    <Col>Column 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;