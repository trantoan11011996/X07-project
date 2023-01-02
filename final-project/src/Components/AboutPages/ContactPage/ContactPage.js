import { List } from "antd";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../ContactPage/contactpage.css";
import ContactItem from "./ContactItem";
import { BsBuilding } from "react-icons/bs";

export default function ContactPage() {

    const data = [
        { name: "Mr Thuận", phoneNumber: "0938765333" },
        { name: "Mr Cương", phoneNumber: "0909554667" },
        { name: "Mr Toàn", phoneNumber: "0349765234" },
        { name: "Mr Tùng", phoneNumber: "0312349884" },
        { name: "Mr Minh", phoneNumber: "0998743322" },
    ]

    return (
        <div className="contact-page">
            <Container className="container-contact-page mb-3">
                <Row>
                    <Col sm={2} md={2}></Col>
                    <Col sm={8} md={8}>
                        <Card className="contact-background">
                            <h2 className="contact-title mt-3">Thông tin liên hệ</h2>
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 2,
                                    sm: 2,
                                    md: 2,
                                    lg: 2,
                                    xl: 2,
                                    xxl: 2,
                                }}
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item className="ms-2 me-2">
                                        <ContactItem data={item} />
                                    </List.Item>
                                )}>
                            </List>
                        </Card>

                        <Card className="contact-background">
                            <h2 className="contact-title mt-3">Vị trí</h2>
                            <p className="ms-2 mt-3"> <BsBuilding></BsBuilding> <b> Văn phòng tại Tp.Hồ Chí Minh</b></p>
                            <Card className="contact-location mt-3">
                                <div className="ms-2 mt-2">
                                    <p><b>Địa chỉ: </b> Phòng 302, 270-272 Cộng Hòa, P.13, Q.Tân Bình, TP. Ho Chi Minh</p>
                                    <p><b>Số điện thoại: </b>028 3842 7865</p>
                                    <p><b>Email: </b> <a className="link"> XCareerBuilder@gmail.com </a></p>
                                </div>
                            </Card>

                            <iframe
                                className="ms-2 mt-2"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1198431119687!2d106.64497454990983!3d10.802132292266261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752948b22bd9cd%3A0x24c05cd638b90d33!2zM3JkIGZsb29yLCAyNzIgxJAuIEPhu5luZyBIw7JhLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1672659651755!5m2!1svi!2s"
                                style={{
                                    width: "725px",
                                    height: "450px",
                                    border: "0",
                                    allowfullscreen: "",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer-when-downgrade",
                                }}>
                            </iframe>

                            <p className="ms-2 mt-5"> <BsBuilding></BsBuilding> <b> Văn phòng tại Hà Nội</b></p>
                            <Card className="contact-location mt-3">
                                <div className="ms-2 mt-2">
                                    <p><b>Địa chỉ: </b> Phòng 307, DMC Tower, 535 Kim Mã, Ba Đình, TP.Hà Nội</p>
                                    <p><b>Số điện thoại: </b>024 2319 5678</p>
                                    <p><b>Email: </b> <a className="link"> XCareerBuilder@gmail.com </a></p>
                                </div>
                            </Card>

                            <iframe
                                className="ms-2 mt-2"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0822760869946!2d105.80803525006507!3d21.02939368592931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6be93a9bd9%3A0x3a6eb744e79dea70!2zVG_DoCBuaMOgIERNQw!5e0!3m2!1svi!2s!4v1672660073984!5m2!1svi!2s"
                                style={{
                                    width: "725px",
                                    height: "450px",
                                    border: "0",
                                    allowfullscreen: "",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer-when-downgrade",
                                }}>
                            </iframe>
                        </Card>
                    </Col>
                    <Col sm={2} md={2}></Col>
                </Row>

            </Container>
        </div>
    )
}