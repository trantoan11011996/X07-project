import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, isMatch, isPassword } from "../../../utils/validate";
import "../Register/register.css"

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !role) {
      return alert("Hãy nhập đầy đủ thông tin ")
    } else if (!isEmail(email)) {
      return alert("Hãy nhập email đúng định dạng")
    } else if(!isPassword(password)) {
      return alert("Mật khẩu phải bao gồm 1 chữ số, 1 ký tự đặc biệt, 1 chữ hoa, 1 chữ thường")
    } else if (!isMatch(password, confirm)) {
      return alert("Mật khẩu và xác nhận mật khẩu phải trùng khớp")
    } else if (isEmail(email) && isPassword(password) && isMatch(password, confirm)) {
      // const user = {
      //     email: email,
      //     password: password,
      //     userRole: role
      // }
      // alert("Register successful")
      navigate("/")
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={3} md={3}></Col>

        <Col sm={6} md={6}>
          <Form
            className="p-5 text-start shadow"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <h1 className="register text-center"> Đăng Ký </h1>
              <Row>
                <Form.Label /> <b>Email <span style={{ color: 'red' }}>*</span></b>
                <Form.Control
                  className="input ms-2"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Row>

              <Row>
                <Form.Label className="mt-2" /> <b>Mật khẩu <span style={{ color: 'red' }}>*</span></b>
                <Form.Control
                  className="input ms-2"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Row>

              <Row>
                <Form.Label className="mt-2" /> <b>Xác nhận mật khẩu <span style={{ color: 'red' }}>*</span></b>
                <Form.Control
                  className="input ms-2 "
                  type="password"
                  onChange={(event) => setConfirm(event.target.value)}
                />
              </Row>

              <Row>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="m-3">
                    <Row>
                    <Col>
                      <Form.Check
                        inline
                        label="Ứng viên"
                        value="Ứng viên"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={(event) => setRole(event.target.value)}
                      />
                    </Col>

                    <Col sm={4} md={4}></Col>

                    <Col>
                      <Form.Check
                        inline
                        label="Nhà tuyển dụng"
                        value="Nhà tuyển dụng"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(event) => setRole(event.target.value)}
                      />
                    </Col>
                    </Row>
                  </div>
                ))}
              </Row>

              <Row className="text-center">
                <Link to={"/login"}> Đã có tài khoản? </Link>
              </Row>

              <Row className="mt-2">
                <Button className="button-submit" type="submit">
                  {" "}
                  Hoàn tất{" "}
                </Button>
              </Row>
            </Form.Group>

            <Link to={"/candidate"}><Button> test </Button></Link>
            <Link to={"/recruiter"}><Button> test </Button></Link>
          </Form>
        </Col>
        <Col sm={3} md={3}></Col>
      </Row>
    </Container>
  );
}
