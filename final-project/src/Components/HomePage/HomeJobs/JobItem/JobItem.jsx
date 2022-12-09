import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import "../JobItem/JobItem.css";
import logocompany from "../../../../img/logocompany.png"
import { Link } from "react-router-dom";
export default function JobItem({ job }) {
  const image = job?.name?.avatar
  const splitString  = image.split("/")
  const imageString = splitString[1]+"/".concat(splitString[2])
  return (
    <div className="job-item">
      {/* <Link to={"/job/" + job._id}> */}
        <Row className="job-container">
          <div className="job-wrapper">
            <Col md={2} className="company-logo">
              <div className="logo-wraper">
                <img className="logo-company" src={`https://xjob-mindx-production.up.railway.app/${imageString}`}></img>
              </div>
            </Col>

            <Col md={10}>
              <div className="job-desctiption">
                <h1 className="job-title">{job?.title}</h1>
                <p className="company-name">{job?.name?.info.name}</p>
                <p className="job-salary"><span><IoLogoUsd></IoLogoUsd></span> Lương : {job?.salary}</p>
                <p className="job-location"><span><IoLocationSharp></IoLocationSharp></span>{job?.location.name}</p>
              </div>
            </Col>
          </div>
        </Row>
      {/* </Link> */}
    </div>
  );
}
