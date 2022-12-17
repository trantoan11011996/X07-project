import { List } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import JobItem from "../JobItem/JobItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../ListJobs/ListJob.css";

export default function ListJobs({ jobHomePage }) {
  // const [data, setData] = useState("")

  // useEffect(() => {
  //   axios.get("https://xjob-mindx.herokuapp.com/api/recruiments/home-page").then((response) => {
  //     setData(response.data);
  //   });
  // }, [])
  console.log('home page',jobHomePage);
  return (
    <div className="list-jobs">
      <Container className="container-list-jobs">
        {/* <List
          className="list-container"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={jobHomePage}
          renderItem={(job) => (
            <List.Item>
              <JobItem job={job} id={job._id} />
            </List.Item>
          )}
        ></List> */}
      </Container>
    </div>
  );
}
