import { Button } from "antd";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";


export default function RegisterForm() {

    return (
        <Container>
            <Row>
                <Col sm={3} md={3} ></Col>

                <Col sm={6} md={6} >

                    <Card className="text-center">
                        <Card.Header> <h1> Register </h1> </Card.Header>

                        <Card.Body>
                            <Form className="m-3">
                                <Form.Group>
                                    <Row>
                                        <Form.Label /> Email
                                        <Form.Control type="email" />
                                    </Row>

                                    <Row>
                                        <Form.Label /> Password
                                        <Form.Control type="Password" />
                                    </Row>

                                    <Row>
                                        <Form.Label /> Confirm Password
                                        <Form.Control type="password" />
                                    </Row>

                                    <Row>
                                        <Col sm={7} md={7}>
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="m-3">
                                                    <Form.Check
                                                        inline
                                                        label="Ứng viên"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Nhà tuyển dụng"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                </div>
                                            ))}
                                        </Col>

                                        <Col sm={3} md={3} className="m-3">
                                            <a> Have a account?</a>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Button variant="primary"> Register </Button>
                                        </Col>
                                    </Row>
                                    
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3} md={3} ></Col>
            </Row>
        </Container >
    )
}