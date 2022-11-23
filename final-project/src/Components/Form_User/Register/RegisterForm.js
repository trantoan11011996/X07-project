import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";


export default function RegisterForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();


        // const user = {
        //     email: email,
        //     password: password,
        //     userRole: role
        // }

        // console.log(user);
    }

    return (
        <Container>
            <Row>
                <Col sm={3} md={3} ></Col>

                <Col sm={6} md={6} >

                    <Card className="text-center">
                        <Card.Header> <h1> Register </h1> </Card.Header>

                        <Card.Body>
                            <Form className="m-3" onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Row>
                                        <Form.Label /> Email
                                        <Form.Control type="email" onChange={(event) => setEmail(event.target.value)}/>
                                    </Row>

                                    <Row>
                                        <Form.Label /> Password
                                        <Form.Control type="Password" onChange={(event) => setPassword(event.target.value)}/>
                                    </Row>

                                    <Row>
                                        <Form.Label /> Confirm Password
                                        <Form.Control type="password" onChange={(event) => setConfirm(event.target.value)} />
                                    </Row>

                                    <Row>
                                        <Col sm={7} md={7}>
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="m-3">
                                                    <Form.Check
                                                        inline
                                                        label="candidate"
                                                        value="candidate"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        onChange={(event) => setRole(event.target.value)}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="recruiter"
                                                        value="recruiter"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        onChange={(event) => setRole(event.target.value)}
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
                                            <Button variant="outline-primary" type="submit"> Register </Button>
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