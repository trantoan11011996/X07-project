import React from "react";
import { AuthContext } from "../../Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../MainApp/mainapp.css";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import Login from "../Form_User/Login/Login";
import RegisterForm from "../Form_User/Register/RegisterForm";
import UserCandidate from "../Form_User/User_info/User_cadidate/UserCandidate";
import UserRecruiter from "../Form_User/User_info/User_recruiter/UserRecruiter";
import { UserProvider } from "../../Context/UserContext";
import CompanyPage from "../CompanyPage/CompanyPage";
import JobAndLocation from "../JobAndLocation/JobAndLocation";
import ForgotPassword from "../Form_User/ForgotPassword/ForgotPassword";
import UpdatePassword from "../Form_User/UpdatePassword/UpdatePassword";
import UpdateInfoUser from "../Form_User/updateInfoUser/UpdateUserInfo";
import { AllJob } from "../AllJob/AllJob";
import UploadRecruiment from "../UploadRecruiment/UploadRecruiment";
import RJDetails from "../RecruiterJobDetails/RJDetails";

export default function MainApp() {
  return (
    <AuthContext.Provider>
      <UserProvider>
        <BrowserRouter>
          <div className="main-app">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/update_info" element={<UpdateInfoUser />}></Route>
              <Route
                path="/forgot_password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route path="/company" element={<CompanyPage />}></Route>
              <Route path="/job&location" element={<JobAndLocation />}></Route>
              <Route path="/allJob" element={<AllJob />}></Route>
              <Route path="/upload" element={<UploadRecruiment />}></Route>
              <Route path="/rjdetails" element={<RJDetails/>}></Route> {/** làm xong layout thì xóa */}
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthContext.Provider>
  );
}
