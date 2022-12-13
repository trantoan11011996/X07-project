import { Button } from "antd";
import React from "react";
import { Container, Form, Row, Col, Card, } from "react-bootstrap";
import "../CandidateList/CandidateList.css"
import data from "./data";

export default function CandidateList() {

    return (
        <Container>
            <Form>
                <Row>
                    <Col className="ms-3 mb-3 filter-bar">
                        <Form.Select>
                            <option>Ngày ứng tuyển</option>
                        </Form.Select>
                    </Col>

                    <Col className="ms-3 mb-3 filter-bar" >
                        <Form.Select>
                            <option> Trạng thái </option>
                        </Form.Select>
                    </Col>
                    <Col ></Col>
                </Row>
            </Form>

            <Row>
                <Col sm={8} md={8}>
                    <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>
                    <p> số lượng ứng viên: {data.length}</p>
                
                    {data.map(item => {
                        return (
                            <Card className="list-item mt-3 mb-3">
                                <Row>
                                    <Col sm={3} md={3}></Col>
                                    <Col className="p-2">
                                        <p className="mt-2"> Số thứ tự: {item.id}</p>
                                        <p className="mt-2"> Tên ứng viên: {item.name} </p>
                                        <p className="mt-2"> Ngày gởi yêu cầu: {item.creatAt}</p>
                                        <p className="mt-2"> File đính kèm:</p>
                                        <p className="mt-2"> Trạng thái yêu cầu:</p>
                                    </Col>
                                </Row>

                                <Row className="button-row mb-2">
                                    <Col sm={2} md={2}>
                                        <Button className="candiate-button ms-2">
                                            Xác nhận
                                        </Button>
                                    </Col>
                                    <Col sm={2} md={2}>
                                        <Button className="candiate-button">
                                            Từ chối
                                        </Button>
                                    </Col>
                                    <Col sm={2} md={2}>
                                        <Button className="candiate-button">
                                            Xem thông tin ứng viên
                                        </Button>
                                    </Col>
                                    <Col sm={6} md={6}></Col>
                                </Row>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}