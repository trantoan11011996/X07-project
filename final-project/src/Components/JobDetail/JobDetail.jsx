
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Card, Container, Col, Row, Button, Modal, Form, Nav } from "react-bootstrap";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import "./jobdetail.css"
import data from "./JobData";
import { UserContext } from "../../Context/UserContext";
export default function JobDetail() {
    const { user } = useSelector((state) => state.auths);
    const { currentUser } = useContext(UserContext);
    const { fetchJobDetail } = useContext(JobContext)
    const [show, setShow] = useState('');
    const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleActive = (event) => {
        event.preventDefault()
        setActive(true)
        handleClose()
    }


    const { id } = useParams();
    const [jobData, setJobData] = useState({})

    const getJobDetail = async () => {
        console.log('id job', id);
        let data = await fetchJobDetail(id)

        if (data) {
            console.log('data', data);
            setJobData(data)
        }
        return data
    };


    // useEffect(() => {
    //     getJobDetail(id);
    // }, [id]);
    useEffect(() => {
        const detailData = async () => {
            await getJobDetail()
        }
        detailData()
    }, [id]);
    console.log('job', jobData);
    console.log(id);



    useEffect(() => {
        const description = document.getElementById("description")
        description.innerHTML = `
        ${jobData.description}
    `
    }, [jobData])

    return (
        <>
            {jobData && (
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
                                            <Card.Title className="job-tittle"> {jobData?.title}</Card.Title>
                                            <h3> {jobData?.name?.info?.name}</h3>
                                        </Col>
                                    </Row>

                                    <div className="job-details">
                                        <p className="mt-2"> <CiLocationOn></CiLocationOn> {jobData?.location.name}</p>
                                        <p className="mt-2"><AiFillDollarCircle></AiFillDollarCircle> {jobData?.salary}</p>
                                        <p className="mt-2"><MdOutlineWork></MdOutlineWork> {jobData?.experience} kinh nghiệm</p>
                                        <Row className="mt-2">
                                            <Col sm={5} md={5} ><BsFillCalendar2CheckFill></BsFillCalendar2CheckFill> Ngày đăng tuyển: {jobData?.createAt}</Col>
                                            <Col sm={5} md={5} >Ngày hết hạn: {jobData?.deadline}</Col>
                                        </Row>

                                        {(user?.user.role == "candidate" || currentUser?.role == "candidate") && (
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
                                        )}
                                    </div>

                                    <div className="mt-3">
                                        <Row className="ms-2">
                                            <Col sm={2} md={2}>
                                                <a className="job-tab" href="#description"> Mô tả</a>
                                            </Col>

                                            <Col sm={2} md={2}>
                                                <a className="job-tab" href="#require"> Yêu cầu</a>
                                            </Col>

                                            <Col sm={3} md={3}>
                                                <a className="job-tab" href="#info"> Thông tin liên hệ</a>
                                            </Col>

                                            <Col sm={3} md={3}>
                                                <a className="job-tab" href="#about"> Về công ty</a>
                                            </Col>

                                            <Col sm={2} md={2}></Col>
                                        </Row>
                                    </div>

                                    <div className="mt-3">
                                        <h2 className="require-title"> Mô tả </h2>
                                        <div id="description" className="mt-3"></div>
                                    </div>

                                    <div id="require" className="mt-3">
                                        <h2 className="require-title"> Yêu Cầu </h2>
                                        <Row>
                                            <div> </div>
                                            <Col sm={6} md={6}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            <h3 className="require-text"> Vị trí</h3>
                                                            <p className="ms-2"> {jobData?.position}</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"> Cấp bậc</h3>
                                                            <p className="ms-2"> {jobData?.level}</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"> Thời gian làm việc</h3>
                                                            <p className="ms-2"> {jobData?.type}</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6} md={6}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            <h3 className="require-text">Kinh nghiệm</h3>
                                                            <p className="ms-2"> {jobData?.experience}</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text">Số lượng</h3>
                                                            <p className="ms-2"> {jobData?.numberApplicant} nhân viên</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text">Độ tuổi</h3>
                                                            <p className="ms-2"> {jobData?.age}</p>
                                                        </div>


                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div id="info" className="mt-3">
                                        <h2 className="require-title"> Thông tin liên hệ </h2>
                                        <p className="ms-2"> email: {jobData?.name?.info?.email}</p>
                                        <p className="ms-2"> sdt: {jobData?.name?.info?.phoneNumber}</p>
                                    </div>

                                    <div id="about" className="mt-3">

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={4} md={4}>

                        </Col>
                    </Row>




                    <Modal show={show} onHide={handleClose} className="job-modal mt-5">

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
            )}
        </>
    )
}