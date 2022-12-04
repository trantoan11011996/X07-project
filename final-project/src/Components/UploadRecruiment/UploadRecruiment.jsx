import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "../UploadRecruiment/Upload.css"
const { RangePicker } = DatePicker;

export default function UploadRecruiment() {
  const [deadline,setDeadline] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('deadline',deadline);
  };
  const showDate = (date, dateString) => {
    console.log("string", dateString);
    setDeadline(dateString)
  };
  return (
    <div className="container-upload">
      <div className="form-container-upload">
        <Form className="form-upload" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề tuyển dụng</Form.Label>
            <Form.Control
              maxLength={100}
              type="text"
              placeholder="Nhập tiêu đề tuyển dụng"
              required
            />
          </Form.Group>
          <Form.Label>Vị trí việc làm </Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              maxLength={300}
              type="text"
              placeholder="Nhập vị trí công việc"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Thời hạn ứng tuyển</Form.Label>
            <Space direction="vertical" size={12}>
              <RangePicker
                format={"DD/MM/YYYY"}
                onChange={(date, dateString) => showDate(date, dateString, 1)}
              />
            </Space>
          </Form.Group>
          <Form.Label>Hình thức làm việc</Form.Label>
          <Form.Select className="mb-3">
            <option></option>
            <option value="fulltime">Toàn thời gian</option>
            <option value="parttime">bán thời gian</option>
          </Form.Select>
          <Form.Label>Cấp bậc</Form.Label>
          <Form.Select className="mb-3">
            <option></option>
            <option value="Thực tập">Thực Tập</option>
            <option value="nhân viên">Nhân Viên</option>
            <option value="trường phòng">Trường Phòng</option>
          </Form.Select>

          <Form.Label>Độ tuổi yêu cầu</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control min={18} type="number" required placeholder="Từ" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="number" required placeholder="Đến"/>
              </Form.Group>
            </Col>
          </Row>

          <Form.Label>Lĩnh vực tuyển dụng</Form.Label>
          <Form.Select className="mb-3">
            <option></option>
            <option value>Kể toán</option>
            <option value>IT/phần mềm</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Mức Lương</Form.Label>
            <Form.Control
              maxLength={100}
              type="text"
              placeholder="2.000.000-3.000.000"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số lượng ứng viên</Form.Label>
            <Form.Control max="10000" min="0" type="number" required />
          </Form.Group>

          <Form.Label>Kinh nghiệm làm việc</Form.Label>
          <Form.Select className="mb-3">
            <option></option>
            <option value="Mới tốt nghiệp/ chưa có kinh nghiệm">
              Mới tốt nghiệp/ chưa có kinh nghiệm
            </option>
            <option value="< 1 năm">
              <span>&lt;</span> 1 năm{" "}
            </option>
            <option value="1 - 3 năm">1 - 3 năm</option>
            <option value="3 - 5 năm">3 - 5 năm</option>
            <option value="> 5 năm">
              <span>&gt;</span> 5 năm
            </option>
          </Form.Select>
          <button variant="primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
