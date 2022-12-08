import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "../UploadRecruiment/Upload.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import pretty from "pretty";
import { JobContext } from "../../Context/JobContext";
const { RangePicker } = DatePicker;
export default function UploadRecruiment() {
  const [deadline, setDeadline] = useState([]);
  const [token, setToken] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [imageData, setImageData] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);
  const {allCategory,allLocation} = useContext(JobContext)
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);
  
  const handleCkEditorChanges = (event, editor) => {
    setCkEditorOutput(editor.getData());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('ck',ckEditorOutput);
  };
  console.log(imageData);
  const showDate = (date, dateString) => {
    console.log("string", dateString);
    setDeadline(dateString);
  };

  return (
    <div className="container-upload">
      <div className="form-container-upload">
        <h1 className="header-form-upload">Đăng tin tuyển dụng</h1>
        <Form className="form-upload" onSubmit={handleSubmit}>
          <div className="form-group-container">
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề tuyển dụng <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                placeholder="Nhập tiêu đề tuyển dụng"
                // required
              />
            </Form.Group>
            <Form.Label>Vị trí việc làm <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                maxLength={300}
                type="text"
                placeholder="ví dụ : Nhân Viên Kinh Doanh"
                // required
              />
            </Form.Group>

            <Form.Group className="form-deadline">
              <Form.Label>Thời hạn ứng tuyển</Form.Label>
              <Space direction="vertical" size={12}>
                <RangePicker
                  format={"DD/MM/YYYY"}
                  onChange={(date, dateString) => showDate(date, dateString, 1)}
                />
              </Space>
            </Form.Group>
            <Form.Label>Hình thức làm việc <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              <option value="fulltime">Toàn thời gian</option>
              <option value="parttime">bán thời gian</option>
            </Form.Select>
            <Form.Label>Cấp bậc <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              <option value="Thực tập">Thực Tập</option>
              <option value="nhân viên">Nhân Viên</option>
              <option value="trường phòng">Trường Phòng</option>
            </Form.Select>

            <Form.Label>Độ tuổi yêu cầu <span style={{color:"red"}}>*</span></Form.Label>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    min={18}
                    type="text"
                    // required
                    placeholder="ví dụ: 18-25"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number"  placeholder="Đến" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Label>Lĩnh vực tuyển dụng <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              {allCategory?.map((item,index)=>{
                return(
                  <option value={item._id} key={index}>{item.name}</option>
                )
              })}
            </Form.Select>
            <Form.Label>Địa điểm tuyển dụng<span style={{color:"red"}}>*</span></Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              {allLocation?.map((item,index)=>{
                return(
                  <option value={item._id} key={index}>{item.name}</option>
                )
              })}
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Mức Lương <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                placeholder="2,000,000-3,000,000"
                // required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Số lượng ứng viên <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control max="10000" min="0" type="number"  />
            </Form.Group>

            <Form.Label>Kinh nghiệm làm việc</Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              <option value="Mới tốt nghiệp/ chưa có kinh nghiệm">
                Mới tốt nghiệp/ chưa có kinh nghiệm
              </option>
              <option value="0 - 1 năm">
                0 - 1 năm{" "}
              </option>
              <option value="1 - 3 năm">1 - 3 năm</option>
              <option value="3 - 5 năm">3 - 5 năm</option>
              <option value="> 5 năm">
                <span>&gt;</span> 5 năm
              </option>
            </Form.Select>
            <Form.Label>Mô tả bổ sung <span style={{color:"red"}}>*</span></Form.Label>
            <CKEditor
              editor={ClassicEditor}
              onChange={handleCkEditorChanges}
              style={{ padding: "20px" }}
            />
          </div>
          <button className="btn-upload" variant="primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
      <div></div>
    </div>
  );
}
