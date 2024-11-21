import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Container fluid className="bg-dark text-white vh-100 p-3 col-12">
            <h2 className="text-center mb-4 fw-bold">Car Rental</h2>
            <Nav className="flex-column">
                <Nav.Item className="mb-3">
                    <Link to="/home" className="nav-link text-white text-center">Home</Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Link to="/cars" className="nav-link text-white text-center">Cars</Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Link to="/service" className="nav-link text-white text-center">Service</Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Link to="/how-to-book" className="nav-link text-white text-center">How to Book</Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Link to="/about" className="nav-link text-white text-center">About</Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <Link to="/contact" className="nav-link text-white text-center">Contact</Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Sidebar;
