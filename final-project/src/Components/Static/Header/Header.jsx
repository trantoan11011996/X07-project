import React, { useContext, useState } from "react";
import AuthHeader from "./AuthHeader/AuthHeader";
import "../Header/Header.css"
import { UserContext } from "../../../Context/UserContext";
export default function Header() {

  return (
    <div className="header">
      <AuthHeader />
    </div>
  );
}
