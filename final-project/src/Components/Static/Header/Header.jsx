import React, { useState } from "react";
import AuthHeader from "./AuthHeader/AuthHeader";
import "../Header/Header.css"
export default function Header() {
  return (
    <div className="header">
      <AuthHeader mode={"horizontal"} />
    </div>
  );
}
