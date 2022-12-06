import React, { useState, useContext, useEffect } from "react";
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
    companyEmail,
    companyName,
    companyPhone,
    companyAddress,
    companyDescription,
    operationSector,
    setCompanyEmail,
    setCompanyPhone,
    setCompanyAddress,
    setOperationSector,
    setCompanyDescription,
    setCompanyName,
    setFieldActivity,
    updateRecruiterInfo,
    setShowLogin,
  } = useContext(UserContext);

  const [companyEmpty, setCompanyEmpty] = useState(false);
  const [websiteEmpty, setWebsiteEmpty] = useState(false);
  const [companyEmailEmpty, setCompanyEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [operationSectorEmpty, setOperationSectorEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);

  const [EmailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [operationSectorForm, setOperationSectorForm] = useState([]);

  const handleSubmitUpdateRecruiter = (event) => {
    event.preventDefault();

    if (!companyName || companyName == null) {
      setCompanyEmpty(true);
      return;
    } else {
      setCompanyEmpty(false);
    }
    if (!companyEmail || companyEmail == null) {
      setCompanyEmailEmpty(true);
      return;
    } else {
      setCompanyEmailEmpty(false);
    }

    if (!isEmail(companyEmail)) {
      setEmailErr(true);
      return;
    } else {
      setEmailErr(false);
    }

    if (!companyPhone || companyPhone == null) {
      setPhoneEmpty(true);
      return;
    } else {
      setPhoneEmpty(false);
    }

    if (!isVietnamesePhoneNumberValid(companyPhone)) {
      setPhoneErr(true);
      return;
    } else {
      setPhoneErr(false);
    }

    if (!companyAddress || companyAddress == null) {
      setAddressEmpty(true);
      return;
    } else {
      setAddressEmpty(false);
    }

    if (!operationSector || operationSector == null) {
      setOperationSectorEmpty(true);
      return;
    } else {
      setOperationSectorEmpty(false);
    }

    if (!companyDescription || companyDescription == null) {
      setDescriptEmpty(true);
      return;
    } else {
      setDescriptEmpty(false);
      updateRecruiterInfo();
      setShowLogin(false);
      navigate("/");
    }
  };
  // const {user} = useSelector(state=>state.auths)

  const getAllOperationSector = async (token) => {
    console.log(token);
    const all = await fetch(
      `https://xjob-mindx-production.up.railway.app/api/users/operation-sector`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOperationSectorForm(data);
      });
    return all;
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    getAllOperationSector(token);
  }, []);

  return (
    <div className="form-container-recruiter">
      <Form className="p-2 text-start form-recruiter" onSubmit={handleSubmitUpdateRecruiter}>
        <Form.Group>
          <h1 className="form-recruiter-header"> Thông Tin Nhà Tuyển Dụng</h1>
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
              onChange={(event) => setCompanyName(event.target.value)}
            />
            {companyEmpty && (
              <p className="text">Tên công ty không được để trống</p>
            )}
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
                  onChange={(event) => setCompanyEmail(event.target.value)}
                />
                {companyEmailEmpty && (
                  <p className="text">Email không được để trống</p>
                )}
                {EmailErr && (
                  <p className="text"> Hãy nhập email đúng định dạng</p>
                )}
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
                  onChange={(event) => setCompanyPhone(event.target.value)}
                />
                {phoneEmpty && (
                  <p className="text"> Số điện thoại không được để trống</p>
                )}
                {phoneErr && (
                  <p className="text"> Hãy nhập số điện thoại Việt Nam</p>
                )}
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
              onChange={(event) => setCompanyAddress(event.target.value)}
            />
            {addressEmpty && (
              <p className="text"> Địa chỉ không được để trống</p>
            )}
          </Row>
          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Lĩnh vực<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Select
              className="input ms-2"
              onChange={(event) => setOperationSector(event.target.value)}
            >
              <option></option>
              {operationSectorForm?.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {operationSectorEmpty && (
              <p className="text"> Lĩnh vực không được để trống</p>
            )}
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
              onChange={(event) => setCompanyDescription(event.target.value)}
            />
            {descriptEmpty && (
              <p className="text"> Mô tả không được để trống</p>
            )}
          </Row>

          <Row className="mt-5">
            <Col sm={3} md={3}>
              {" "}
            </Col>
            <Col sm={3} md={3}>
              <Button className="button" type="submit">
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
    </div>
  );
}
