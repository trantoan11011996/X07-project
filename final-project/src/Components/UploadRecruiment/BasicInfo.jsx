import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";
import { DatePicker, Space } from "antd";
import { AuthContext } from "../../Context/Context";
const { RangePicker } = DatePicker;



export default function BasicInfo(){
    const {
        setTitle,
        setPosition,
        setDate,
      } = useContext(JobContext);
      const {
        warningTitle,
        warningPosition,
        alerToday,
      } = useContext(AuthContext)
     return (
        <div className="body-upload">
            <Form.Group className="mb-3">
              <Form.Label>
                Tiêu đề tuyển dụng <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                placeholder="Nhập tiêu đề tuyển dụng"
                onChange={(e) => setTitle(e.target.value)}
                // required
              />
              {warningTitle && (
                <Form.Text className="text-danger">
                  <a>Đây là trường bắt buộc không được bỏ trống</a>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Label>
              Vị trí việc làm <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                maxLength={300}
                type="text"
                placeholder="ví dụ : Nhân Viên Kinh Doanh"
                onChange={(e) => setPosition(e.target.value)}
                // required
              />
              {warningPosition && (
                <Form.Text className="text-danger">
                  <a>Đây là trường bắt buộc không được bỏ trống</a>
                </Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="form-deadline">
                  <Form.Label>Thời hạn ứng tuyển từ: </Form.Label>
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      format={"DD/MM/YYYY"}
                      id="date"
                      name="date"
                      onChange={(e, dateString) => setDate(dateString)}
                    />
                  </Space>
                </Form.Group>
              </Col>
              {alerToday && (
                <Form.Text className="text-danger link-wrong-pass">
                  <a>Ngày khởi tạo phải bằng ngày hiện tại</a>
                </Form.Text>
              )}
            </Row>
        </div>
    )
}