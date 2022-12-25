import { Button } from "antd";
import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillFilePostFill } from "react-icons/bs";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import Lottie from "lottie-react"
import loadingAnimation from "../../../../src/animationJson/79794-world-locations.json"
import ListJobs from "./ListJobs/ListJobs";

export default function HomeJobs({ jobHomePage }) {
  const { user } = useSelector((state) => state.auths);
  const [complete, setComplete] = useState(false);
  const { currentUser} =
    useContext(UserContext);
  setTimeout(()=>{
    setComplete(true)
  },2500);
  return (
    <Container className="home-jobs">
      <Row>
        <Col sm={12} md={12}>
          <Row className="navigate-header text-start m-3">
                <Row className="job-navigate-container">
                  <Col sm={12} md={2} className="homejob-title">
                    <h1 className="homejob-title-header">Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={12} md={8} className="all-job-navigate">
                    <Link
                      to={"/allJob"}
                      className="homejob-title homejob-title-link"
                    >
                      Xem tất cả{" "}
                      <span>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </span>
                    </Link>
                  </Col>
                </Row>
          </Row>
        </Col>
        <Col sm={12} md={12}>
          {!complete ? (
            <div className="loading-job">
                <Lottie animationData={loadingAnimation} className="loading-animation-home"></Lottie>
            </div>
          ) :  <ListJobs jobHomePage={jobHomePage} />}
        </Col>
      </Row>
    </Container>
  );
}
