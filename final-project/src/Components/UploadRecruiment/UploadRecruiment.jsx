import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "../UploadRecruiment/Upload.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import pretty from "pretty";
import { JobContext } from "../../Context/JobContext";
import {
  isAge,
  isCategory,
  isDescription,
  isExperience,
  isLevel,
  isLocation,
  isNumberApplicant,
  isPosition,
  isSalary,
  isTitle,
  isType,
} from "../../utils/validate";
import create from "@ant-design/icons/lib/components/IconFont";
import { loginUser } from "../../Actions/authAction";
const { RangePicker } = DatePicker;
export default function UploadRecruiment() {
  const [token, setToken] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);
  const [alert, setAlert] = useState(false);
  const [alerToday, setAlerToday] = useState(false);
  const [warningTitle, setWarningTitle] = useState(false);
  const [warningDescription, setWarningDescription] = useState(false);
  const [warningPosition, setWarningPosition] = useState(false);
  const [warningType, setWarningType] = useState(false);
  const [warningLevel, setWarningLevel] = useState(false);
  const [warningAge, setWarningAge] = useState(false);
  const [warningExp, setWarningExp] = useState(false);
  const [warningSalary, setWarningSalary] = useState(false);
  const [warningNumberApplicant, setWarningNumberApplicant] = useState(false);
  const [warningLocation, setWarningLocaion] = useState(false);
  const [warningCategory, setWarningCategory] = useState(false);

  const {
    allCategory,
    allLocation,
    setTitle,
    setName,
    setDescription,
    setPosition,
    setType,
    setLevel,
    setAgeFrom,
    setAgeTo,
    setExperience,
    setSalary,
    setNumberApplicant,
    setLocation,
    setCategory,
    setDate,
    title,
    name,
    description,
    position,
    type,
    level,
    ageFrom,
    ageTo,
    experience,
    salary,
    numberApplicant,
    location,
    category,
    date,
    createRecruiment,
  } = useContext(JobContext);

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);

  const handleCkEditorChanges = (event, editor) => {
    setCkEditorOutput(editor.getData());
  };

  const submitRecruiment = (e, dateCompare) => {
    e.preventDefault();
    let stringAge = `${ageFrom}-${ageTo}`;
    if (!isTitle(title)) {
      setWarningTitle(true);
      return;
    }
    if (!isPosition(position)) {
      setWarningPosition(true);
      return ;
    }
    if (!isType(type)) {
      setWarningType(true);
      return;
    }
    if (!isLevel(level)) {
      setWarningLevel(true);
      return;
    }
    if (!isSalary(salary)) {
      setWarningSalary(true);
      return;
    }
    if (!isNumberApplicant(numberApplicant)) {
      setWarningNumberApplicant(true);
      return;
    }
    if (!isExperience(experience)) {
      setWarningExp(true);
      return;
    }
    if (!isAge(ageFrom)) {
      setWarningAge(true);
      return;
    }
    if (!isCategory(category)) {
      setWarningCategory(true);
      return;
    }
    if (!isLocation(location)) {
      setWarningLocaion(true);
      return;
    }
    if (!isDescription(ckEditorOutput)) {
      setWarningDescription(true);
      return;
    }
    if (date[0] < formattedToday || date[0] > formattedToday) {
      setAlerToday(true);
      return;
    }
    setWarningTitle(false);
    setWarningPosition(false);
    setWarningType(false);
    setWarningLevel(false);
    setWarningAge(false);
    setWarningExp(false);
    setWarningNumberApplicant(false);
    setWarningSalary(false);
    setWarningCategory(false);
    setWarningLocaion(false);
    setWarningDescription(false);
    createRecruiment(ckEditorOutput, date[0], date[1], stringAge);
  };

  return (
    <div className="container-upload">
      <div className="form-container-upload">
        <h1 className="header-form-upload">Đăng tin tuyển dụng</h1>
        <Form className="form-upload" onSubmit={submitRecruiment}>
          <div className="form-group-container">
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
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Lĩnh vực tuyển dụng <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setCategory(e.target.value)}>
                  <option></option>
                  {allCategory?.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
                {warningCategory && (
                  <Form.Text className="text-danger">
                    <a>Đây là trường bắt buộc không được bỏ trống</a>
                  </Form.Text>
                )}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Địa điểm tuyển dụng<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setLocation(e.target.value)}>
                  <option></option>
                  {allLocation?.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
                {warningLocation && (
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

            <Form.Group className="mb-3">
              <Form.Label>
                Số lượng ứng viên <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                max="10000"
                min="0"
                type="number"
                onChange={(e) => setNumberApplicant(e.target.value)}
              />
              {warningNumberApplicant && (
                <Form.Text className="text-danger">
                  <a>Đây là trường bắt buộc không được bỏ trống</a>
                </Form.Text>
              )}
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Label>Kinh nghiệm làm việc</Form.Label>
                <Form.Select onChange={(e) => setExperience(e.target.value)}>
                  <option></option>
                  <option value="Mới tốt nghiệp/ chưa có">
                    Mới tốt nghiệp/ chưa có kinh nghiệm
                  </option>
                  <option value="0 - 1 năm">0 - 1 năm</option>
                  <option value="1 - 3 năm">1 - 3 năm</option>
                  <option value="3 - 5 năm">3 - 5 năm</option>
                  <option value="> 5">
                    <span>&gt;</span> 5 năm
                  </option>
                </Form.Select>
                {warningExp && (
                  <Form.Text className="text-danger">
                    <a>Đây là trường bắt buộc không được bỏ trống</a>
                  </Form.Text>
                )}
              </Col>
            </Row>
            <Form.Label>
              Mô tả bổ sung <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <CKEditor
              editor={ClassicEditor}
              onChange={handleCkEditorChanges}
              style={{ padding: "20px" }}
            />
            {warningDescription && (
              <Form.Text className="text-danger">
                <a>Đây là trường bắt buộc không được bỏ trống</a>
              </Form.Text>
            )}
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
