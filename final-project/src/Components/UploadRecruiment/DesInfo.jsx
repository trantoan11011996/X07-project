import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
export default function DesInfo() {
    const {
        allCategory,
        allLocation,
        setExperience,
        setNumberApplicant,
        setLocation,
        setCategory,
      } = useContext(JobContext);
      const {
        warningNumberApplicant,
        warningExp,
        warningCategory,
        warningLocation,
        warningDescription,
        setCkEditorOutput
      } = useContext(AuthContext)

      const handleCkEditorChanges = (event, editor) => {
        setCkEditorOutput(editor.getData());
      };
  return (
    <div className="body-upload">
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
  );
}