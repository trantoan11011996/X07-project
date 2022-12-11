import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserContext } from "../../../Context/UserContext";
import "../updateInfoUser/UpdateInfo.css";
import UpdatePass from "../UpdatePassword/UpdatePassword";
import UserCandidate from "../User_info/User_cadidate/UserCandidate";
import UserRecruiter from "../User_info/User_recruiter/UserRecruiter";
import MetaData from "../../MetaData/MetaData";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import { useNavigate } from "react-router-dom";
export default function UpdateInfoUser() {
  const [activeUpdatePass, setActiveUpdatePass] = useState(true);
  const [activeUpdateCandidate, setActiveUpdateCandidate] = useState(false);
  const [activeUpdateRecruiter, setActiveRecruiter] = useState(false);
  const [formPassword, setFormPassword] = useState(true);
  const [formCandidate, setFormCandidate] = useState(false);
  const [formRecruiter, setFormRecruiter] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const navigate = useNavigate();
;
  const handleActiveUpdatePass = () => {
    setActiveUpdatePass(true);
    setActiveUpdateCandidate(false);
    setActiveRecruiter(false);
    setFormPassword(true);
    setFormCandidate(false);
    setFormRecruiter(false);
  };
  const handleActiveUpdateCandidate = () => {
    setActiveUpdateCandidate(true);
    setActiveUpdatePass(false);
    setActiveRecruiter(false);
    setFormPassword(false);
    setFormCandidate(true);
    setFormRecruiter(false);
  };
  const handleActiveUpdateRecruiter = () => {
    setActiveRecruiter(true);
    setActiveUpdateCandidate(false);
    setActiveUpdatePass(false);
    setFormPassword(false);
    setFormCandidate(false);
    setFormRecruiter(true);
  };
  return (
    <div className="update-info-user">
      <MetaData title="Update user info" />
      <Container>
        <Row>
          <Col md={4}>
            <Row className="container-sidebar">
              <Col md={12}>
                <div
                  className={
                    activeUpdatePass
                      ? "sidebar-update active"
                      : "sidebar-update"
                  }
                  onClick={(e) => handleActiveUpdatePass()}
                >
                  <h1>Cập nhật mật khẩu</h1>
                  <p>Thay đổi mật khẩu</p>
                </div>
              </Col>
              <Col md={12}>
                {(currentUser?.role === "candidate" ||
                  user?.role === "candidate") && (
                  <div
                    className={
                      activeUpdateCandidate
                        ? "sidebar-update active"
                        : "sidebar-update"
                    }
                    onClick={(e) => handleActiveUpdateCandidate()}
                  >
                    <h1>Cập nhật thông tin ứng viên</h1>
                    <p>Dành cho ứng viển</p>
                  </div>
                )}
              </Col>
              <Col md={12}>
                {(currentUser?.role === "recruiter" ||
                  user?.role === "recruiter") && (
                  <div
                    className={
                      activeUpdateRecruiter
                        ? "sidebar-update active"
                        : "sidebar-update"
                    }
                    onClick={(e) => handleActiveUpdateRecruiter()}
                  >
                    <h1>Cập nhật thông tin nhà tuyển dụng</h1>
                    <p>Dành nhà tuyển dụng</p>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <div className="form-update">
              {formPassword && <UpdatePassword />}
              {formCandidate && <UserCandidate />}
              {formRecruiter && <UserRecruiter />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
