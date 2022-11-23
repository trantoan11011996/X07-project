import React from "react";
import { AuthContext } from "../../Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import HomePage from "../HomePage/HomePage";

export default function MainApp() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <div className="main-app">
          <Header />
          <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<RegisterForm/>}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
