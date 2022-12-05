import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Footer/Footer.css"
import { SiVerizon } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-footer-content">
        <div className="footer-content">
          <Row className="row-footer-content">
            <Col md={3}>
              <ul className="list-footer-content">
                <p className="header-footer-content">về MindXCareer</p>
                <div className="wrap-content-item">
                  <li className="footer-content-item">Về chúng tôi</li>
                  <li className="footer-content-item">Quy chế hoạt động</li>
                  <li className="footer-content-item">Quy định bảo mật</li>
                  <li className="footer-content-item">Thỏa thuận sử dụng</li>
                  <li className="footer-content-item">Liên hệ</li>
                </div>
              </ul>
            </Col>
            <Col md={3}>
              <div className="for-candidate">
                <ul className="list-footer-content">
                  <p className="header-footer-content">Dành cho ứng viên</p>
                  <div className="wrap-content-item">
                    <li className="footer-content-item">Việc làm</li>
                    <li className="footer-content-item">Công ty</li>
                    <li className="footer-content-item">Tìm việc nhanh</li>
                  </div>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <ul className="list-footer-content">
                <p className="header-footer-content">
                  Việc làm theo ngành nghề
                </p>
              </ul>
            </Col>
            <Col md={3}>
              <p className="header-footer-content">Chứng nhận</p>
              <div className="verify-footer">
                <div className="wrap-verify-icon">
                  <SiVerizon className="verify-icon"></SiVerizon>
                </div>
                <div className="verify-content">
                  <p>Đã chứng nhận</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container-footer-contact">
        <div className="logo-contact">
          <p>LOGO</p>
        </div>
          <div className="contact-content">
            <p>
              Tuyển dụng, tìm kiếm việc làm trực tuyến tại MindxCareer.vn |
              Customer Care:(028) 3867 1711 / contact@MindxCareer.vn
            </p>
            <p>
              CTY TNHH MINDXCAREER | GPĐKKD số 0123456789 do Sở KHĐT Kênh Nước
              Đen cấp ngày 24/11/2022
            </p>
            <p>
              88/2H Tái Thiết, Phường 11, Quận Tân Bình, Tp HCM Copyright ©
              2007-2020 by https://www.mindxcareer.vn All rights reserved.
            </p>
          </div>
      </div>
    </div>
  );
}
