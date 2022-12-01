import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";
import { isVietnamesePhoneNumberValid } from "../../../../utils/validate";
import "../User_cadidate/candidate.css";

export default function UserCandidate() {
  const {
    name,
    setName,
    gender,
    setGender,
    age,
    setAge,
    phone,
    setPhone,
    address,
    setAddress,
    category,
    setCategory,
    description,
    setDescription,
    updateCandidateInfo,
    setShowLogin,
    currentUser,
    setCurrentUser
  } = useContext(UserContext);

  const navigate = useNavigate(null);

  const [nameEmpty, setNameEmpty] = useState(false);
  const [genderEmpty, setGenderEmpty] = useState(false);
  const [ageEmpty, setAgeEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [categoryEmpty, setCategoryEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);

  const [ageErr, setAgeErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!name || name == null) {
      setNameEmpty(true)
      return
    } else {
      setNameEmpty(false)
    }

    if (!gender || gender == null) {
      setGenderEmpty(true)
      return
    } else {
      setGenderEmpty(false)
    }

    if(!age || age == null) {
      setAgeEmpty(true)
      return
    } else {
      setAgeEmpty(false)
    }

    if (age < 18) {
      setAgeErr(true)
      return
    } else {
      setAgeErr(false)
    }

    if (!phone || phone == null) {
      setPhoneEmpty(true)
      return
    } else {
      setPhoneEmpty(false)
    }

    if (!isVietnamesePhoneNumberValid(phone)) {
      setPhoneErr(true)
      return
    } else {
      setPhoneErr(false)
    }
    
    if(!address || address == null) {
      setAddressEmpty(true)
      return
    } else {
      setAddressEmpty(false)
    }

    if(!category || category == null) {
      setCategoryEmpty(true)
      return
    } else {
      setCategoryEmpty(false)
    }

    if(!description || description == null) {
      setDescriptEmpty(true)
      return
    } else {
      setDescriptEmpty(false)
      updateCandidateInfo();
      setShowLogin(false);
      // navigate("/");
      console.log(currentUser);

    }
  };

  return (
    <Container>
      <Row>
        <Col sm={3} md={3}></Col>

        <Col className="container-candidate" sm={6} md={6}>
          <Form className="mt-2 p-5 text-start shadow" autoComplete="on">
            <Form.Group>
              <h1 className="form-candidate-header text-center">
                {" "}
                Thông tin ứng viên{" "}
              </h1>
              <Row>
                <Col sm={6} md={6}>
                  <Row className="text-start">
                    <Form.Label />{" "}
                    <b>
                      Họ và Tên<span style={{ color: "red" }}>*</span>{" "}
                    </b>
                    <Form.Control
                      className="input ms-2"
                      type="text"
                      maxLength={100}
                      onChange={(event) => setName(event.target.value)}
                    />
                  {nameEmpty && (<p className="text"> Họ và Tên không được để trống</p>)}
                  </Row>
                </Col>

                <Col sm={6} md={6}>
                  <Row className="ms-1">
                    <Form.Label />{" "}
                    <b>
                      {" "}
                      Giới tính<span style={{ color: "red" }}>*</span>{" "}
                    </b>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="m-2">
                        <Form.Check
                          inline
                          label="Nam"
                          value={currentUser?.info ? currentUser.info.gender : "Nam" }
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                          onChange={(event) => setGender(event.target.value)}
                        />
                        <Form.Check
                          inline
                          label="Nữ"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          onChange={(event) => setGender(event.target.value)}
                        />
                      </div>
                    ))}
                    {genderEmpty && (<p className="text"> Giới tính không được để trống</p>)}
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col sm={6} md={6}>
                  <Row className="text-start">
                    <Form.Label />{" "}
                    <b>
                      {" "}
                      Tuổi <span style={{ color: "red" }}>*</span>{" "}
                    </b>
                    <Form.Control
                      className="input ms-2"
                      type="number"
                      min={18}
                      max={100}
                      onChange={(event) => setAge(event.target.value)}
                    />
                  {ageEmpty && (<p className="text"> Tuổi không được để trống</p>)}
                  {ageErr && (<p className="text"> Tuổi không được nhỏ hơn 18</p>)}
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
                      onChange={(event) => setPhone(event.target.value)}
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
                  onChange={(event) => setAddress(event.target.value)}
                />
                {addressEmpty && (<p className="text"> Địa chỉ không được để trống</p>)}
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  Lĩnh vực<span style={{ color: "red" }}>*</span>
                </b>
                <Form.Select
                  className="input ms-2"
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option></option>
                  <option value="Dev"> Dev</option>
                  <option value="Tester"> Tester</option>
                </Form.Select>
                {categoryEmpty && (<p className="text"> Lĩnh vực không được để trống</p>)}
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Mô tả bản thân<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  as="textarea"
                  rows={3}
                  maxLength={1000}
                  onChange={(event) => setDescription(event.target.value)}
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
                <Col>
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
