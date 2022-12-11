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
  
  return (
    <Container className="home-jobs">
      <Row>
        <Col sm={12} md={12}>
          <Row className="navigate-header text-start m-3">
            {(user?.role || currentUser?.role) == "candidate" && (
              <>
                <Row className="job-navigate-container">
                  <Col sm={2} md={2} className="homejob-title">
                    <h1 className="homejob-title-header">Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
                  
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

                  <Col sm={2} md={4}>
                    <Link className="homejob-title homejob-title-link">
                      Công việc đã ứng tuyển <span></span>
                    </Link>
                  </Col>
                </Row>
              </>
            )}

            {(user?.role || currentUser?.role) == "recruiter" && (
              <>
                <Row className="job-navigate-container">
                  <Col sm={2} md={2} className="homejob-title">
                    <h1 className="homejob-title-header">Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
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

                  <Col sm={2} md={2}>
                    <Link className="homejob-title homejob-title-link"
                      to={"/availablerecruitment"}
                    >
                      Tin đã đăng <span></span>
                    </Link>
                  </Col>

                  <Col sm={2} md={4}>
                    <Link
                      to={"/upload"}
                      className="homejob-title homejob-title-link"
                    >
                      Đăng tin tuyển dụng{" "}
                      <span>
                        <BsFillFilePostFill></BsFillFilePostFill>
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
                    sm={2}
                    md={2}
                    className="homejob-title homejob-title-header"
                  >
                    <h1>Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
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
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col>
          <ListJobs jobHomePage = {jobHomePage}/>
        </Col>
      </Row>
    </Container>
  );
}
