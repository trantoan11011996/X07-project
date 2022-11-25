import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../MetaData/MetaData";
import "../HomePage/Homepage.css"
export default function HomePage() {
  const { user } = useSelector((state) => state.auths);

  return (
    <>
      <MetaData title="Home"/>
      <div className="home-page">HomePage</div>
    </>
  );
}
