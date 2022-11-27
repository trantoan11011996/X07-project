import React, { useContext, useState } from "react";
import AuthHeader from "./AuthHeader/AuthHeader";
import "../Header/Header.css"
import { UserContext } from "../../../Context/UserContext";
export default function Header() {
  const {currentUser} = useContext(UserContext)
  console.log('current header',currentUser);
  return (
    <div className="header">
      <AuthHeader mode={"horizontal"} />
    </div>
  );
}
