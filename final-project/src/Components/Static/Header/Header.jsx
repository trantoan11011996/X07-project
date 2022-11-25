import React, { useState } from "react";
import AuthHeader from "./AuthHeader/AuthHeader";

export default function Header() {
  return (
    <div className="header">
      <AuthHeader mode={"horizontal"} />
    </div>
  );
}
