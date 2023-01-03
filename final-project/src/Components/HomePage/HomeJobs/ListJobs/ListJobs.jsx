import { List, Space } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import JobItemHomePage from "../JobItemHomePage/JobItemHomePage";
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
  console.log("home page", jobHomePage);
  return (
    <div className="list-jobs">
      {/* <Container className="container-list-jobs">
        <Space>
          <List
          
            className="list-container"
            grid={{
              gutter: 16,
              xs: 1,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 2,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 8,
            }}
            dataSource={jobHomePage}
            renderItem={(job) => (
              <List.Item>
                <JobItem job={job} id={job._id} />
              </List.Item>
            )}
          ></List>
        </Space>
      </Container> */}
       <Row>
      {jobHomePage?.map((item,index)=>{
        return(
          <Col xl={6} md={6} xs={12}>
            <JobItemHomePage job={item} id={item._id} key={index}/>
          </Col>
        )
      })}
     </Row>
    </div>
  );
}
