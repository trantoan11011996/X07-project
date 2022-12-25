import React, { Fragment, useEffect, useState, useContext } from "react";
import { Space, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import styles from "./JobCandidateApplication.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { JobContext } from "../../Context/JobContext";
const cx = classNames.bind(styles);

function ApplicationItems({ job, recruimentId, id }) {
  const image = recruimentId?.name?.avatar;
  const splitString = image.split("/");
  const imageString = splitString[1] + "/".concat(splitString[2]);
  // console.log('recruiTd', recruimentId)
  console.log('job', job)
  // console.log('item',recruimentId)
  // const [jobStatus, setJobStatus] = useState(job?.status);
  const [recruitmentStatus, setRecruitmentStatus] = useState(
    recruimentId?.status
  );

  const { deleteCV } = useContext(JobContext);
  const token = localStorage.getItem('token');
  const userToken = JSON.parse(token);

  // useEffect(() => {
  //   if (jobStatus === "pending") {
  //     setJobStatus("Đang chờ");
  //   }
  //   if (jobStatus === "accepted") {
  //     setJobStatus("Đã xác nhận");
  //   }
  //   if (jobStatus === "denied") {
  //     setJobStatus("Đã từ chối");
  //   }
  //   if (recruitmentStatus === "active") {
  //     setRecruitmentStatus("Đang hoạt động");
  //   }
  // }, [job]);
  // useEffect(() => {
  //   if (jobStatus === "pending") {
  //     setJobStatus("Đang chờ");
  //     return
  //   }
  //   if (jobStatus === "accepted") {
  //     setJobStatus("Đã xác nhận");
  //     return
  //   }
  //   if (jobStatus === "denied") {
  //     setJobStatus("Đã từ chối");
  //     return
  //   }
  //   if (recruitmentStatus === "active") {
  //     setRecruitmentStatus("Đang hoạt động");
  //   }
  // }, [job]);

  const handleDelete = () => {
    deleteCV(job._id, userToken)
    console.log("job del", job);
  }

  return (
    <Fragment>
      <li className={cx("list_group_item")}>
        <Link to={"/jobDetail/" + id}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img
                src={`https://xjob-mindx-production.up.railway.app/${imageString}`}
                alt="img"
              />
            </div>
            <div className={cx("content")}>
              <Link to="/" className={cx("title")}>
                {recruimentId?.title} -{" "}
                <span>
                  <IoLogoUsd></IoLogoUsd>
                </span>
                {recruimentId?.salary}(VNĐ)
              </Link>
              <div>
                <Link to="/" className={cx("company")}>
                  Công ty: {recruimentId?.name.info.name}
                </Link>
              </div>
              <div className={cx("address")}>
                <b>
                  {" "}
                  <span>
                    <IoLocationSharp></IoLocationSharp>
                    {recruimentId?.location?.name}{" "}
                  </span>{" "}
                </b>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("salary ")}>
                  <span> Vị trí làm việc: {recruimentId?.position} </span>
                </div>
              </div>
              <div className={cx("small_detail")}>
                <div className={cx("deadline")}>
                  {job?.status === "denied" && <b> Trạng thái đơn ứng tuyển: Đã từ chối </b>}
                  {job?.status === "accpeted" && <b> Trạng thái đơn ứng tuyển: Đã chấp nhận </b>}
                  {job?.status === "pending" && <b> Trạng thái đơn ứng tuyển: Đang chờ </b>}
                </div>
                <div className={cx("deadline")}>
                  <b>Trạng thái tin ứng tuyển: {recruitmentStatus}</b>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Row>
          <Col sm={5} md={5}></Col>
          <Col sm={4} md={4}></Col>
          <Col sm={3} md={3}>
            <button className={cx("delete-button")} onClick={handleDelete}>
              Hủy ứng tuyển
            </button>
          </Col>
        </Row>
      </li>
    </Fragment>
  );
}

export default ApplicationItems;
