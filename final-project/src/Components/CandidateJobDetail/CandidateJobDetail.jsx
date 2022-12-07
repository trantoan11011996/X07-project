import React from "react";
import { useState } from "react";
import { Card, Container, Col, Row, Button, Tabs, Tab, Modal, Form } from "react-bootstrap";
import "../CandidateJobDetail/candidatejobdetail.css"

export default function JobItem() {

    const [show, setShow] = useState('');
    const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleActive = (event) => {
        event.preventDefault()
        setActive(true)
        handleClose()
    }

    return (
        <Container>
            <Row>
                <Col sm={8} md={8}>
                    <Card className="job-content m-3">
                        <Card.Img className="job-banner" variant="top" src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_1.svg" />

                        <Card.Body>
                            <Row className="titte m-2">
                                <Col className="logo" sm={3} md={3}>
                                    <img src="https://www.careerlink.vn/image/4da3ca9a9b8fd6454576840e74146541" />
                                </Col>

                                <Col className="company" sm={9} md={9}>
                                    <Card.Title> Tiêu đề</Card.Title>
                                    <h3> Tên công ty</h3>
                                </Col>
                            </Row>

                            <div className="job-details">
                                <p className="mt-2">địa điểm</p>
                                <p className="mt-2">lương</p>
                                <p className="mt-2">kinh nghiệm</p>
                                <Row className="mt-2">
                                    <Col sm={4} md={4} >Ngày đăng tuyển</Col>
                                    <Col sm={4} md={4} >Ngày hết hạn</Col>
                                </Row>

                                <Row className="mt-2">
                                    <Col sm={3} md={3}>
                                        {!active
                                        ? <Button className="job-button" variant="primary" onClick={handleShow}>Nộp đơn ngay</Button>
                                        : <Button className="job-button" variant="primary" >Đã ứng tuyển</Button> 
                                        }
                                       
                                    </Col>

                                    <Col sm={3} md={3}>
                                        <Button className="job-button" variant="outline-primary">Lưu</Button>
                                    </Col>
                                </Row>
                            </div>

                            <div className="job-tabs mt-3">
                                <Tabs>
                                    <Tab eventKey="" title="Mô tả công việc"></Tab>
                                    <Tab eventKey="" title="Yêu cầu"></Tab>
                                    <Tab eventKey="" title="Thông tin liên hệ"></Tab>
                                    <Tab eventKey="" title="Về công ty"></Tab>
                                </Tabs>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={4} md={4}>

                </Col>
            </Row>




            <Modal show={show} onHide={handleClose} className="job-modal">

                <Modal.Header closeButton>
                    <Modal.Title>Form Ứng Tuyển</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Hồ sơ ứng tuyển</Form.Label>
                        <Form.Control type="file" placeholder="Upload" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mt-3"> Ghi chú</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Row className="mt-3">
                        <Col sm={4} md={4}></Col>

                        <Col sm={4} md={4}>
                            <Button className="modal-button" variant="outline-primary" onClick={handleActive}> Gửi yêu cầu</Button>
                        </Col>

                        <Col sm={4} md={4}></Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}