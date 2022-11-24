import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../MetaData/MetaData";

export default function HomePage() {
  const { user } = useSelector((state) => state.auths);

  return (
    <>
      <MetaData title="Home"/>
      <div className="home-page">HomePage</div>
    </>
  );
}
