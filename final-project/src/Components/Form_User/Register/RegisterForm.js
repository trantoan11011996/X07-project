import React, { useContext, useState } from "react";
import { Card, Col, Container, Form, Row, Button, InputGroup, Modal } from "react-bootstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { isEmail, isEmpty, isMatch, isPassword } from "../../../utils/validate";
import "../Register/register.css";
import bannerRegister from "../../../img/image-banner.webp"
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
    setShowLogin,
    showLogin
  } = useContext(UserContext);

  const navigate = useNavigate();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [emailExsistAlert, setEmailExsistAlert] = useState(false)
  const [passErr, setPassErr] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [confirmPassErr, setConfirmPassErr] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);
  const [confirmEmpty, setConfirmEmpty] = useState(false);
  const [roleEmpty, setRoleEmpty] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false)

  
  const checkRole = (role) => {
    if (role == "candidate") {
      navigate("/candidate");
    } if (role == "recruiter") {
      navigate("/recruiter");
    }
  };

  const handleClick1 = () => {
    setVisible1(!visible1);
  };

  const handleClick2 = () => {
    setVisible2(!visible2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || email == null) {
      setEmailEmpty(true)
      return
    } else {
      setEmailEmpty(false)
      setEmailExsistAlert(false)
    }

    if (!password || password== null) {
      setPassEmpty(true)
      return
    } else {
      setPassEmpty(false)
    }

    if (!confirmPassword || confirmPassword == null) {
      setConfirmEmpty(true)
      return
    } else {
      setConfirmEmpty(false)
    }

    if (!isMatch(password, confirmPassword)) {
      setConfirmPassErr(true)
      return
    } else {
      setConfirmPassErr(false)
    }

    if (!role || role == null) {
      setRoleEmpty(true)
      return
    } else {
      setRoleEmpty(false)
    }

    if (!isPassword(password)) {
      setPassErr(true)
      return
    } else {
      setPassErr(false)
    }

    if (!isEmail(email)) {
      setEmailErr(true)
      return
    } else {
      setEmailErr(false)
    }
    if (isEmail(email) && isPassword(password) && isMatch(password, confirmPassword)) {
      const user = await registerUser();
      console.log('user',user);
      // if (user.message) {
      //   setEmailExsistAlert(true)
      //   return
      // } else {
      //   setEmailExsistAlert(false)
      // }
      // registerUser()
      // checkRole(role)

    }
  };

  return (
    <Container fluid>
      <Row className="container-register">
        <Col className="container-register-banner" sm={4} md={6}>
          <img className="register-banner" src={bannerRegister}></img>
        </Col>
        <Col className="form-container" sm={4} md={6}>
          <Form className="form-register text-start" onSubmit={handleSubmit}>
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
                {emailExsistAlert && <p className="text">Email đã tồn tại</p>}
                {emailEmpty && <p className="text">Email không được để trống</p>}
                {EmailErr && <p className="text"> Hãy nhập email đúng định dạng</p>}
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
                {passEmpty && (<p className="text">Mật khẩu không được để trống</p>)}
                {passErr && (<p className="text">Mật khẩu phải bao gồm 1 chữ số, 1 ký tự đặc biệt, 1 chữ hoa, 1 chữ thường</p>)}
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
                {confirmEmpty && (<p className="text">Xác nhận mật khẩu không được để trống</p>)}
                {confirmPassErr && (<p className="text">Mật khẩu và xác nhận mật khẩu phải trùng khớp</p>)}
              </Row>

              <Row>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="m-3">
                    <Row>
                      <Col sm={5} md={5}>
                        <Form.Check
                          inline
                          label="Ứng viên"
                          value="candidate"
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
                          value="recruiter"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          onChange={(event) => setRole(event.target.value)}
                        />
                      </Col>
                    </Row>
                  </div>
                ))}
                {roleEmpty && (<p className="text">Vai trò không được để trống</p>)}
              </Row>


              <Row className="text-center">
                <Link to={"/login"}> Đã có tài khoản? </Link>
              </Row>

              <Row className="mt-2">
                <Button className="button-submit" type="submit">
                  {" "}
                 Đăng kí{" "}
                </Button>
              </Row>

            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
