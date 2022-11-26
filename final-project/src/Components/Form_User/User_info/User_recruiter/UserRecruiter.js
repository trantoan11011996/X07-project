import React, { useState } from "react";
import { Container, Card, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isVietnamesePhoneNumberValid } from "../../../../utils/validate";
import "../User_recruiter/recruiter.css"

export default function UserRecruiter() {

    const [company, setCompany] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [career, setCareer] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate('');

    const handleClick = (event) => {
        event.preventDefault();

        if (!company || !website || !email || !phone || !address || !career || !description) {
            return alert("Hãy nhập đầy đủ thông tin ")
        } else if (!isEmail(email)) {
            return alert("Hãy nhập email đúng định dạng")
        } else if (!isVietnamesePhoneNumberValid(phone)) {
            return alert("Hãy nhập sdt Việt Nam")
        } else {
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
            navigate('/')
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={3} md={3}></Col>

                <Col className="container-recruiter" sm={6} md={6} >
                    <Form className="m-3 p-5 text-start border shadow-ms">
                        <Form.Group>
                            <h1 className="recruiter text-center"> Thông Tin Nhà Tuyển Dụng</h1>
                            <Row className="row-form">
                                <Form.Label /> <b> Công ty<span style={{color:'red'}}>*</span> </b>
                                <Form.Control className="input ms-2 " type="text" maxLength={100} onChange={(event) => setCompany(event.target.value)} />
                            </Row>

                            <Row className="row-form">
                                <Form.Label /> <b> Website<span style={{color:'red'}}>*</span> </b>
                                <Form.Control className="input ms-2" type="text" onChange={(event) => setWebsite(event.target.value)} />
                            </Row>

                            <Row className="mt-1">
                                <Col sm={6} md={6}>
                                    <Row className="text-start">
                                        <Form.Label /> <b> Email<span style={{color:'red'}}>*</span> </b>
                                        <Form.Control className="input ms-2" type="email" onChange={(event) => setEmail(event.target.value)} />
                                    </Row>
                                </Col>

                                <Col sm={6} md={6}>
                                    <Row className="ms-1">
                                        <Form.Label /> <b> Số điện thoại<span style={{color:'red'}}>*</span> </b>
                                        <Form.Control className="input ms-2" type="text" onChange={(event) => setPhone(event.target.value)} />
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="row-form">
                                <Form.Label /> <b> Địa chỉ<span style={{color:'red'}}>*</span> </b>
                                <Form.Control className="input ms-2" type="text" maxLength={200} onChange={(event) => setAddress(event.target.value)} />
                            </Row>

                            <Row className="row-form">
                                <Form.Label /> <b> Lĩnh vực<span style={{color:'red'}}>*</span> </b>
                                <Form.Select className="input ms-2" onChange={(event) => setCareer(event.target.value)}>
                                    <option></option>
                                    <option value="Dev"> Dev</option>
                                    <option value="Tester"> Tester</option>
                                </Form.Select>
                            </Row>

                            <Row className="row-form">
                                <Form.Label /> <b> Mô tả<span style={{color:'red'}}>*</span> </b>
                                <Form.Control className="input ms-2" as="textarea" rows={3} maxLength={1000} onChange={(event) => setDescription(event.target.value)} />
                            </Row>

                            <Row className="mt-5">
                                <Col sm={3} md={3}> </Col>
                                <Col sm={3} md={3}>
                                    <Button className="button" onClick={handleClick}> Đăng kí </Button>
                                </Col>
                                <Col sm={3} md={3}>
                                    <Link to={"/register"}>
                                        <Button variant="light"> Hủy bỏ </Button>
                                    </Link>
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