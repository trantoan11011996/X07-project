import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import {IoLocationSharp} from "react-icons/io5"
import "../JobItem/JobItem.css";
import logocompany from "../../../../img/logocompany.png"
export default function JobItem({ job }) {
  return (
    <div className="job-item">
      <Row className="job-container">
        <div className="job-wrapper">
          <Col md={2} className="company-logo">
              <div className="logo-wraper">
                <img className="logo-company" src={logocompany}></img>
              </div>
          </Col>

          <Col md={10}>
            <div className="job-desctiption">
              <h1 className="job-title">{job.title}</h1>
              <p className="company-name">{job.name}</p>
              <p className="job-location"><span><IoLocationSharp></IoLocationSharp></span>{job.location}</p>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}
