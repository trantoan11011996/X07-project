import React from "react";
import { AuthContext } from "../../Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../MainApp/mainapp.css";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import Login from "../Form_User/Login/Login";
import UpdatePassword from "../Form_User/User_info/User_cadidate/UpdatePassword";
import RegisterForm from "../Form_User/Register/RegisterForm";
import UserCandidate from "../Form_User/User_info/User_cadidate/UserCandidate";
import UserRecruiter from "../Form_User/User_info/User_recruiter/UserRecruiter";
import { UserProvider } from "../../Context/UserContext";
import CompanyPage from "../CompanyPage/CompanyPage";
import JobAndLocation from "../JobAndLocation/JobAndLocation";
import ForgotPassword from "../Form_User/ForgotPassword/ForgotPassword";
import { AllJob } from "../AllJob/AllJob";
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
              <Route
                path="/update_password"
                element={<UpdatePassword />}
              ></Route>
              <Route
                path="/forgot_password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route path="/candidate" element={<UserCandidate />}></Route>
              <Route path="/recruiter" element={<UserRecruiter />}></Route>
              <Route path="/company" element={<CompanyPage />}></Route>
              <Route path="/job&location" element={<JobAndLocation />}></Route>
              <Route path="/a" element={<AllJob />}></Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthContext.Provider>
  );
}
