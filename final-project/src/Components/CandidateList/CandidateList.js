import { Button, List, Space } from "antd";
import { images } from "../../img/index";
import React, { useContext } from "react";
import { Container, Form, Row, Col, Card, } from "react-bootstrap";
import "./CandidateList.css"
import data from "./data";
import CandidateListItem from "./CandidateListItem";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../../Context/UserContext";

export default function CandidateList() {

    const {currentUser} = useContext(UserContext)

    return (
        <Container>
            <Form className="select-bar">
                <Row className="mt-3">
                    <Col sm={3} md={3} className="mt-3 mb-3 ms-3">
                        <select
                            className="sort"
                        >
                            <option value="defaults">-- Sắp xếp theo --</option>
                            <option value="createAt">Ngày ứng tuyển </option>
                        </select>
                    </Col>

                    <Col sm={3} md={3} className="mt-3 mb-3 " >
                        <select
                            className="sort"
                        >
                            <option value="defaults">-- Trạng thái --</option>
                            <option value="createAt">Xác nhận</option>
                            <option value="createAt">Từ chối </option>
                            <option value="createAt">Đang chờ </option>
                        </select>
                    </Col>

                    <Col sm={2} md={2}>
                        <button className="confirm mt-3 mb-3 ms-2"> <CiSearch /></button>
                    </Col>
                    <Col sm={4} md={4} ></Col>
                </Row>
            </Form>

            <Row>
                <Col sm={9} md={9}>
                    <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>

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