import React from "react";
import { Card, Row, Col, Container, Form, Dropdown, DropdownButton, Button } from "react-bootstrap";


export default function UserCandidate() {

    return (
        <Container>
            <Row>
                <Col sm={3} md={3} ></Col>

                <Col sm={6} md={6} >
                    <Card className="text-center">
                        <Card.Header> <h1> Cập nhật thông tin người dùng</h1></Card.Header>
                        
                        <Card.Body>
                            <Form className="m-3">
                                <Form.Group>
                                    <Row>
                                        <Col sm={5} md={5}>
                                            <Row className="text-start">
                                                <Form.Label> Full Name</Form.Label>
                                                <Form.Control type="text" />
                                            </Row>
                                        </Col>

                                        <Col sm={6} md={6}>
                                            <Row className="text-start">
                                                <Form.Label> Gender </Form.Label>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="m-2">
                                                        <Form.Check
                                                            inline
                                                            label="Male"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Female"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                        />
                                                    </div>
                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={5} md={5} className="me-2">
                                            <Row className="text-start">
                                                <Form.Label> Age</Form.Label>
                                                <Form.Control type="number" min={0} max={100} />
                                            </Row>
                                        </Col>

                                        <Col sm={6} md={6}>
                                            <Row className="text-start">
                                                <Form.Label> Phone Number</Form.Label>
                                                <Form.Control type="text" />
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Form.Label/> Address
                                        <Form.Control type="text" />
                                    </Row>

                                    <Row>
                                        <Form.Label /> Lĩnh vực
                                        <Form.Select>
                                            <option></option>
                                            <option></option>
                                        </Form.Select>
                                    </Row>

                                    <Row className="m-3">
                                        <Col sm={3} md={3}> </Col>
                                        <Col sm={3} md={3}>
                                            <Button variant="outline-primary"> Register </Button>
                                        </Col>
                                        <Col sm={3} md={3}>
                                            <Button variant="light"> Cancel </Button>
                                        </Col>
                                    </Row>

                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3} md={3} ></Col>
            </Row>
        </Container>
    )
}