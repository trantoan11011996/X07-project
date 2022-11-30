import React, { useState, useContext } from "react";
import { Container, Card, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";
import {
  isEmail,
  isVietnamesePhoneNumberValid,
} from "../../../../utils/validate";
import "../User_recruiter/recruiter.css";

export default function UserRecruiter() {
  const navigate = useNavigate(null);
  const {
    currentUser,
    setCurrentUser,
    company,
    setCompany,
    website,
    setWebsite,
    companyEmail,
    setCompanyEmail,
    companyPhone,
    setCompanyPhone,
    companyAddress,
    setCompanyAddress,
    companyCareer,
    setCompanyCareer,
    companyDescription,
    setCompanyDescription,
    updateRecruiterInfo,
    setShowLogin
  } = useContext(UserContext);

  const [companyEmpty, setCompanyEmpty] = useState(false);
  const [websiteEmpty, setWebsiteEmpty] = useState(false);
  const [companyEmailEmpty, setCompanyEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [careerEmpty, setCareerEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);

  const [EmailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!company || company == null) {
      setCompanyEmpty(true)
      return
    } else {
      setCompanyEmpty(false)
    }

    if (!website || website == null) {
      setWebsiteEmpty(true)
      return
    } else {
      setWebsiteEmpty(false)
    }

    if(!companyEmail || companyEmail == null) {
      setCompanyEmailEmpty(true)
      return
    } else {
      setCompanyEmailEmpty(false)
    }

    if (!isEmail(companyEmail)) {
      setEmailErr(true)
      return
    } else {
      setEmailErr(false)
    }

    if (!companyPhone || companyPhone == null) {
      setPhoneEmpty(true)
      return
    } else {
      setPhoneEmpty(false)
    }

    if (!isVietnamesePhoneNumberValid(companyPhone)) {
      setPhoneErr(true)
      return
    } else {
      setPhoneErr(false)
    }
    
    if(!companyAddress || companyAddress == null) {
      setAddressEmpty(true)
      return
    } else {
      setAddressEmpty(false)
    }

    if(!companyCareer || companyCareer == null) {
      setCareerEmpty(true)
      return
    } else {
      setCareerEmpty(false)
    }

    if(!companyDescription || companyDescription == null) {
      setDescriptEmpty(true)
      return
    } else {
      setDescriptEmpty(false)
    
      updateRecruiterInfo(
        company,
        website,
        companyEmail,
        companyPhone,
        companyAddress,
        companyCareer,
        companyDescription
      );
      setShowLogin(false);
      navigate("/");
      console.log(currentUser);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={3} md={3}></Col>

        <Col className="container-recruiter" sm={6} md={6}>
          <Form className="m-3 p-5 text-start border shadow-ms">
            <Form.Group>
              <h1 className="recruiter text-center">
                {" "}
                Thông Tin Nhà Tuyển Dụng
              </h1>
              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Tên công ty<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2 "
                  type="text"
                  maxLength={100}
                  value={currentUser.user_info ? currentUser.user_info.name : null }
                  onChange={(event) => setCompany(event.target.value)}
                />
                {companyEmpty && <p className="text">Tên công ty không được để trống</p>}
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Website<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  value={currentUser.user_info ? currentUser.user_info.website : null }
                  onChange={(event) => setWebsite(event.target.value)}
                />
                {websiteEmpty && <p className="text">Website không được để trống</p>}
              </Row>

              <Row className="mt-1">
                <Col sm={6} md={6}>
                  <Row className="text-start">
                    <Form.Label />{" "}
                    <b>
                      {" "}
                      Email công ty<span style={{ color: "red" }}>*</span>{" "}
                    </b>
                    <Form.Control
                      className="input ms-2"
                      type="email"
                      value={currentUser.user_info ? currentUser.user_info.email : null }
                      onChange={(event) => setCompanyEmail(event.target.value)}
                    />
                    {companyEmailEmpty && <p className="text">Email không được để trống</p>}
                    {EmailErr && <p className="text"> Hãy nhập email đúng định dạng</p>}
                  </Row>
                </Col>

                <Col sm={6} md={6}>
                  <Row className="ms-1">
                    <Form.Label />{" "}
                    <b>
                      {" "}
                      Số điện thoại<span style={{ color: "red" }}>*</span>{" "}
                    </b>
                    <Form.Control
                      className="input ms-2"
                      type="text"
                      value={currentUser.user_info ? currentUser.user_info.phoneNumber : null }
                      onChange={(event) => setCompanyPhone(event.target.value)}
                    />
                    {phoneEmpty && (<p className="text"> Số điện thoại không được để trống</p>)}
                    {phoneErr && (<p className="text"> Hãy nhập số điện thoại Việt Nam</p>)}
                  </Row>
                </Col>
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Địa chỉ<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  maxLength={200}
                  value={currentUser.user_info ? currentUser.user_info.address : null }
                  onChange={(event) => setCompanyAddress(event.target.value)}
                />
                {addressEmpty && (<p className="text"> Địa chỉ không được để trống</p>)}
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Lĩnh vực<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Select
                  className="input ms-2"
                  onChange={(event) => setCompanyCareer(event.target.value)}
                  value={currentUser.user_info ? currentUser.user_info.career : null }
                >
                  <option></option>
                  <option value="Dev"> Dev</option>
                  <option value="Tester"> Tester</option>
                </Form.Select>
                {careerEmpty && (<p className="text"> Lĩnh vực không được để trống</p>)}
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Mô tả<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  as="textarea"
                  rows={3}
                  maxLength={1000}
                  value={currentUser.user_info ? currentUser.user_info.description : null }
                  onChange={(event) => setCompanyDescription(event.target.value)}
                />
                 {descriptEmpty && (<p className="text"> Mô tả không được để trống</p>)}
              </Row>

              <Row className="mt-5">
                <Col sm={3} md={3}>
                  {" "}
                </Col>
                <Col sm={3} md={3}>
                  <Button className="button" onClick={handleClick}>
                    {" "}
                    Cập nhật{" "}
                  </Button>
                </Col>
                <Col sm={3} md={3}>
                  <Link to={"/"}>
                    <Button variant="light"> Hủy bỏ </Button>
                  </Link>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>

        <Col sm={3} md={3}></Col>
      </Row>
    </Container>
  );
}
