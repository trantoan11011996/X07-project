import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import "../JobItem/JobItem.css";
export default function JobItem({ job }) {
  return (
    <div className="job-item">
      <Row className="job-container">
        <div className="job-wrapper">
          <Col md={4} className="company-logo">
            LOGO
          </Col>

          <Col md={8}>
            <div className="job-desctiption">
              <h1 className="job-title">{job.title}</h1>
              <p className="company-name">{job.name}</p>
              <p className="job-location">{job.location}</p>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}
