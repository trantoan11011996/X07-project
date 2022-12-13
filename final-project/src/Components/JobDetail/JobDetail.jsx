import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Button,
  Modal,
  Form,
  Nav,
} from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  BsBriefcase,
  BsCalendar2Check,
  BsClockHistory,
  BsDiagram3,
  BsHeadset,
  BsPerson,
  BsWhatsapp,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TiFlowChildren } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import "./jobdetail.css";
import { UserContext } from "../../Context/UserContext";
import MetaData from "../MetaData/MetaData";
export default function JobDetail() {
  const { user } = useSelector((state) => state.auths);
  const { currentUser } = useContext(UserContext);
  const { fetchJobDetail, postCV } = useContext(JobContext);
  const [show, setShow] = useState("");
  const [active, setActive] = useState(false);
  const [logo, setLogo] = useState('')
  const [file, setFile] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const [jobData, setJobData] = useState({});

  const handleActive = (event) => {
    event.preventDefault();
    setActive(true);
    postCV(id, file, currentUser.token);
    handleClose();
  };
  const getJobDetail = async () => {
    let data = await fetchJobDetail(id)
    if (data) {
        setJobData(data)
        const splitString = data.name.avatar.split("/");
        const imageString = splitString[1] + "/".concat(splitString[2]);
        return setLogo(imageString);
    }
    return data
};
  useEffect(() => {
    const detailData = async () => {
      await getJobDetail();
    };
    detailData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const description = document.getElementById("description");
    description.innerHTML = `
        ${jobData.description}
    `;
  }, [jobData]);

  return (
    <>
      <MetaData title="Chi tiết tin tuyển dụng" />
      {jobData && (
        <Container>
          <Row>
            <Col sm={9} md={9}>
              <Card className="job-content mt-3 mb-3">
                <Card.Img
                  className="job-banner"
                  variant="top"
                  src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_1.svg"
                />

                <Card.Body>
                  <Row className="titte m-2">
                    <Col sm={2} md={2}>
                      <img  className="logo" src={`https://xjob-mindx-production.up.railway.app/${logo}`}/>
                    </Col>

                    <Col className="company mt-4" sm={10} md={10}>
                      <Card.Title className="job-tittle">
                        {" "}
                        {jobData?.title}
                      </Card.Title>
                      <h3> {jobData?.name?.info?.name}</h3>
                    </Col>
                  </Row>

                  <div className="job-details">
                    <p className="mt-2" style={{ fontWeight: "bolder" }}>
                      {" "}
                      <CiLocationOn className="me-2"></CiLocationOn>{" "}
                      {jobData?.location?.name}
                    </p>
                    <p className="mt-2">
                      <AiOutlineDollarCircle className="me-2"></AiOutlineDollarCircle>{" "}
                      <b>Lương</b>: {jobData?.salary} (VNĐ){" "}
                    </p>
                    <p className="mt-2">
                      <MdOutlineWorkOutline className="me-2"></MdOutlineWorkOutline>{" "}
                      {jobData?.experience} kinh nghiệm
                    </p>
                    <Row className="mt-2">
                      <Col sm={5} md={5}>
                        <BsCalendar2Check className="me-2"></BsCalendar2Check>{" "}
                        Ngày đăng tuyển: {jobData?.createAt}
                      </Col>
                      <Col sm={5} md={5}>
                        Ngày hết hạn: {jobData?.deadline}
                      </Col>
                    </Row>

                    {(user?.role == "candidate" ||
                      currentUser?.role == "candidate") && (
                      <Row className="mt-2">
                        <Col sm={2} md={3}>
                          {!active ? (
                            <Button
                              className="job-button"
                              variant="primary"
                              onClick={handleShow}
                            >
                              Nộp đơn ngay
                            </Button>
                          ) : (
                            <Button className="job-button" variant="primary">
                              Đã ứng tuyển
                            </Button>
                          )}
                        </Col>

                        <Col sm={2} md={2}>
                          <Button
                            className="job-button"
                            variant="outline-primary"
                          >
                            Lưu
                          </Button>
                        </Col>
                        <Col sm={7} md={7}></Col>
                      </Row>
                    )}
                  </div>

                  <div className="tab-rows">
                    <Row className="ms-2 p-2">
                      <Col sm={2} md={2}>
                        <a
                          className="job-tab"
                          href="#description"
                          data-target="#description"
                        >
                          {" "}
                          Mô tả
                        </a>
                      </Col>

                      <Col sm={2} md={2}>
                        <a
                          className="job-tab"
                          href="#require"
                          data-target="#require"
                        >
                          {" "}
                          Yêu cầu
                        </a>
                      </Col>

                      <Col sm={3} md={3}>
                        <a className="job-tab" href="#info" data-target="#info">
                          {" "}
                          Thông tin liên hệ
                        </a>
                      </Col>

                      <Col sm={3} md={3}>
                        <a
                          className="job-tab"
                          href="#about"
                          data-target="#about"
                        >
                          {" "}
                          Về công ty
                        </a>
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
                              <h3 className="require-text">
                                <BsBriefcase className="me-2"></BsBriefcase> Vị
                                trí
                              </h3>
                              <p className="ms-2"> {jobData?.position}</p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsDiagram3 className="me-2"></BsDiagram3> Cấp
                                bậc
                              </h3>
                              <p className="ms-2"> {jobData?.level}</p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsClockHistory className="me-2"></BsClockHistory>{" "}
                                Thời gian làm việc
                              </h3>
                              <p className="ms-2"> {jobData?.type}</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col sm={6} md={6}>
                        <Card>
                          <Card.Body>
                            <div>
                              <h3 className="require-text">
                                {" "}
                                <RxAvatar className="me-2"></RxAvatar>Kinh
                                nghiệm
                              </h3>
                              <p className="ms-2">
                                {" "}
                                {jobData?.experience} kinh nghiệm
                              </p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsPerson className="me-2"></BsPerson>Số lượng
                              </h3>
                              <p className="ms-2">
                                {" "}
                                {jobData?.numberApplicant} nhân viên
                              </p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <TiFlowChildren className="me-2"></TiFlowChildren>
                                Độ tuổi{" "}
                              </h3>
                              <p className="ms-2"> {jobData?.age} tuổi</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div id="info" className="mt-3">
                    <h2 className="require-title"> Thông tin liên hệ </h2>
                    {/* <p className="ms-2"> email: {jobData?.name?.info?.email}</p>
                                        <p className="ms-2"> sdt: {jobData?.name?.info?.phoneNumber}</p> */}
                  </div>

                  <div id="about" className="mt-3"></div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} md={4}></Col>
          </Row>



          <Modal show={show} onHide={handleClose} className="job-modal mt-5">
            <Modal.Header closeButton>
              <Modal.Title>Form Ứng Tuyển</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group>
                <Form.Label>Hồ sơ ứng tuyển</Form.Label>
                <Form.Control
                  type="file"
                  name="formFile"
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3"> Ghi chú</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Row className="mt-3">
                <Col sm={4} md={4}></Col>

                <Col sm={4} md={4}>
                  <Button
                    className="modal-button"
                    variant="outline-primary"
                    onClick={handleActive}
                  >
                    {" "}
                    Gửi yêu cầu
                  </Button>
                </Col>

                <Col sm={3} md={3}></Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Container>
      )}
    </>
  );
}