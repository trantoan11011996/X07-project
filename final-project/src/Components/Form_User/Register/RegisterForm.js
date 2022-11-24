import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { eye } from 'react-bootstrap-icons';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";





export default function RegisterForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email && (password == confirm)) {
            const user = {
                email: email,
                password: password,
                userRole: role
            }
            alert("Register successful")
            navigate("/")
        } else {
            alert("password and confirm password must be match")
        }

    }

    return (
        <Container>
            <Row>
                <Col sm={3} md={3} ></Col>

                <Col sm={6} md={6} >
                    <Form className="m-3 p-3 text-start border shadow-ms" onSubmit={handleSubmit}>
                        <Form.Group>
                        <h1 className="mt-3 text-center"> Register </h1>
                            <Row>
                                <Form.Label /> <b>Email</b>
                                <Form.Control className="ms-2" type="email" onChange={(event) => setEmail(event.target.value)} />
                            </Row>

                            <Row>
                                <Form.Label /> <b>Password</b>
                                <Form.Control className="ms-2" type="password" onChange={(event) => setPassword(event.target.value)} />
                            </Row>

                            <Row>
                                <Form.Label className="label-input" /> <b>Confirm Password</b>
                                <Form.Control className="ms-2" type="password" onChange={(event) => setConfirm(event.target.value)} />
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
                                <Col className="ms-2">
                                    <Button variant="danger" type="submit"> Register </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={3} md={3} ></Col>
            </Row>
        </Container >
    )
}