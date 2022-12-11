
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Card, Container, Col, Row, Button, Modal, Form} from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsBriefcase, BsCalendar2Check, BsClockHistory, BsDiagram3, BsHeadset, BsPerson, BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import "./RJDetails.css"
import { UserContext } from "../../Context/UserContext";
export default function RJDetails() {
    const { user } = useSelector((state) => state.auths);
    const { currentUser } = useContext(UserContext);
    const { fetchJobDetail } = useContext(JobContext)
    const [show, setShow] = useState('');
    // const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleActive = (event) => {
        event.preventDefault()
        // setActive(true)
        handleClose()
    }


    const { id } = useParams();
    const [jobData, setJobData] = useState({})

    const getJobDetail = async () => {
        let data = await fetchJobDetail(id)

        if (data) {
            console.log('data', data);
            setJobData(data)
            return
        }
        return data
    };
   
    useEffect(() => {
        const detailData = async () => {
            await getJobDetail()
        }
        detailData()
    }, [id]);



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
                                        <p className="mt-2" style={{fontWeight:"bolder"}}> <CiLocationOn className="me-2"></CiLocationOn> {jobData?.location?.name}</p>
                                        <p className="mt-2"><AiOutlineDollarCircle className="me-2"></AiOutlineDollarCircle> {jobData?.salary} VND</p>
                                        <p className="mt-2"><MdOutlineWorkOutline className="me-2"></MdOutlineWorkOutline> {jobData?.experience} kinh nghiệm</p>
                                        <Row className="mt-2">
                                            <Col sm={5} md={5} ><BsCalendar2Check className="me-2"></BsCalendar2Check> Ngày đăng tuyển: {jobData?.createAt}</Col>
                                            <Col sm={5} md={5} >Ngày hết hạn: {jobData?.deadline}</Col>
                                        </Row>

                                        {(user?.user.role == "recruiter" || currentUser?.role == "recruiter") && (
                                            <Row className="mt-2">
                                                <Col sm={3} md={3}>
                                                         <Button className="job-button" variant="primary" onClick={handleShow}>Cập Nhật</Button>
                                                </Col>

                                                <Col sm={3} md={3}>
                                                    <Button className="job-button" variant="outline-danger">Gỡ bỏ</Button>
                                                </Col>
                                                <Col sm={3} md={3}>
                                                    <Button className="job-button" variant="outline-primary">Danh sách ứng viên</Button>
                                                </Col>
                                            </Row>
                                        )}
                                    </div>

                                    <div className="tab-rows">
                                        <Row className="ms-2">
                                            <Col sm={2} md={2}>
                                                <a className="job-tab" href="#description"> Mô tả</a>
                                            </Col>

                                            <Col sm={2} md={2}>
                                                <a className="job-tab" href="#require"> Yêu cầu </a>
                                            </Col>

                                            <Col sm={3} md={3}>
                                                <a className="job-tab" href="#info"> Mô tả bổ sung</a>
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
                                                            <h3 className="require-text"><BsBriefcase className="me-2"></BsBriefcase> Vị trí</h3>
                                                            <p className="ms-2"> {jobData?.position}</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"> <BsDiagram3 className="me-2"></BsDiagram3> Cấp bậc</h3>
                                                            <p className="ms-2"> {jobData?.level}</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"> <BsClockHistory className="me-2"></BsClockHistory> Thời gian làm việc</h3>
                                                            <p className="ms-2"> {jobData?.type}</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6} md={6}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            <h3 className="require-text"> <BsHeadset className="me-2"></BsHeadset>Kinh nghiệm</h3>
                                                            <p className="ms-2"> {jobData?.experience}  kinh nghiệm</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"> <BsPerson className="me-2"></BsPerson>Số lượng</h3>
                                                            <p className="ms-2"> {jobData?.numberApplicant} nhân viên</p>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h3 className="require-text"><BsWhatsapp className="me-2"></BsWhatsapp>Độ tuổi</h3>
                                                            <p className="ms-2"> {jobData?.age} tuổi</p>
                                                        </div>


                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div id="info" className="mt-3">
                                        <h2 className="require-title"> Thông tin liên hệ </h2>
                                      
                                    </div>

                                    <div id="about" className="mt-3">
                                        <h2 className="require-title"> Về công ty </h2>
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