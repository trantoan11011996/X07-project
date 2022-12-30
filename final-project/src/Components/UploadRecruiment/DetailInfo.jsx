import React, { useContext, useState } from "react";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import { AuthContext } from "../../Context/Context";
const { RangePicker } = DatePicker;

export default function DetailInfo(){
    const {
        setType,
        setLevel,
        setAgeFrom,
        setAgeTo,
        setSalary
      } = useContext(JobContext);
      const {
        warningType,
        warningLevel,
        warningAge,
        warningSalary,
      } = useContext(AuthContext)

    return (
        <div className="body-upload">
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Hình thức làm việc <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setType(e.target.value)}>
                  <option></option>
                  <option value="fulltime">Toàn thời gian</option>
                  <option value="parttime">bán thời gian</option>
                </Form.Select>
                {warningType && (
                  <Form.Text className="text-danger">
                    <a>Đây là trường bắt buộc không được bỏ trống</a>
                  </Form.Text>
                )}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Cấp bậc <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setLevel(e.target.value)}>
                  <option></option>
                  <option value="Thực tập">Thực Tập</option>
                  <option value="nhân viên">Nhân Viên</option>
                  <option value="trường phòng">Trường Phòng</option>
                </Form.Select>
                {warningLevel && (
                  <Form.Text className="text-danger">
                    <a>Đây là trường bắt buộc không được bỏ trống</a>
                  </Form.Text>
                )}
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Mức Lương <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                placeholder="2.000.000-3.000.000"
                onChange={(e) => setSalary(e.target.value)}
                // required
              />
              {warningSalary && (
                <Form.Text className="text-danger">
                  <a>Đây là trường bắt buộc không được bỏ trống</a>
                </Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu từ: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    min={18}
                    placeholder="18"
                    onChange={(e) => setAgeFrom(e.target.value)}
                  />
                  {warningAge && (
                    <Form.Text className="text-danger">
                      <a>Đây là trường bắt buộc không được bỏ trống</a>
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu đến: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    min={20}
                    max={80}
                    placeholder="20"
                    onChange={(e) => setAgeTo(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
        </div>
    )
}