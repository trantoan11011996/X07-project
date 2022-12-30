import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import "../UploadRecruiment/Upload.css";
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
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import { AuthContext } from "../../Context/Context";
import DesInfo from "./DesInfo";

export default function UploadRecruiment() {
  const [token, setToken] = useState("");
  const [ckEditorOutput, setCkEditorOutput] = useState(null);
  const [alert, setAlert] = useState(false);
  const [warningType, setWarningType] = useState(false);
  const [warningLevel, setWarningLevel] = useState(false);
  const [warningAge, setWarningAge] = useState(false);
  const [warningDescription, setWarningDescription] = useState(false);
  const [warningExp, setWarningExp] = useState(false);
  const [warningSalary, setWarningSalary] = useState(false);
  const [warningNumberApplicant, setWarningNumberApplicant] = useState(false);
  const [warningLocation, setWarningLocaion] = useState(false);
  const [warningCategory, setWarningCategory] = useState(false);
  const [warningTitle, setWarningTitle] = useState(false);
  const [warningPosition, setWarningPosition] = useState(false);
  const [alerToday, setAlerToday] = useState(false);
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Thông tin cơ bản",
    "Yêu cầu và vị trí công việc",
    "Mức lương, lĩnh vực, địa điểm và mô tả bổ sung",
  ];

  const pageDisplay = ()=>{
    if(page === 0 ){
      return <BasicInfo/>
    }
    if(page===1){
      return <DetailInfo/>
    }
    if(page===2){
      return <DesInfo/>
    }
  }
  

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);



  // const submitRecruiment = (e, dateCompare) => {
  //   e.preventDefault();
  //   let stringAge = `${ageFrom}-${ageTo}`;
  //   if (!isTitle(title)) {
  //     setWarningTitle(true);
  //     return;
  //   }
  //   if (!isPosition(position)) {
  //     setWarningPosition(true);
  //     return;
  //   }
  //   if (!isType(type)) {
  //     setWarningType(true);
  //     return;
  //   }
  //   if (!isLevel(level)) {
  //     setWarningLevel(true);
  //     return;
  //   }
  //   if (!isSalary(salary)) {
  //     setWarningSalary(true);
  //     return;
  //   }
  //   if (!isNumberApplicant(numberApplicant)) {
  //     setWarningNumberApplicant(true);
  //     return;
  //   }
  //   if (!isExperience(experience)) {
  //     setWarningExp(true);
  //     return;
  //   }
  //   if (!isAge(ageFrom)) {
  //     setWarningAge(true);
  //     return;
  //   }
  //   if (!isCategory(category)) {
  //     setWarningCategory(true);
  //     return;
  //   }
  //   if (!isLocation(location)) {
  //     setWarningLocaion(true);
  //     return;
  //   }
  //   if (!isDescription(ckEditorOutput)) {
  //     setWarningDescription(true);
  //     return;
  //   }
  //   if (date[0] < formattedToday || date[0] > formattedToday) {
  //     setAlerToday(true);
  //     return;
  //   }
  //   date[0] = date[0].split("/").reverse().join("/");
  //   date[1] = date[1].split("/").reverse().join("/");
  //   setWarningTitle(false);
  //   setWarningPosition(false);
  //   setWarningType(false);
  //   setWarningLevel(false);
  //   setWarningAge(false);
  //   setWarningExp(false);
  //   setWarningNumberApplicant(false);
  //   setWarningSalary(false);
  //   setWarningCategory(false);
  //   setWarningLocaion(false);
  //   setWarningDescription(false);
  //   createRecruiment(ckEditorOutput, date[0], date[1], stringAge);
  // };

  return (
    <AuthContext.Provider value={{
        warningTitle,
        warningPosition,
        alerToday,
        warningType,
        warningLevel,
        warningAge,
        warningSalary,
        warningNumberApplicant,
        warningExp,
        warningCategory,
        warningLocation,
        warningDescription,
        setCkEditorOutput

    }}>

    <div className="container-upload">
      <div className="form-container-upload">
        <h1 className="header-form-upload">Đăng tin tuyển dụng</h1>
        <div className="form-upload">
          <div className="form-container-upload">
            <div className="header-form-upload">
              <h1 className="header-single-form">{FormTitles[page]}</h1>
            </div>
            <div className="form-body-upload">
              {pageDisplay()}
            </div>
            <div className="footer-form-upload">
              <button
                disabled={page == 0}
                onClick={() => setPage((currentPage) => currentPage - 1)}
                className="btn-prev-form"
              >
                Prev
              </button>
              <button
                disabled={page== FormTitles.length -1  }
                onClick={() => setPage((currentPage) => currentPage + 1)}
                className="btn-nxt-form"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </AuthContext.Provider>
  );
}