import React, { useState } from "react";
import { Container, Card, Col, Row, Form, Button } from "react-bootstrap";

export default function UserRecruiter() {

    const [company, setCompany] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [career, setCareer] = useState('');
    const [description, setDescription] = useState('');

    const handleClick = (event) => {
        event.preventDefault();


        // const user = {
        //    company: company,
        //    website: website,
        //    email: email,
        //    phone: phone,
        //    address: address,
        //    career: career,
        //    description: description
        // }

        // console.log(user);
    }

    return (
        <Container>
            <Row>
                <Col sm={3} md={3}></Col>

                <Col sm={6} md={6}>
                    <Form className="m-3 p-5 text-start border shadow-ms">
                        <Form.Group>
                            <h1 className="mt-3 text-center"> Recruiter's Information</h1>
                            <Row>
                                <Form.Label /> <b> Company </b>
                                <Form.Control className="ms-2 " type="text" onChange={(event) => setCompany(event.target.value)} />
                            </Row>

                            <Row>
                                <Form.Label /> <b> Website </b>
                                <Form.Control className="ms-2" type="text" onChange={(event) => setWebsite(event.target.value)} />
                            </Row>

                            <Row className="mt-1">
                                <Col sm={5} md={5}>
                                    <Row className="text-start">
                                        <Form.Label /> <b> Email </b>
                                        <Form.Control className="ms-2" type="email" onChange={(event) => setEmail(event.target.value)} />
                                    </Row>
                                </Col>

                                <Col sm={6} md={6}>
                                    <Row className="ms-1">
                                        <Form.Label /> <b> Phone Number </b>
                                        <Form.Control className="ms-2" type="text" onChange={(event) => setPhone(event.target.value)} />
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Label /> <b> Address </b>
                                <Form.Control className="ms-2" type="text" onChange={(event) => setAddress(event.target.value)} />
                            </Row>

                            <Row>
                                <Form.Label /> <b> Career </b>
                                <Form.Select className="ms-2" onChange={(event) => setCareer(event.target.value)}>
                                    <option></option>
                                    <option value="Dev"> Dev</option>
                                    <option value="Tester"> Tester</option>
                                </Form.Select>
                            </Row>

                            <Row>
                                <Form.Label /> <b> Description </b>
                                <Form.Control className="ms-2" as="textarea" rows={3} onChange={(event) => setDescription(event.target.value)} />
                            </Row>

                            <Row className="m-3">
                                <Col sm={3} md={3}> </Col>
                                <Col sm={3} md={3}>
                                    <Button variant="outline-primary" onClick={handleClick}> Register </Button>
                                </Col>
                                <Col sm={3} md={3}>
                                    <Button variant="light"> Cancel </Button>
                                </Col>
                            </Row>

                        </Form.Group>
                    </Form>
                </Col>

                <Col sm={3} md={3}></Col>
            </Row>
        </Container>
    )
}