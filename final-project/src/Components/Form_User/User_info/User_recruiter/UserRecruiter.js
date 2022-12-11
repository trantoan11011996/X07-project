import React, { useState, useContext, useEffect } from "react";
import { Container, Card, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";
import {
  isEmail,
  isVietnamesePhoneNumberValid,
} from "../../../../utils/validate";
import "../User_recruiter/recruiter.css";
import { MdAccountCircle } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function UserRecruiter() {
  const navigate = useNavigate(null);
  const {
    currentUser,
    setCurrentUser,
    companyEmail,
    companyName,
    companyPhone,
    companyAddress,
    companyDescription,
    category,
    setCompanyEmail,
    setCompanyPhone,
    setCompanyAddress,
    setCategory,
    setCompanyDescription,
    setCompanyName,
    setFieldActivity,
    updateRecruiterInfo,
    setShowLogin,
  } = useContext(UserContext);

  const [companyEmpty, setCompanyEmpty] = useState(false);
  const [websiteEmpty, setWebsiteEmpty] = useState(false);
  const [companyEmailEmpty, setCompanyEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [operationSectorEmpty, setOperationSectorEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [operationSectorForm, setOperationSectorForm] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [operationSectorAuto, setOperationSectorAuto] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [imageData, setImageData] = useState("");
  const [token, setToken] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);

  useEffect(() => {
    getAllOperationSector();
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.avatar){
      const splitString = user?.avatar?.split("/");
      const imageString = splitString[1] + "/".concat(splitString[2]);
      setImageData(imageString);
      return;
    }
  }, []);

  const getFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmitAvarta = async (e, editor) => {
    e.preventDefault();
    console.log(token);
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
        console.log('data',data.path);
        const splitString = data.path.split("/");
        const imageString = splitString[1] + "/".concat(splitString[2]);
        setImageData(imageString);
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.avatar = data.path;
        localStorage.setItem("currentUser", JSON.stringify(user));
        return data;
      });
    return uploadImage;
  };

  const handleSubmitUpdateRecruiter = (event, editor) => {
    event.preventDefault();
    if (!companyName || companyName == null) {
      setCompanyEmpty(true);
      return;
    } else {
      setCompanyEmpty(false);
    }
    if (!companyEmail || companyEmail == null) {
      setCompanyEmailEmpty(true);
      return;
    } else {
      setCompanyEmailEmpty(false);
    }

    if (!isEmail(companyEmail)) {
      setEmailErr(true);
      return;
    } else {
      setEmailErr(false);
    }

    if (!companyPhone || companyPhone == null) {
      setPhoneEmpty(true);
      return;
    } else {
      setPhoneEmpty(false);
    }

    if (!isVietnamesePhoneNumberValid(companyPhone)) {
      setPhoneErr(true);
      return;
    } else {
      setPhoneErr(false);
    }

    if (!companyAddress || companyAddress == null) {
      setAddressEmpty(true);
      return;
    } else {
      setAddressEmpty(false);
    }

    if (!category || category == null) {
      setOperationSectorEmpty(true);
      return;
    } else {
      setOperationSectorEmpty(false);
    }

    if (!ckEditorOutput || ckEditorOutput == null) {
      setDescriptEmpty(true);
      return;
    } else {
      setDescriptEmpty(false);
      console.log(ckEditorOutput);
      updateRecruiterInfo(
        companyName,
        companyEmail,
        companyPhone,
        companyAddress,
        ckEditorOutput,
        category
      );
      setShowLogin(false);
      // navigate("/");
    }
  };

  const getAllOperationSector = async () => {
    const all = await fetch(
      `https://xjob-mindx-production.up.railway.app/api/users/category`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOperationSectorForm(data);
      });
    return all;
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    getAllOperationSector(token);
  }, []);

  return (
    <div className="form-container-recruiter">
      <div className="form-recruiter-content">
        <div className="form-recruiter-description">
          <h1 className="form-recruiter-header"> Tài khoản</h1>
          <p className="form-recruiter-header-content">
            Hãy cập nhật thông tin mới nhất.
          </p>
        </div>
        <div className="upload-avarta-container">
          <div className="avarta">
            {imageData ? (
              <img
                className="image-avarta"
                src={`https://xjob-mindx-production.up.railway.app/${imageData}`}
              ></img>
            ) : (
              <MdAccountCircle className="icon-avarta"></MdAccountCircle>
            )}
          </div>
          <form className="form-upload-avarta" onSubmit={handleSubmitAvarta}>
            <input type="file" name="formFile" onChange={getFile}></input>
            <button className="submit-img" type="submit">
              Lưu
            </button>
          </form>
        </div>
      </div>
      <Form
        className="p-2 text-start form-recruiter"
        onSubmit={handleSubmitUpdateRecruiter}
      >
        <Form.Group>
          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Tên công ty<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Control
              className="input ms-2 "
              type="text"
              maxLength={100}
              defaultValue={userInfo?.name}
              onChange={(event) => setCompanyName(event.target.value)}
            />
            {companyEmpty && (
              <p className="text">Tên công ty không được để trống</p>
            )}
          </Row>
          <Row className="mt-1">
            <Col sm={6} md={6}>
              <Row className="text-start">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Email công ty<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="email"
                  defaultValue={userInfo?.email}
                  onChange={(event) => setCompanyEmail(event.target.value)}
                />
                {companyEmailEmpty && (
                  <p className="text">Email không được để trống</p>
                )}
                {EmailErr && (
                  <p className="text"> Hãy nhập email đúng định dạng</p>
                )}
              </Row>
            </Col>

            <Col sm={6} md={6}>
              <Row className="ms-1">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Số điện thoại<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  defaultValue={userInfo?.phoneNumber}
                  onChange={(event) => setCompanyPhone(event.target.value)}
                />
                {phoneEmpty && (
                  <p className="text"> Số điện thoại không được để trống</p>
                )}
                {phoneErr && (
                  <p className="text"> Hãy nhập số điện thoại Việt Nam</p>
                )}
              </Row>
            </Col>
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Địa chỉ<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Control
              className="input ms-2"
              type="text"
              maxLength={200}
              defaultValue={userInfo?.address}
              onChange={(event) => setCompanyAddress(event.target.value)}
            />
            {addressEmpty && (
              <p className="text"> Địa chỉ không được để trống</p>
            )}
          </Row>
          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Lĩnh vực<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <Form.Select
              className="input ms-2"
              onChange={(event) => setCategory(event.target.value)}
              defaultValue={operationSectorAuto}
            >
              <option>{operationSectorAuto}</option>
              {operationSectorForm?.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {operationSectorEmpty && (
              <p className="text"> Lĩnh vực không được để trống</p>
            )}
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              {" "}
              Mô tả bổ sung<span style={{ color: "red" }}>*</span>{" "}
            </b>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => setCkEditorOutput(editor.getData())}
              style={{ padding: "20px" }}
            />
            {descriptEmpty && (
              <p className="text"> Mô tả không được để trống</p>
            )}
          </Row>

          <Row className="mt-5">
            <Col sm={3} md={3}>
              {" "}
            </Col>
            <Col sm={3} md={3}>
              <Button className="button" type="submit">
                {" "}
                Cập nhật{" "}
              </Button>
            </Col>
            <Col sm={3} md={3}>
              <Link to={"/"}>
                <Button variant="light"> Hủy bỏ </Button>
              </Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
