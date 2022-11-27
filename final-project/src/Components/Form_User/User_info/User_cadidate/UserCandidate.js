import React, { useContext, useState } from "react";
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

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [career, setCareer] = useState("");
  const [description, setDescription] = useState("");
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate("");
 


  const candidateInfo = (name, gender, age, phone, address, career, description,) => {
    const userInfo = {
        fullname: name,
        age: age,
        gender: gender,
        phoneNumber: phone,
        address: address,
        career: career,
        description: description
    }

    const updateInfo = {...currentUser, user_info : userInfo} 
    setCurrentUser(updateInfo);
    return
};

  const updateInfo = (name,gender,age,phone,address,career,description)=>{
      const user_info = {
        name : name,
        gender:gender,
        age:age,
        phone:phone,
        address:address,
        career:career,
        description:description
      }
      const updateUser = {...currentUser, user_info : user_info}
      setCurrentUser(updateUser)
  }

  const handleClick = (event) => {

    event.preventDefault();
    
    if (
      !name ||
      !gender ||
      !age ||
      !phone ||
      !address ||
      !career ||
      !description
    ) {
      return alert("Hãy nhập đầy đủ thông tin ");
    } else if (age < 18) {
      return alert("Tuổi phải hơn 18");
    } else if (!isVietnamesePhoneNumberValid(phone)) {
      return alert("Hãy nhập sdt Việt Nam");
    } else {
     
      candidateInfo(name, gender, age, phone, address, career, description)
      navigate("/");
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={3} md={3}></Col>

        <Col className="container-candidate" sm={6} md={6}>
          <Form className="mt-2 p-5 text-start shadow">
            <Form.Group>
              <h1 className="candidate text-center"> Thông tin ứng viên </h1>
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
                          value="Nam"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                          onChange={(event) => setGender(event.target.value)}
                        />
                        <Form.Check
                          inline
                          label="Nữ"
                          value="Nữ"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          onChange={(event) => setGender(event.target.value)}
                        />
                      </div>
                    ))}
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
              </Row>

              <Row className="row-form">
                <Form.Label />{" "}
                <b>
                  Lĩnh vực<span style={{ color: "red" }}>*</span>
                </b>
                <Form.Select
                  className="input ms-2"
                  onChange={(event) => setCareer(event.target.value)}
                >
                  <option></option>
                  <option value="Dev"> Dev</option>
                  <option value="Tester"> Tester</option>
                </Form.Select>
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
              </Row>

              <Row className="mt-5">
                <Col sm={3} md={3}>
                  {" "}
                </Col>
                <Col sm={3} md={3}>
                  <Button className="button" onClick={handleClick}>
                    {" "}
                    Đăng kí{" "}
                  </Button>
                </Col>
                <Col>
                  <Link to={"/register"}>
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
