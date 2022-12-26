import React, { useEffect, useState, useContext } from "react";

import styles from "./JobCandidateApplication.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link, useSearchParams } from "react-router-dom";
import HomeCategory from "../HomePage/HomeCategory/HomeCategory";
import { images } from "../../img/index";
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { JobContext } from "../../Context/JobContext";
import ApplicationList from "./ApplicationList";

const cx = classNames.bind(styles);

export const JobCandidateApplication = () => {
  const { jobCandidateApplication, getJobCandidateApplication, deleteCV } = useContext(JobContext);
  const token = localStorage.getItem("token");
  const userToken = JSON.parse(token);

  const [params, setParams] = useSearchParams();

  const setParamKey = (key, value) => {
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };

  const statusParams = params.get("status");
  useEffect(() => {
    getJobCandidateApplication(userToken, null);
  }, [userToken]);
  
  // useEffect(() => {
  //   const getlocalToken = JSON.parse(localStorage.getItem("token"));
  //   const status = params.get("status");
  //   getJobCandidateApplication(getlocalToken, status);
  // }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getJobCandidateApplication(userToken, statusParams);
  };

  useEffect(() => {
    getJobCandidateApplication(userToken, statusParams);
  }, [jobCandidateApplication]);

  return (
    <>
      <MetaData title="Danh sách việc làm ứng tuyển" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <form action="" onSubmit={handleSubmit} className="select-bar"  style={{ padding: 0}}>
                <Row className="mt-3 mb-3">
                  <Col sm={3} md={3} className="mt-3 mb-3 ms-3">
                    <select
                      style={{ border: "none" }}
                      // className="sort"
                      onChange={(e) => setParamKey("status", e.target.value)}
                    >
                      <option value="">-- Trạng thái --</option>
                      <option value="accepted">Xác nhận </option>
                      <option value="denied">Từ chối </option>
                      <option value="pending">Đang chờ </option>
                    </select>
                  </Col>

                  <Col sm={3} md={3}>
                    <button id="button1" type="submit" className="confirm mt-3">
                      {" "}
                      <CiSearch />
                    </button>
                  </Col>
                </Row>
              </form>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2>Công việc đã ứng tuyển</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/"></Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <span>
                    {jobCandidateApplication?.length} <span>việc làm</span>
                  </span>
                </div>
              </div>

              {/* <ul className={cx("list_group_jobs")}> */}

              <div>
                <ul className={cx("list_group_jobs")}>
                  <ApplicationList
                    jobCandidateApplication={jobCandidateApplication}
                  />
                </ul>
              </div>
              <div style={{ textAlign: "center" }}></div>
              {/* </ul> */}
            </div>
            <div className={cx("wrapper_banner")}>
              <img src={images.banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
