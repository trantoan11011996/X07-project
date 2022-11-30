import React from "react";
import { Container, Row,Col} from "react-bootstrap";
import JobItem from "../JobItem/JobItem";


export default function ListJobs (){

    return(
        <div className="list-jobs">
           <Container>
            <Row>
                <Col md={5}>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                </Col>
                <Col md={5}>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                </Col>
            </Row>
           </Container>
        </div>
    )
}