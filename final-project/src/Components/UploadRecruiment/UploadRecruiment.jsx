import React, { useContext, useEffect, useState } from "react";
import "../UploadRecruiment/Upload.css";
import { JobContext } from "../../Context/JobContext";
import {
  isAgeFrom,
  isAgeTo,
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
  isDate,
} from "../../utils/validate";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailFirstInfo";
import { AuthContext } from "../../Context/Context";
import DesInfo from "./DetailSeccondInfo";
import FormRange from "react-bootstrap/esm/FormRange";
import MetaData from "../MetaData/MetaData";
import DetailFirstInfo from "./DetailFirstInfo";
import DetailSeccondInfo from "./DetailSeccondInfo";
import DescriptionInfo from "./DescriptionInfo";

export default function UploadRecruiment() {
  const [token, setToken] = useState("");
  const [ckEditorOutput,setCkEditorOutput] = useState("")
  const [WarningDate, setWarningDate] = useState(false);
  const [warningType, setWarningType] = useState(false);
  const [warningLevel, setWarningLevel] = useState(false);
  const [warningAgeFrom, setWarningAgeFrom] = useState(false);
  const [warningAgeTo, setWarningAgeTo] = useState(false);
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
  const [aletUploadSuccess,setAletUploadSuccess] = useState(false)
  const [disabledUpload, setDisabledUpload] = useState(true);
  const [confirmInfoJob,setConformInfoJob] = useState(true)
  
  const {
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

  const FormTitles = [
    "Thông tin tin tuyển dụng",
    "Thông tin tin tuyển dụng",
    "Thông tin tin tuyển dụng",
    "Thông tin tin tuyển dụng",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <BasicInfo />;
    }
    if (page === 1) {
      return <DetailFirstInfo />;
    }
    if (page === 2) {
      return <DetailSeccondInfo />;
    }
    if(page===3){
      return <DescriptionInfo/>
    }
  };

  const today = new Date();
  console.log(today);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1 ; // Months start at 0!
  if(mm < 9){
    mm = "0" + mm
  }
  
  let dd = today.getDate();
  if(mm < 9){
    dd = "0" + dd
  }
  const formattedToday = yyyy + "-" + mm + "-" + dd;
  console.log(formattedToday);
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);

  const confirmInfo = ()=>{
    setConformInfoJob(false)
    setDisabledUpload(false)
  }
  const submitRecruiment = (e, dateCompare) => {
    e.preventDefault();
    let stringAge = `${ageFrom}-${ageTo}`;    
    if(page==3){
      if(!ckEditorOutput){
        setWarningDescription(true)
        return
      }
      setAletUploadSuccess(true)
      setDisabledUpload(true)
      createRecruiment(ckEditorOutput, date[0], date[1], stringAge);
      setWarningDescription(false)
    }   
  };
  const setNextPage = () => {
    if(page == 0){
      if (!isTitle(title)) {
        setWarningTitle(true);
        return;
      }
      if (!isPosition(position)) {
        setWarningPosition(true);
        return;
      }
      if (!isType(type)) {
        setWarningType(true);
        return;
      }
      if (!isDate(date)) {
        setWarningDate(true);
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
    setAlerToday(false);
    setPage((page) => page + 1);
    return
    }
    if(page==1){
      if(!isLevel(level)){
        setWarningLevel(true)
        return
      }
      if(!isSalary(salary)){
        setWarningSalary(true)
        return
      }
      if(!isAgeFrom){
        setWarningAgeFrom(true)
        return
      }
      if(!isAgeTo){
        setWarningAgeTo(true)
        return
      }
      setWarningLevel(false)
      setWarningSalary(false)
      setWarningAgeFrom(false)
      setWarningAgeTo(false)
      setPage(page=>page+1)
      return
    }
    if(page ==2){
      if(!isNumberApplicant(numberApplicant)){
        setWarningNumberApplicant(true)
        return
      }
      if(!isExperience(experience)){
        setWarningExp(true)
        return
      }
      if(!isCategory(category)){
        setWarningCategory(true)
        return
      }
      if(!isLocation(location)){
        setWarningLocaion(true)
        return
      }
      setWarningNumberApplicant(true)
      setWarningExp(true)
      setWarningCategory(true)
      setWarningLocaion(true)
      setPage(page=>page+1)
      return
    }
  };

  return (
    <AuthContext.Provider
      value={{
        warningTitle,
        warningPosition,
        alerToday,
        warningType,
        warningLevel,
        warningAgeFrom,
        warningAgeTo,
        warningSalary,
        warningNumberApplicant,
        warningExp,
        warningCategory,
        warningLocation,
        warningDescription,
        setCkEditorOutput,
        WarningDate,
        title,
        position,
        type,
        date,
        level,
        ageFrom,
        ageTo,
        salary,
        numberApplicant,
        location,
        category,
        experience,
        ckEditorOutput,
        aletUploadSuccess,
        disabledUpload,
        confirmInfoJob,
        confirmInfo
      }}
    > 
    <MetaData title="Đăng tin tuyển dụng" />
      <div className="container-upload-job">
        <div className="form-container-upload-job">
          <form className="form-upload-job" onSubmit={submitRecruiment}>
            <div className="form-wrapper-upload">
              <div className="header-form-upload">
                <h1 className="header-single-form">{FormTitles[page]}</h1>
              </div>
              <div className="form-body-upload">{pageDisplay()}</div>
            </div>
          </form>
          <div className="footer-form-upload">
            <button
              disabled={page == 0}
              onClick={() => setPage((currentPage) => currentPage - 1)}
              className={
                page == 0
                  ? "btn-prev-form btn-form-upload-job disabled"
                  : "btn-prev-form btn-form-upload-job"
              }
            >
              Quay lại
            </button>
            <button
              disabled={page == FormTitles.length - 1}
              onClick={() => setNextPage()}
              className={
                page == FormTitles.length - 1
                  ? "btn-prev-form btn-form-upload-job disabled"
                  : "btn-prev-form btn-form-upload-job"
              }
            >
              Tiếp tục
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </AuthContext.Provider>
  );
}
