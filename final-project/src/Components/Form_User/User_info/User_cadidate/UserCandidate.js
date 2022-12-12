import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { UserContext } from "../../../../Context/UserContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { isVietnamesePhoneNumberValid } from "../../../../utils/validate";
import "../User_cadidate/candidate.css";

export default function UserCandidate() {
  const {
    name,
    setName,
    gender,
    setGender,
    age,
    setAge,
    phone,
    setPhone,
    address,
    setAddress,
    category,
    setCategory,
    description,
    setDescription,
    updateCandidateInfo,
    setShowLogin,
    currentUser,
    setCurrentUser,
  } = useContext(UserContext);
  const navigate = useNavigate(null);

  const [nameEmpty, setNameEmpty] = useState(false);
  const [genderEmpty, setGenderEmpty] = useState(false);
  const [ageEmpty, setAgeEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [categoryEmpty, setCategoryEmpty] = useState(false);
  const [descriptEmpty, setDescriptEmpty] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [categories, setCategories] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [imageData,setImageData] = useState("")
  const [token,setToken] = useState('')
  const [ckEditorOutput, setCkEditorOutput] = useState(null);

  useEffect(()=>{
    getAllCategory()
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setUserInfo(user)
    if(user.avatar){
      const splitString = user?.avatar?.split("/");
      const imageString = splitString[1] + "/".concat(splitString[2]);
      setImageData(imageString);
      return;
    }if(user.info){
      setName(user.info.fullName)
      setAge(user.info.age)
      setPhone(user.info.phoneNumber)
      setAddress(user.info.address)
      return
    }
  },[])
  const getAllCategory = async () => {
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
        setCategories(data);
      });
    return all;
  };
  const getFile = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmitAvarta = async (e) => {
    e.preventDefault();
    console.log("token", token);
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
        console.log('data',data);
        const splitString = data.path.split("/");
        const imageString = splitString[1] + "/".concat(splitString[2]);
        setImageData(imageString);
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.avatar = data.path;
        console.log("user", user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        return data;
      });
    return uploadImage;
  };

  const handleSubmitUpdateCandidate = (event) => {
    event.preventDefault();

    if (!name || name == null) {
      setNameEmpty(true);
      return;
    } else {
      setNameEmpty(false);
    }

    if (!gender || gender == null) {
      setGenderEmpty(true);
      return;
    } else {
      setGenderEmpty(false);
    }

    if (!age || age == null) {
      setAgeEmpty(true);
      return;
    } else {
      setAgeEmpty(false);
    }

    if (age < 18) {
      setAgeErr(true);
      return;
    } else {
      setAgeErr(false);
    }

    if (!phone || phone == null) {
      setPhoneEmpty(true);
      return;
    } else {
      setPhoneEmpty(false);
    }

    if (!isVietnamesePhoneNumberValid(phone)) {
      setPhoneErr(true);
      return;
    } else {
      setPhoneErr(false);
    }

    if (!address || address == null) {
      setAddressEmpty(true);
      return;
    } else {
      setAddressEmpty(false);
    }

    if (!category || category == null) {
      setCategoryEmpty(true);
      return;
    } else {
      setDescriptEmpty(false);
      setCategoryEmpty(false);
    }
      setDescriptEmpty(false);

      updateCandidateInfo(ckEditorOutput);
      setShowLogin(false);
      // navigate("/");
  };

  return (
    <div class="form-container-candidate">
      <div className="form-candidate-content">
        <div className="form-candidate-description">
          <h1 className="form-candidate-header"> Tài khoản</h1>
          <p className="form-candidate-header-content">
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
        className="p-2 text-start form-candidate"
        onSubmit={handleSubmitUpdateCandidate}
      >
        <Form.Group>
          <h1 className="form-candidate-header"> Thông tin ứng viên </h1>
          <Row>
            <Col sm={6} md={6}>
              <Row className="text-start">
                <Form.Label />{" "}
                <b>
                  Họ và Tên<span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="text"
                  maxLength={100}
                  defaultValue={userInfo?.info?.fullName}
                  onChange={(event) => setName(event.target.value)}
                />
                {nameEmpty && (
                  <p className="text"> Họ và Tên không được để trống</p>
                )}
              </Row>
            </Col>

            <Col sm={6} md={6}>
              <Row className="ms-1">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Giới tính<span style={{ color: "red" }}>*</span>{" "}
                </b>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="m-2">
                    <Form.Check
                      inline
                      label="Nam"
                      name="group1"
                      value="Nam"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Nữ"
                      name="group1"
                      value="Nữ"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                ))}
                {genderEmpty && (
                  <p className="text"> Giới tính không được để trống</p>
                )}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} md={6}>
              <Row className="text-start">
                <Form.Label />{" "}
                <b>
                  {" "}
                  Tuổi <span style={{ color: "red" }}>*</span>{" "}
                </b>
                <Form.Control
                  className="input ms-2"
                  type="number"
                  min={18}
                  max={100}
                  defaultValue={userInfo?.info?.age}
                  onChange={(event) => setAge(event.target.value)}
                />
                {ageEmpty && <p className="text"> Tuổi không được để trống</p>}
                {ageErr && <p className="text"> Tuổi không được nhỏ hơn 18</p>}
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
                  defaultValue={userInfo?.info?.phoneNumber}
                  onChange={(event) => setPhone(event.target.value)}
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
              defaultValue={userInfo?.info?.address}
              onChange={(event) => setAddress(event.target.value)}
            />
            {addressEmpty && (
              <p className="text"> Địa chỉ không được để trống</p>
            )}
          </Row>

          <Row className="row-form">
            <Form.Label />{" "}
            <b>
              Lĩnh vực<span style={{ color: "red" }}>*</span>
            </b>
            <Form.Select
              className="input ms-2"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option></option>
              {categories?.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {categoryEmpty && (
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
            {/* {descriptEmpty && (
              <p className="text"> Mô tả không được để trống</p>
            )}
            {descriptEmpty && (
              <p className="text"> Mô tả không được để trống</p>
            )} */}
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
            <Col>
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
