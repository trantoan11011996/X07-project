import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, isMatch } from "../../../utils/validate";
import "../Register/register.css"

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmpty(email) || isEmpty(password) ) {
      return alert("Hãy nhập email và mật khẩu")
    } else if (!isEmail(email)) {
       return alert("Hãy nhập email đúng định dạng")
    } else if (!isMatch(password, confirm)) {
        return alert("Mật khẩu và xác nhận mật khẩu phải trùng khớp")
    } else if (isEmail(email) && isMatch(password, confirm)) {
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
      <Container className="register">
        <Row>
          <Col sm={3} md={3}></Col>

        <Col sm={6} md={6}>
          <Form
            className="m-2 p-5 text-start shadow"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <h1 className="register text-center"> Đăng Ký </h1>
              <Row>
                <Form.Label /> <b>Email <span style={{color:'red'}}>*</span></b>
                <Form.Control
                  className="input ms-2"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Row>

              <Row>
                <Form.Label /> <b>Mật khẩu <span style={{color:'red'}}>*</span></b>
                <Form.Control
                  className="input ms-2"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Row>

              <Row>
                <Form.Label /> <b>Xác nhận mật khẩu <span style={{color:'red'}}>*</span></b>
                <Form.Control
                  className="input ms-2 "
                  type="password"
                  onChange={(event) => setConfirm(event.target.value)}
                />
              </Row>

              <Row>
                <Col sm={7} md={6}>
                  {["radio"].map((type) => (  
                    <div key={`inline-${type}`} className="m-3">
                      <Form.Check
                        inline
                        label="Ứng viên"
                        value="Ứng viên"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={(event) => setRole(event.target.value)}
                      />
                      <Form.Check
                        inline
                        label="Nhà tuyển dụng"
                        value="Nhà tuyển dụng"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(event) => setRole(event.target.value)}
                      />
                    </div>
                  ))}
                </Col>

                <Col sm={3} md={4} className="m-3">
                  <Link to={"/login"}> Đã có tài khoản? </Link>
                </Col>
              </Row>

              <Row>
                <Col className="ms-2">
                  <Button className="button-submit" type="submit">
                    {" "}
                    Hoàn tất{" "}
                  </Button>
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
