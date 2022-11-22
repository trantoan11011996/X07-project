import React from "react";
import { AuthContext } from "../../Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import RegisterForm from "../Form_User/Register/RegisterForm";
import UserCandidate from "../Form_User/User_info/User_cadidate/UserCandidate";
import UserRecruiter from "../Form_User/User_info/User_recruiter/UserRecruiter";

export default function MainApp() {



  return (
    <AuthContext.Provider >
      <BrowserRouter>
        <div className="main-app">
          <Header />
          <Routes>
                <Route path="/" element={<HomePage/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
