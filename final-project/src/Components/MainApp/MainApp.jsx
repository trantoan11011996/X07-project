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
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route path="/candidate" element={<UserCandidate />}></Route>
              <Route path="/recruiter" element={<UserRecruiter />}></Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthContext.Provider>
  );
}
