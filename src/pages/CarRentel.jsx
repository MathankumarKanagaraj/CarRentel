import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const CarRentalUI = () => {
    return (
        <Container fluid className="vh-100 d-flex p-3 background-image">
            <Col  className="bg-light p-4" >
                <Button variant="warning" className="w-100 mb-4 fw-bold">BOOK</Button>
                
                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-dark me-2">1</span>
                        <h5 className="mb-0">PICK-UP LOCATION:</h5>
                    </div>
                    <Form.Select aria-label="Select a city" className="mb-2">
                        <option>- Select a city -</option>
                    </Form.Select>
                    <Form.Check 
                        type="checkbox" 
                        label="Return car to a different location" 
                    />
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-dark me-2">2</span>
                        <h5 className="mb-0">PICK-UP DATE:</h5>
                    </div>
                    <Form.Control type="date" placeholder="Pick Up Date" className="mb-2" />
                    <h5 className="mt-3">RETURN DATE:</h5>
                    <Form.Control type="date" placeholder="Return Date" className="mb-2" />
                </div>

                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-dark me-2">3</span>
                        <h5 className="mb-0">CHOOSE CAR TYPE:</h5>
                    </div>
                    <Form.Select aria-label="Select car type">
                        <option>- Select -</option>
                    </Form.Select>
                </div>
            </Col>

           
            <Col md={8} lg={9} className="d-flex justify-content-center align-items-center bg-image" style={{ backgroundImage: 'url("https://path-to-your-background-image.jpg")', backgroundSize: 'cover' }}>
                <div className="text-center text-dark">
                    <h1 className="display-4 fw-bold">YOUR RELIABLE CAR RENTAL SERVICE</h1>
                    <p className="lead">GET TO WHERE YOU WANT TO GO!</p>
                </div>
            </Col>
        </Container>
    );
};

export default CarRentalUI;
