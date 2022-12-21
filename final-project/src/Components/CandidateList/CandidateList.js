import { Button, List, Space } from "antd";
import { images } from "../../img/index";
import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Row, Col, Card, } from "react-bootstrap";
import "./CandidateList.css"

import CandidateListItem from "./CandidateListItem";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../../Context/UserContext";
import { useParams } from "react-router";
import { JobContext } from "../../Context/JobContext";


export default function CandidateList() {

    const {getCandidateList} = useContext(UserContext)
    const {filterCV} = useContext(JobContext);

    const {id} = useParams();
    const [data, setData] = useState("");
    const [filterValue, setFilterValue ] = useState("");

    const token = localStorage.getItem('token');
    const userToken = JSON.parse(token)

    useEffect(() => {
        const listData = async () => {
           const listCandidate = await getCandidateList(id, userToken)
           setData(listCandidate)
        };
        listData()
    }, [id, userToken])

    const handleFilter = (event) => {
        event.preventDefault()

        if (filterValue == "accepted" || filterValue == "denied" || filterValue == "pending" ) {
            const filterData = async () => {
                const filter = await filterCV(id, filterValue, userToken);
                setData(filter);
            } 
            filterData();
        } else {
            const listData = async () => {
                const listCandidate = await getCandidateList(id, userToken);
                setData(listCandidate);
             };
             listData();
        }
    }
    return (
        <Container>
            <Form>
                <Row className="select-bar">
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
                            onChange={(e) => setFilterValue(e.target.value) }
                        >
                            <option value="defaults">-- Trạng thái --</option>
                            <option value="accepted">Đã xác nhận</option>
                            <option value="denied">Đã từ chối </option>
                            <option value="pending">Đang chờ </option>
                        </select>
                    </Col>

                    <Col sm={2} md={2}>
                        <button className="confirm mt-3 mb-3 ms-2"> <CiSearch onClick={(event) => handleFilter(event)} /></button>
                    </Col>
                    <Col sm={4} md={4} ></Col>
                </Row>
            </Form>

            <Row>
                <Col sm={9} md={9}>
                    <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>

                    { data.length == 0 
                    ? <p className="m-2 p-2"> Chưa có ứng viên nộp đơn</p>
                    : <List
                        pagination={{
                            pageSize: 10,
                        }}
                        dataSource={data}
                        renderItem={(item => <CandidateListItem data={item} />)}
                    >
                    </List>}
                  
                </Col>

                <Col>
                    <img className="list-banner mb-3 mt-3" src={images.banner} alt="" />
                </Col>
            </Row>
        </Container>
    )
}