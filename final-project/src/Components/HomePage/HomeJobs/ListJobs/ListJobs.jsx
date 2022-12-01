import { List } from "antd";
import React from "react";
import { Container, Row,Col} from "react-bootstrap";
import JobItem from "../JobItem/JobItem";


export default function ListJobs (){

    return (
        <div className="list-jobs">
          <Container>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 10,
              }}
              // dataSource={}
              renderItem={(job) => (
                <List.Item>
                  <JobItem job={job} />
                </List.Item>
              )}
            ></List>
          </Container>
        </div>
      );
}