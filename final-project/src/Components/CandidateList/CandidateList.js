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
import Lottie from "lottie-react";
import loadingAnimation from "../../animationJson/loading-animation.json";
import { useSearchParams } from "react-router-dom";
export default function CandidateList() {
  const { getCV, confirmCV,listRecruimentCv } = useContext(JobContext);

  const { id } = useParams();
  const [filterValue, setFilterValue] = useState("");
  const [statusCv, setStatusCv] = useState("");
  const [complete, setComplete] = useState(false);
  const [params, setParams] = useSearchParams();

  const setParamKey = (key, value) => {
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };
  const token = localStorage.getItem("token");
  const userToken = JSON.parse(token);

  useEffect(() => {
    getCV(id,"", userToken);
  }, [id, userToken]);
  useEffect(() => {
    getCV(id, "",userToken);
  }, [statusCv]);

  const handleValue = (event, idCv) => {
    confirmCV(event.target.value, idCv, userToken);
    setStatusCv(event.target.value);
    getCV(id, "",userToken);
  };
  setTimeout(() => {
    setComplete(true);
  }, 2500);

  useEffect(() => {
    const getFilterCv = async()=>{
      const getlocalToken = JSON.parse(localStorage.getItem("token"));
      const status = params.get("status");
      console.log('status',status);
      const filter = await getCV(id, status, getlocalToken);
      console.log("filter",filter);
    }
    getFilterCv()
  }, [params]);

  useEffect(() => {
    getCV(id,"", userToken)
  }, [statusCv])
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
              onChange={(e) => setParamKey("status",e.target.value)}
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
              <CiSearch  />
            </button>
          </Col>
          <Col sm={4} md={4}></Col>
        </Row>
      </Form>

      <Row>
        <Col sm={9} md={9}>
          <h1 className="list-title mt-3 mb-1"> Danh sách ứng viên</h1>
          {!complete ? (
            <div className="loading-job">
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation-list-cv"
              ></Lottie>
            </div>
          ) : (
            <>
              {listRecruimentCv?.length == 0 ? (
                <></>
              ) : (
                <List
                  pagination={{
                    pageSize: 10,
                  }}
                  dataSource={listRecruimentCv}
                  renderItem={(item) => (
                    <CandidateListItem data={item} handleValue={handleValue} />
                  )}
                ></List>
              )}
            </>
          )}
        </Col>

        <Col>
          <img className="list-banner mb-3 mt-3" src={images.banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
