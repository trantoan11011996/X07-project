import { Button, List, Space } from "antd";
import { images } from "../../img/index";
import React from "react";
import { Container, Form, Row, Col, Card, } from "react-bootstrap";
import "./CandidateList.css"
import data from "./data";
import CandidateListItem from "./CandidateListItem";

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
                <Col sm={9} md={9}>
                    <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>
                    <p> số lượng tin: {data.length}</p>

                    <List
                        pagination={{
                            pageSize: 10,
                        }}
                        dataSource={data}
                        renderItem={(item => <CandidateListItem data={item} />)}
                    >
                    </List>
                </Col>

                <Col>
                    <img className="banner mb-3 mt-3" src={images.banner} alt="" />
                </Col>
            </Row>
        </Container>
    )
}