import { Button, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillFilePostFill } from "react-icons/bs";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../src/animationJson/79794-world-locations.json";
import ListJobs from "./ListJobs/ListJobs";

export default function HomeJobs({ jobHomePage, pageHomeJob, getJobHomePage }) {
  const { user } = useSelector((state) => state.auths);
  const [complete, setComplete] = useState(false);
  const [params, setParams] = useSearchParams();
  const { currentUser } = useContext(UserContext);

  console.log(pageHomeJob);
  setTimeout(() => {
    setComplete(true);
  }, 2500);
  useEffect(() => {
    const page = params.get("page");
    getJobHomePage("", page);
  }, [params]);
  useEffect(()=>{
    setParamsKey("page","1")
    const page = params.get("page");
    getJobHomePage("", page);
  },[])
  const setParamsKey = (key, value) => {
    // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };
  return (
    <div className="home-jobs">
      <Row className="row-home-jobs">
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
        <Col sm={12} md={12} className="col-list-job">
          {!complete ? (
            <div className="loading-job">
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation-home"
              ></Lottie>
            </div>
          ) : (
            <ListJobs jobHomePage={jobHomePage} />
          )}
        </Col>
      </Row>
      <div className="pagi-homepage">
        <Pagination
          defaultCurrent={1 * 10}
          total={pageHomeJob * 10}
          onChange={(page) => setParamsKey("page", page)}
        ></Pagination>
      </div>
    </div>
  );
}
