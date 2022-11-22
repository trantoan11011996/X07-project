import React from "react";
import { Container, Card, Col, Row, Form, Button } from "react-bootstrap";

export default function UserRecruiter() {

    return (
        <Container>
            <Row>
                <Col sm={3} md={3}></Col>

                <Col sm={6} md={6}>
                    <Card className="text-center">
                        <Card.Header>  <h1> Cập nhật thông tin nhà tuyển dụng</h1> </Card.Header>

                        <Card.Body>
                            <Form className="m-3">
                                <Form.Group>
                                    <Row>
                                        <Form.Label /> Company
                                        <Form.Control type="text" />
                                    </Row>

                                    <Row>
                                        <Form.Label /> Website
                                        <Form.Control type="text" />
                                    </Row>

                                    <Row className="mt-1">
                                        <Col sm={5} md={5} className="me-2">
                                            <Row className="text-start">
                                                <Form.Label> Email</Form.Label>
                                                <Form.Control type="email" />
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

                                    <Row>
                                        <Form.Label/> Description
                                        <Form.Control as="textarea" rows={3}  />
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

                <Col sm={3} md={3}></Col>
            </Row>
        </Container>
    )
}