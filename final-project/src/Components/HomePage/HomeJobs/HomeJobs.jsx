import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListJobs from "./ListJobs/ListJobs";


export default function HomeJobs(){
    return(
        <div className="home-jobs">
            <Container>
                <Row>
                    <Col md={6}>
                    <ListJobs/>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        item
                    </Col>
                    <Col md={2}>
                        item
                    </Col>
                    <Col md={2}>
                        item
                    </Col>
                    <Col md={2}>
                        item
                    </Col>
                </Row>
            </Container>
        </div>
    )
}