import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "../UploadRecruiment/Upload.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import pretty from "pretty";
const { RangePicker } = DatePicker;
export default function UploadRecruiment() {
  const [deadline, setDeadline] = useState([]);
  const [token, setToken] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [imageData, setImageData] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [stringParse, setStringParse] = useState();
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);

  const handleCkEditorChanges = (event, editor) => {
    setCkEditorOutput(editor.getData());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const description = document.getElementById("description-upload");
    description.innerHTML = `
    ${ckEditorOutput}
    `;
    const formData = new FormData();

    formData.append("formFile", selectedFile);
    const uploadImage = await fetch(
      "https://xjob-mindx-production.up.railway.app/api/users/upload-single-file",
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const splitString = data.path.split("/");
        console.log("split 1 ", splitString[1]);
        console.log("split 2", splitString[2]);
        setImageData(splitString[1] + "/".concat(splitString[2]));
        return data;
      });
    return uploadImage;
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
                required
              />
            </Form.Group>
            <Form.Label>Vị trí việc làm <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                maxLength={300}
                type="text"
                placeholder="Nhập vị trí công việc"
                required
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
                    type="number"
                    required
                    placeholder="Từ"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  {/* <Form.Control type="number" required placeholder="Đến" /> */}
                </Form.Group>
              </Col>
            </Row>

            <Form.Label>Lĩnh vực tuyển dụng <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Select className="mb-3">
              <option></option>
              <option value>Kể toán</option>
              <option value>IT/phần mềm</option>
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Mức Lương <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                placeholder="2.000.000VNĐ-3.000.000VNĐ"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Số lượng ứng viên <span style={{color:"red"}}>*</span></Form.Label>
              {/* <Form.Control max="10000" min="0" type="number" required /> */}
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
            <Form.Label>Mô tả bổ sung <span style={{color:"red"}}>*</span></Form.Label>
            <CKEditor
              editor={ClassicEditor}
              onChange={handleCkEditorChanges}
              disabled={disabled}
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
