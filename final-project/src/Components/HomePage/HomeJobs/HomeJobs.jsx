import { Button } from "antd";
import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillFilePostFill } from "react-icons/bs";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import ListJobs from "./ListJobs/ListJobs";

 
export default function HomeJobs({jobHomePage}) {
  const { user } = useSelector((state) => state.auths);
  const { currentUser } = useContext(UserContext);
    console.log('homepage',jobHomePage);
  return (
    <Container className="home-jobs">
      <Row>
        <Col sm={12} md={12}>
          <Row className="navigate-header text-start m-3">
            {(user?.role || currentUser?.role) == "candidate" && (
              <>
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
              </>
            )}

            {(user?.role || currentUser?.role) == "recruiter" && (
              <>
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
              </>
            )}

            {!user && !currentUser && (
              <>
                <Row className="job-navigate-container">
                  <Col
                    sm={12}
                    md={2}
                    className="homejob-title homejob-title-header"
                  >
                    <h1>Việc làm hấp dẫn</h1>
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
              </>
            )}
          </Row>
        </Col>
        <Col sm={12} md={12}>
          <ListJobs jobHomePage = {jobHomePage}/>
        </Col>
      </Row>
    </Container>
  );
}
