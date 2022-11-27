import React, { useContext, useState } from "react";
import { Card, Col, Container, Form, Row, Button, InputGroup} from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { isEmail, isEmpty, isMatch, isPassword } from "../../../utils/validate";
import "../Register/register.css";

export default function RegisterForm() {
  const {
    setEmail,
    setPassword,
    setRole,
    email,
    password,
    role,
    setConfirmPassword,
    confirmPassword,
    registerUser,
    currentUser,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const checkRole = (role) => {
    if (role === "Ứng viên") {
      navigate("/candidate");
    } else {
      navigate("/recruiter");
    }
  };

  const handleClick1 = () => {
    setVisible1(!visible1);
  };

  const handleClick2 = () => {
    setVisible2(!visible2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !role) {
      return alert("Hãy nhập đầy đủ thông tin ");
    } else if (!isEmail(email)) {
      return alert("Hãy nhập email đúng định dạng");
    } else if (!isPassword(password)) {
      return alert(
        "Mật khẩu phải bao gồm 1 chữ số, 1 ký tự đặc biệt, 1 chữ hoa, 1 chữ thường"
      );
    } else if (!isMatch(password, confirmPassword)) {
      return alert("Mật khẩu và xác nhận mật khẩu phải trùng khớp");
    } else if (
      isEmail(email) &&
      isPassword(password) &&
      isMatch(password, confirmPassword)
    ) {
      registerUser()
      checkRole(role);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={3} md={3}></Col>

        <Col className="form-container" sm={7} md={7}>
          <Form className="p-5 text-start shadow" onSubmit={handleSubmit}>
            <Form.Group>
              <h1 className="register mt-2 text-center form-register-header">
                {" "}
                ĐĂNG KÝ
              </h1>
              <Row>
                <Form.Label />{" "}
                <b>
                 Địa chỉ Email <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group">
                  <Form.Control
                    className="input"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row>
                <Form.Label className="mt-2" />{" "}
                <b>
                  Mật khẩu <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group">
                  <Form.Control
                    className="input border-right"
                    type={visible1 ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputGroup.Text
                    className="input_icon"
                    onClick={handleClick1}
                  >
                    {visible1 ? <MdVisibility /> : <MdVisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
              </Row>

              <Row>
                <Form.Label className="mt-2" />{" "}
                <b>
                  Xác nhận mật khẩu <span style={{ color: "red" }}>*</span>
                </b>
                <InputGroup className="input-group">
                  <Form.Control
                    className="input border-right"
                    type={visible2 ? "text" : "password"}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <InputGroup.Text
                    className="input_icon"
                    onClick={handleClick2}
                  >
                    {visible2 ? <MdVisibility /> : <MdVisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
              </Row>

              <Row>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="m-3">
                    <Row>
                      <Col sm={5} md={5}>
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

                      <Col sm={1} md={1}></Col>

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
          </Form>
        </Col>
        <Col sm={2} md={2}></Col>
      </Row>
    </Container>
  );
}
