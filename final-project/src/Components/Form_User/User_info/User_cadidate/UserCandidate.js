import React, { useState } from "react";
import { Card, Row, Col, Container, Form, Dropdown, DropdownButton, Button } from "react-bootstrap";


export default function UserCandidate() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [career, setCareer] = useState('');

    const handleClick = (event) => {
        event.preventDefault();


        // const user = {
        //    name: name,
        //    gender: gender,
        //    age: age,
        //    phone: phone,
        //    address: address,
        //    career: career
        // }

        // console.log(user);
    }

    return (
        <Container>
            <Row>
                <Col sm={3} md={3} ></Col>

                <Col sm={6} md={6} >
                    <Form className="m-3 p-5 text-start border shadow-ms">
                        <Form.Group>
                            <h1 className="mt-3 text-center"> Candidate's Information </h1>
                            <Row>
                                <Col sm={5} md={5}>
                                    <Row className="text-start">
                                        <Form.Label/> <b>Full Name</b>
                                        <Form.Control className="ms-2" type="text" onChange={(event) => setName(event.target.value)} />
                                    </Row>
                                </Col>

                                <Col sm={6} md={6}>
                                    <Row className="ms-1">
                                        <Form.Label /> <b> Gender</b>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="m-2">
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    value="Male"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                    onChange={(event) => setGender(event.target.value)}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    value="Female"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    onChange={(event) => setGender(event.target.value)}
                                                />
                                            </div>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={5} md={5} className="me-2">
                                    <Row className="text-start">
                                        <Form.Label /> <b> Age </b>
                                        <Form.Control className="ms-2" type="number" min={0} max={100} onChange={(event) => setAge(event.target.value)} />
                                    </Row>
                                </Col>

                                <Col sm={6} md={6}>
                                    <Row className="ms-1">
                                        <Form.Label/> <b> Phone Number </b>
                                        <Form.Control className="ms-2" type="text" onChange={(event) => setPhone(event.target.value)} />
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Label /> <b> Address </b>
                                <Form.Control className="ms-2" type="text" onChange={(event) => setAddress(event.target.value)} />
                            </Row>

                            <Row>
                                <Form.Label /> <b>Career</b>
                                <Form.Select className="ms-2" onChange={(event) => setCareer(event.target.value)}>
                                    <option></option>
                                    <option value="Dev"> Dev</option>
                                    <option value="Tester"> Tester</option>
                                </Form.Select>
                            </Row>

                            <Row className="m-3">
                                <Col sm={3} md={3}> </Col>
                                <Col sm={3} md={3}>
                                    <Button variant="outline-primary" onClick={handleClick}> Register </Button>
                                </Col>
                                <Col>
                                    <Button variant="light"> Cancel </Button>
                                </Col>
                            </Row>

                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={3} md={3} ></Col>
            </Row>
        </Container>
    )
}