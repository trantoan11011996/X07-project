import { Button, List, Space } from "antd";
import { images } from "../../img/index";
import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import "./CandidateList.css";

import CandidateListItem from "./CandidateListItem";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../../Context/UserContext";
import { useParams } from "react-router";
import { JobContext } from "../../Context/JobContext";

export default function CandidateList() {
  const { getCandidateList, listRecruimentCv, SetlistRecruimentCv } =
    useContext(UserContext);
  const { filterCV, confirmCV } = useContext(JobContext);

  const { id } = useParams();
  const [filterValue, setFilterValue] = useState("");
  const [statusCv, setStatusCv] = useState("");
  const token = localStorage.getItem("token");
  const userToken = JSON.parse(token);

  console.log('list',listRecruimentCv);
  useEffect(()=>{
    getCandidateList(id,userToken)
  },[id,userToken])
  useEffect(() => {
    getCandidateList(id, userToken);
  }, [statusCv]);
  const handleFilter = (event) => {
    event.preventDefault();

    if (
      filterValue == "accepted" ||
      filterValue == "denied" ||
      filterValue == "pending"
    ) {
      const filterData = async () => {
        const filter = await filterCV(id, filterValue, userToken);
        SetlistRecruimentCv(filter);
      };
      filterData();
    } else {
      getCandidateList(id, userToken);
    }
  };
  const handleValue = (event, idCv) => {
    confirmCV(event.target.value, idCv, userToken);
    setStatusCv(event.target.value);
    getCandidateList(id, userToken);
  };
  
  return (
    <Container>
      <Form>
        <Row className="select-bar">
          <Col sm={3} md={3} className="mt-3 mb-3 ms-3">
            <select className="sort">
              <option value="defaults">-- Sắp xếp theo --</option>
              <option value="createAt">Ngày ứng tuyển </option>
            </select>
          </Col>

          <Col sm={3} md={3} className="mt-3 mb-3 ">
            <select
              className="sort"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="defaults">-- Trạng thái --</option>
              <option value="accepted">Đã xác nhận</option>
              <option value="denied">Đã từ chối </option>
              <option value="pending">Đang chờ </option>
            </select>
          </Col>

          <Col sm={2} md={2}>
            <button className="confirm mt-3 mb-3 ms-2">
              {" "}
              <CiSearch onClick={(event) => handleFilter(event)} />
            </button>
          </Col>
          <Col sm={4} md={4}></Col>
        </Row>
      </Form>

      <Row>
        <Col sm={9} md={9}>
          <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>

          {listRecruimentCv?.length == 0 ? (
            <p className="m-2 p-2"> Chưa có ứng viên nộp đơn</p>
          ) : (
            <List
              pagination={{
                pageSize: 10,
              }}
              dataSource={listRecruimentCv}
              renderItem={(item) => (
                <CandidateListItem
                  data={item}
                  handleValue={handleValue}
                />
              )}
            ></List>
          )}
        </Col>

        <Col>
          <img className="list-banner mb-3 mt-3" src={images.banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
