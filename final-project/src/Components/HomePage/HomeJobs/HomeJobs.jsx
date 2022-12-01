import { Button } from "antd";
import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserContext } from "../../../Context/UserContext";
import ListJobs from "./ListJobs/ListJobs";


export default function HomeJobs() {

    const { user } = useSelector((state) => state.auths);



    return (
        <Container className="home-jobs">

            <Row>
                <Col sm={8} md={8}>
                    <Row className="navigate-header text-start">
                        {user?.user.role == "candidate" && (
                            <>
                                <Row>
                                    <Col>
                                        <Button> Xem tất cả</Button>
                                    </Col>

                                    <Col>
                                        <Button> Tin đã ứng tuyển</Button>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                            </>
                        )}

                        {user?.user.role == "recruiter" && (
                            <>
                                <Row>
                                    <Col>
                                        <Button> Xem tất cả</Button>
                                    </Col>

                                    <Col>
                                        <Button> Tạo tin</Button>
                                    </Col>

                                    <Col>
                                        <Button> Tin đã tạo</Button>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                            </>
                        )}

                        {!user && (
                            <>
                                <Row>
                                    <Col>
                                        <Button> Xem tất cả</Button>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </>
                        )}
                    </Row>

                    <Row>
                        <ListJobs />
                    </Row>
{/* 
                    <Row>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                    </Row> */}
                </Col>

                <Col>
                    <Image className="image" src="https://cdn.brvn.vn/editor_news/2020/02/19843_memes_2_1581047784.jpg"></Image>
                </Col>
            </Row>

        </Container>
    )
}