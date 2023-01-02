import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {TfiHeadphoneAlt} from "react-icons/tfi";

export default function ContactItem ({ data }) {

    return(
            <Card className="contact-card">
                <Row className="mt-3">
                    <Col sm={4} md={4} >
                        <TfiHeadphoneAlt className="headPhone"></TfiHeadphoneAlt>
                    </Col>

                    <Col sm={6} md={6}>
                        <b> Nhân viên: {data.name}</b> <br />
                        <b> Sđt: {data.phoneNumber}</b>
                    </Col>
                </Row>
            </Card>
    )
}