import React from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames/bind"
import styles from  "../Footer/Footer.module.css"

import { SiVerizon } from "react-icons/si";
const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("container-footer-content")}>
        <div className={cx("footer-content")}>
          <Row className={cx("row-footer-content")}>
            <Col md={3}>
              <ul className={cx("list-footer-content")}>
                <p className={cx("header-footer-content")}>về MindXCareer</p>
                <div className={cx("wrap-content-item")}>
                  <li className={cx("footer-content-item")}>Về chúng tôi</li>
                  <li className={cx("footer-content-item")}>Quy chế hoạt động</li>
                  <li className={cx("footer-content-item")}>Quy định bảo mật</li>
                  <li className={cx("footer-content-item")}>Thỏa thuận sử dụng</li>
                  <li className={cx("footer-content-item")}>Liên hệ</li>
                </div>
              </ul>
            </Col>
            <Col md={3}>
              <div className={cx("for-candidate")}>
                <ul className={cx("list-footer-content")}>
                  <p className={cx("header-footer-content")}>Dành cho ứng viên</p>
                  <div className={cx("wrap-content-item")}>
                    <li className={cx("footer-content-item")}>Việc làm</li>
                    <li className={cx("footer-content-item")}>Công ty</li>
                    <li className={cx("footer-content-item")}>Tìm việc nhanh</li>
                  </div>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <ul className={cx("list-footer-content")}>
                <p className={cx("header-footer-content")}>
                  Việc làm theo ngành nghề
                </p>
              </ul>
            </Col>
            <Col md={3}>
              <p className={cx("header-footer-content")}>Chứng nhận</p>
              <div className={cx("verify-footer")}>
                <div className={cx("wrap-verify-icon")}>
                  <SiVerizon className={cx("verify-icon")}></SiVerizon>
                </div>
                <div className={cx("verify-content")}>
                  <p>Đã chứng nhận</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx("container-footer-contact")}>
        <div className={cx("logo-contact")}>
          <p>LOGO</p>
        </div>
          <div className={cx("contact-content")}>
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
