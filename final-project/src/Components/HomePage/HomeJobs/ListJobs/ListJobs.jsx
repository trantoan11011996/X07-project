import { List } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import JobItem from "../JobItem/JobItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../ListJobs/ListJob.css"
import BtnSlideList from "./BtnSlideList";

export default function ListJobs() {
  // const [data, setData] = useState("")

  // useEffect(() => {
  //   axios.get("https://xjob-mindx.herokuapp.com/api/recruiments/home-page").then((response) => {
  //     setData(response.data);
  //   });
  // }, [])
  const data = [
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
    {
      title: "Fresher nodejs",
      name: "ZETA GROUP",
      description: "exam",
      position: "Developer",
      type: "Fulltime",
      level: "fresher",
      age: "18-27",
      experience: "1 year",
      salary: "500$ - 800$ ",
      numberApplicant: 2,
      location: "Hà Nội",
      operationSector: "IT",
      category: "IT",
      createAt: "21/1/2022",
      seadline: "21/5/2021",
    },
  ];
  console.log(data);

  return (
    <div className="list-jobs">
      <Container>
        <div className="container-slide">
          <Row>
            {data.map((job, index) => {
              return (
                <Col md={6}>
                  <JobItem job={job} key={index}/>
                </Col>
              );
            })}
            <BtnSlideList direction={"next"}/>
            <BtnSlideList direction={"prev"}/>

          </Row>
        </div>
      </Container>
    </div>
  );
}
